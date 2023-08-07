import Layout from "@/components/Layout";
import React from "react";

function contactUs(props) {
  return (
    <Layout>
      <h1 className=" text-3xl">Contact us</h1>
      <form>
        <input type="text" className=" border-red-500 border block" />
        <input type="password" className=" border-red-500 border block my-4" />
        <input type="email" className=" border-red-500 border block" />
        <button>Submit</button>
      </form>
    </Layout>
  );
}

export default contactUs;
