import Layout from "@/components/Layout";
import React from "react";
import * as fbq from "../lib/fpixel";

function index(props) {
  const handleClick = () => {
    fbq.event('Purchase', { currency: 'USD', value: 10 })
  }
  return (
    <Layout>
      <h1 className=" text-3xl">Home page</h1>
      <button type="button" className=" bg-green-600" onClick={handleClick}>
        Buy $10
      </button>
    </Layout>
  );
}

export default index;
