import type { NextPage } from "next";
import Head from "next/head";
import Description from "../components/Description";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Medium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Description />
    </div>
  );
};

export default Home;
