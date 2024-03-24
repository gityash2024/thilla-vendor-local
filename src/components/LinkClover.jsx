import React from "react";
import UserInput from "./UserInput";
import PrimaryButton from "./PrimaryButton";

export default function LinkClover() {
  return (
    <div className="flex gap-[2.19rem] bg-white p-[2rem] rounded-[1rem] pr-[40%] min-h-screen">
      <div className="flex-1 flex flex-col gap-[1.25rem]">
      <div className="text-text text-[1.5rem] font-[600] w-fit">
          Link Clover
        </div>
        <UserInput
            label="Merchant ID"
            type="Text"
            placeholder="xyz-3993"
        />
        <UserInput
            label="API Token"
            type="text"
            placeholder="Token"
        />

        <PrimaryButton label="Save" action={() => {}} />
      </div>
    </div>
  );
}
