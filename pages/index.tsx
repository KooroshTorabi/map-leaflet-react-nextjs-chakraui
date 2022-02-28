import type { NextPage } from "next";
import Head from "next/head";
import PopupExample from "../components/PopupExample";
// import PopupExample from "../components/PopupExample/insdex";
import dynamic from "next/dynamic";
const MapWithNoSSR = dynamic(() => import("../components/LayersControlExample"), {
  ssr: false,
});

const Home: NextPage = () => {
  return <MapWithNoSSR></MapWithNoSSR>;
  // return <PopupExample />;
};

export default Home;
