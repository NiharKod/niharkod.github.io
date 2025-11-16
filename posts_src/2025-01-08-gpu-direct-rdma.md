---
title: GPU Direct RDMA
date: 2025-01-08
slug: gpu-direct-rdma
---

GPU Direct RDMA is my favorite kind of fake technical lorem ipsum.

In a traditional cluster, every packet takes the scenic route:
GPU → CPU memory → NIC → network → NIC → CPU memory → GPU. With GPU Direct RDMA, the NIC can talk to GPU memory directly, skipping a couple of layovers and cutting down latency.

## Why should anyone care?

For small messages, the overhead dominates. If the per-hop latency is \( \ell \) and the CPU bounce adds another \( 2\ell \), then the end-to-end latency goes from roughly

\[
T_{\text{baseline}} \approx 4\ell
\]

to

\[
T_{\text{gdr}} \approx 2\ell,
\]

which is the sort of napkin math that makes systems people suspiciously happy.

In real systems, it’s messier, but the idea is the same: fewer copies, fewer context switches, fewer chances to regret your life choices at 3 a.m. while profiling an all-reduce.

## Tiny pseudo-example

Here’s a toy-ish snippet that pretends we have a buffer we want to expose for RDMA:

```c
// extremely fake example – for vibes only

float *buf;
size_t n = 1 << 20;

cudaMalloc(&buf, n * sizeof(float));
cudaMemset(buf, 0, n * sizeof(float));

// register GPU buffer with the NIC via some verbs-like API
gdr_handle_t handle = gdr_pin_buffer(nic_ctx, buf, n * sizeof(float));

if (!handle) {
    fprintf(stderr, "failed to register GPU buffer for RDMA\n");
    return 1;
}

// now the remote node can RDMA-read/write directly into `buf`
// without a CPU bounce buffer in the middle.
```
