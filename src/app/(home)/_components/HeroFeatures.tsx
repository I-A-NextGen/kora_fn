import React from "react";
import { HowItWork } from "./HowItWork";

const HeroFeatures = () => {
  return (
    <div className="my-32 min-h-screen px-[5%] sm:px-[15%] lg:px-[10%]">
      <div className="flex flex-col items-center justify-center gap-1">
        <h2>Uko Bikora</h2>
        <p>Umutekano binyuze mu bumenyi.</p>
      </div>
      <div className="mt-20 flex flex-col gap-y-8 text-justify">
        <div className="flex flex-wrap lg:justify-center gap-8 lg:flex-nowrap lg:gap-12">
          <HowItWork
            num="01"
            title="Kiyandikisha"
            content="Lorem ipsum dolor sit amet consectetur. Curabitur suspendisse at
              maecenas non consectetur pulvinar cursus dolor faucibus.
              Scelerisque sagittis iaculis cras ac lectus suscipit nisl. Quis
              amet pellentesque gravida quam. Sed elementum neque felis velit."
          />
          <HowItWork
            num="02"
            title="Kiyandikisha"
            content="Lorem ipsum dolor sit amet consectetur. Curabitur suspendisse at
              maecenas non consectetur pulvinar cursus dolor faucibus.
              Scelerisque sagittis iaculis cras ac lectus suscipit nisl. Quis
              amet pellentesque gravida quam. Sed elementum neque felis velit."
          />
        </div>
        <div className="flex flex-wrap lg:justify-center gap-8 lg:flex-nowrap lg:gap-12">
          <HowItWork
            num="03"
            title="Kiyandikisha"
            content="Lorem ipsum dolor sit amet consectetur. Curabitur suspendisse at
              maecenas non consectetur pulvinar cursus dolor faucibus.
              Scelerisque sagittis iaculis cras ac lectus suscipit nisl. Quis
              amet pellentesque gravida quam. Sed elementum neque felis velit."
          />
          <HowItWork
            num="04"
            title="Kiyandikisha"
            content="Lorem ipsum dolor sit amet consectetur. Curabitur suspendisse at
              maecenas non consectetur pulvinar cursus dolor faucibus.
              Scelerisque sagittis iaculis cras ac lectus suscipit nisl. Quis
              amet pellentesque gravida quam. Sed elementum neque felis velit."
          />
        </div>
      </div>
    </div>
  );
};

export default HeroFeatures;
