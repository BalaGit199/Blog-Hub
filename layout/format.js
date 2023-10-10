import React from "react";
import Header from "../components/Header";
import Footer from "../components/footer";
import Head from "next/head";

function Format({ children }) {
  return (
    <>
      <Head>
        <title>BlogHub</title>
      </Head>
      <div>
        <Header/>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Format;
