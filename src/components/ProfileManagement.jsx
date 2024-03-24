import React, { useState } from "react";
import UserInput from "./UserInput";
import PrimaryButton from "./PrimaryButton";

export default function ProfileManagement() {
  const [state, setState] = useState(1);
  return (
    <div className="flex gap-[2.19rem] bg-white p-[2rem] rounded-[1rem] pr-[40%] min-h-screen">
      {state == 1 && <div className="flex-1 flex flex-col gap-[1.5rem]">
        <div className="text-text text-[1.5rem] font-[600] w-fit">
          Basic Details
        </div>
        <UserInput label="Full Name" placeholder="Rachel Green" type="text" />
        <UserInput label="Email" placeholder="abcd@gmail.com" type="text" />
        <UserInput
          label="Phone Number"
          placeholder="+918765432198"
          type="text"
        />
        <UserInput
          label="Passport Size Photo"
          placeholder="abcd.jpeg"
          type="file"
        />
        <div className="flex flex-col gap-[8px] w-full">
          <label className="text-[1rem] font-[600] leading-[1.25rem]">
            Address of your store
          </label>
          <div
            className={`w-full flex justify-between px-[0.5rem] py-[0.625rem] rounded-md border border-[#D5D5D5]`}
          >
            <input
              className="w-full outline-none text-[0.75rem] text-[#656565] font-[400] leading-[1.5rem]"
              type="text"
              placeholder="Max21, Circuit house, 3rd floor, plot no. 72"
            />
          </div>
          <div
            className={`w-full flex justify-between px-[0.5rem] py-[0.625rem] rounded-md border border-[#D5D5D5]`}
          >
            <input
              className="w-full outline-none text-[0.75rem] text-[#656565] font-[400] leading-[1.5rem]"
              type="text"
              placeholder="Shri Gopal Nagar, Sirsi Road"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-[0.5rem] w-full">
            <div
              className={`w-full flex justify-between px-[0.5rem] py-[0.625rem] rounded-md border border-[#D5D5D5]`}
            >
              <select className="w-full outline-none text-[0.75rem] text-[#656565] font-[400] leading-[1.5rem]">
                <option>India</option>
              </select>
            </div>
            <div
              className={`w-full flex justify-between px-[0.5rem] py-[0.625rem] rounded-md border border-[#D5D5D5]`}
            >
              <select className="w-full outline-none text-[0.75rem] text-[#656565] font-[400] leading-[1.5rem]">
                <option>Rajasthan</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-[0.5rem] w-full">
            <div
              className={`w-full flex justify-between px-[0.5rem] py-[0.625rem] rounded-md border border-[#D5D5D5]`}
            >
              <select className="w-full outline-none text-[0.75rem] text-[#656565] font-[400] leading-[1.5rem]">
                <option>Jaipur</option>
              </select>
            </div>
            <div
              className={`w-full flex justify-between px-[0.5rem] py-[0.625rem] rounded-md border border-[#D5D5D5]`}
            >
              <select className="w-full outline-none text-[0.75rem] text-[#656565] font-[400] leading-[1.5rem]">
                <option>302034</option>
              </select>
            </div>
          </div>
        </div>
        <UserInput
          label="Image of Your Store"
          placeholder="abcd.jpeg"
          type="file"
        />
        <PrimaryButton label="Save" action={() => {setState(2)}} />
      </div>}
      {state == 2 && <div className="flex-1 flex flex-col gap-[1.25rem]">
      <div className="text-text text-[1.5rem] font-[600] w-fit">
          Documents
        </div>
        <UserInput
            label="PAN Card"
            type="file"
            placeholder="abcd.jpeg"
        />
        <UserInput
            label="Aadhaar Card"
            type="file"
            placeholder="abcd.jpeg"
        />
        <UserInput
            label="GST Certificate"
            type="file"
            placeholder="abcd.jpeg"
        />
        <UserInput
            label="FSSAI License"
            type="file"
            placeholder="abcd.jpeg"
        />
        <UserInput
            label="Trade License"
            type="file"
            placeholder="abcd.jpeg"
        />
        <UserInput
            label="Address Proof"
            type="file"
            placeholder="abcd.jpeg"
        />
        <UserInput
            label="Business Address Proof"
            type="file"
            placeholder="abcd.jpeg"
        />
        <PrimaryButton label="Save" action={() => {setState(3)}} />
      </div>}
      {state == 3 && <div className="flex-1 flex flex-col gap-[1.25rem]">
      <div className="text-text text-[1.5rem] font-[600] w-fit">
          Bank Details
        </div>
        <UserInput
          label="Bank Name"
          type="text"
          placeholder="Enter Bank Name"
        />
        <UserInput
          label="Account Number"
          type="text"
          placeholder="Enter Account Number"
        />
        <UserInput
          label="IFSC Code"
          type="text"
          placeholder="Enter IFSC Code"
        />
        <UserInput
          label="Bank Statement/ Cancelled cheque"
          type="file"
          placeholder="abcd.jpeg"
        />
        <PrimaryButton label="Save" action={() => {}} />
      </div>}
    </div>
  );
}
