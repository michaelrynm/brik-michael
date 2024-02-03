import React from "react";

import Layout from "../components/layout";
import Card from "../components/card";

import HeroImg from "../assets/warehouse.jpg";
import barIcon from "../assets/barIcon.png";
import growthIcon from "../assets/growth.png";
import accountIcon from "../assets/accounts.png";
import bankIcon from "../assets/bank.png";
import laptopIcon from "../assets/laptop.jpg";

export default function Index() {
  return (
    <div>
      <Layout>
        <div className="px-24">
          {/* Hero Section */}
          <div className="grid grid-cols-3 items-center align-middle mt-10">
            <div className="col-span-2">
              <p className="font-bold text-7xl">Maximize your</p>
              <p className="font-bold text-7xl">warehouse efficiency</p>
            </div>
            <div>
              <p className="col-span-1">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum doloremque fuga totam quaerat deserunt, ipsa, ab itaque
                incidunt debitis saepe perferendis similique molestias, modi
                neque nulla quam amet aspernatur consequuntur?
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10 relative z-10">
          <div className="absolute top-72 left-0 w-full h-1/2 bg-blue-300 -z-10"></div>
          <img src={HeroImg} alt="" className="w-3/4" style={{ height: 500 }} />
        </div>
        {/* Hero Section End */}

        {/* Feature Section */}
        <div className="mt-48 px-24">
          <div>
            <p className="text-2xl text-blue-400 font-semibold">
              Our Top Features
            </p>
          </div>
          <div className="text-5xl font-medium mt-5">
            <p>Fully Integrated</p>
            <p>With Apps</p>
          </div>
          <div className="flex gap-24 justify-center mt-5">
            <Card img={barIcon} title="Sales" />
            <Card img={growthIcon} title="Purchase" />
            <Card img={accountIcon} title="Accounting" />
            <Card img={bankIcon} title="Loans" />
          </div>
        </div>
        {/* Feature Section End */}

        <div className="bg-blue-300 mt-36 px-24 py-24 flex gap-36 justify-center items-center">
          <div className="text-7xl font-semibold tracking-wider">
            <p>Improve</p>
            <p>Peformance &</p>
            <p>Efficiency</p>
          </div>

          <div>
            <img src={laptopIcon} alt="" className="rounded-2xl w-[512px]" />
          </div>
        </div>
      </Layout>
    </div>
  );
}
