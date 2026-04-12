"use client";

import dynamic from "next/dynamic";

const AnimatedName = dynamic(() => import("./AnimatedName"), {
  ssr: false,
});

export default AnimatedName;
