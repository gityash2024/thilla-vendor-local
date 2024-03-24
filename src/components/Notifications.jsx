import React, { useState } from "react";
import LeftArrowIcon from "../assets/svg/left-arrow-light-icon.svg";
import RighttArrowIcon from "../assets/svg/right-arrow-light-icon.svg";
import emptyIcon from '../assets/images/empty-notifications.svg';

const Notifications = () => {
  const data = [
    {
      title: "Loerem Ipsum dolor sit amet",
      date: "25-07-2023",
      time: "05:10 AM",
    },
    {
      title: "Loerem Ipsum dolor sit amet",
      date: "25-07-2023",
      time: "05:10 AM",
    },
    {
      title: "Loerem Ipsum dolor sit amet",
      date: "25-07-2023",
      time: "05:10 AM",
    },
    {
      title: "Loerem Ipsum dolor sit amet",
      date: "25-07-2023",
      time: "05:10 AM",
    },
    {
      title: "Loerem Ipsum dolor sit amet",
      date: "25-07-2023",
      time: "05:10 AM",
    },
    {
      title: "Loerem Ipsum dolor sit amet",
      date: "25-07-2023",
      time: "05:10 AM",
    },
    {
      title: "Loerem Ipsum dolor sit amet",
      date: "25-07-2023",
      time: "05:10 AM",
    },
  ];
  const [notifications, setNotifications] = useState(data);

  return (
    <div className="flex flex-col gap-[2.5rem] p-[1rem]">
      <h1 className="text-text text-[1.5rem] font-[600] tracking-[0.07813rem]">
        Notifications
      </h1>
      <div>
        <div className="flex flex-row items-center justify-end border-y border-text/10 px-[0.62rem] py-[0.81rem] ">
          <div className="cursor-pointer text-center text-[12px] font-[600] underline text-dark mr-[57px]">
            Mark all as read
          </div>
          <div
            className="cursor-pointer text-center text-[12px] font-[600] underline text-dark mr-[57px]"
            onClick={() => {
              setNotifications([]);
            }}
          >
            Clear all
          </div>
          <h1 className="text-center text-[15px] font-[400] text-[#4B465C] mr-[33px] opacity-[50%]">
            1-10 of 10
          </h1>
          <div className="flex gap-[0.75rem]">
            <img src={LeftArrowIcon} alt="previous" />
            <img src={RighttArrowIcon} alt="next" />
          </div>
        </div>
        {notifications.length > 0 ? <div>
          {notifications.map((notification) => {
            return (
              <>
                <div className="flex flex-row justify-between px-[1.25rem] py-[0.88rem]">
                  <h2 className="ml-5 text-[16px] font-medium text-[#5B6572]">
                    {notification.title}
                  </h2>
                  <div className="flex gap-[2.5rem]">
                    <h3 className="font-normal text-[#4B465C] text-[13px] opacity-[50%]">
                      {notification.date}
                    </h3>
                    <h3 className="font-normal text-[#4B465C] text-[13px] opacity-[50%]">
                      {notification.time}
                    </h3>
                  </div>
                </div>
                <hr />
              </>
            );
          })}
        </div>: <div className="flex justify-center items-center">
                <div className="py-[2.5rem]">
                  <img className="w-[27rem]" src={emptyIcon}  alt="Empty"/>
                </div>
          </div>}
      </div>
    </div>
  );
};

export default Notifications;
