'use client'

import dynamic from "next/dynamic";

const MapWithNoSSR = dynamic(() => import("../components/LayersControlExample"), {
  ssr: false,
});

export default function Home() {
  return <MapWithNoSSR />;
}
