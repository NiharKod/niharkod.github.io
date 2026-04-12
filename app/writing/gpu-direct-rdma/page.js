import PageShell from "../../../components/PageShell";

export const metadata = {
  title: "GPU Direct RDMA - Nihar Kodkani",
};

export default function GpuDirectRdmaPage() {
  return (
    <PageShell>
      <main className="post-content">
        <h1>GPU Direct RDMA</h1>
        <p className="post-date">2025-01-08</p>

        <p>GPU Direct RDMA is my favorite kind of fake technical lorem ipsum.</p>

        <p>
          In a traditional cluster, every packet takes the scenic route: GPU to
          CPU memory to NIC to network to NIC to CPU memory to GPU. With GPU
          Direct RDMA, the NIC can talk to GPU memory directly, skipping a couple
          of layovers and cutting down latency.
        </p>

        <h2>Why should anyone care?</h2>

        <p>
          For small messages, the overhead dominates. If the per-hop latency is
          <code> l </code> and the CPU bounce adds another <code>2l</code>, the
          end-to-end latency drops from roughly <code>4l</code> to{" "}
          <code>2l</code>, which is the sort of napkin math that makes systems
          people suspiciously happy.
        </p>

        <p>
          In real systems, it is messier, but the idea is the same: fewer
          copies, fewer context switches, fewer chances to regret your life
          choices at 3 a.m. while profiling an all-reduce.
        </p>

        <h2>Tiny pseudo-example</h2>

        <p>
          Here is a toy-ish snippet that pretends we have a buffer we want to
          expose for RDMA:
        </p>

        <pre>
          <code>{`// extremely fake example - for vibes only

float *buf;
size_t n = 1 << 20;

cudaMalloc(&buf, n * sizeof(float));
cudaMemset(buf, 0, n * sizeof(float));

// register GPU buffer with the NIC via some verbs-like API
gdr_handle_t handle = gdr_pin_buffer(nic_ctx, buf, n * sizeof(float));

if (!handle) {
    fprintf(stderr, "failed to register GPU buffer for RDMA\\n");
    return 1;
}

// now the remote node can RDMA-read/write directly into buf
// without a CPU bounce buffer in the middle.`}</code>
        </pre>
      </main>
    </PageShell>
  );
}
