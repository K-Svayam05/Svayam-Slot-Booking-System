import React from "react";
import PropTypes from "prop-types";
import { MoreVertical, Clock, Calendar, User } from 'lucide-react';

export default function BookingTable({ color }) {
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                Available Slots
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Time Slot
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Duration
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Status
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Participants
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Availability
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                ></th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  time: "9:00 AM",
                  date: "Mon, Feb 14",
                  duration: "30 min",
                  status: "available",
                  participants: 2,
                  availability: 100
                },
                {
                  time: "10:00 AM",
                  date: "Mon, Feb 14",
                  duration: "45 min",
                  status: "pending",
                  participants: 1,
                  availability: 60
                },
                {
                  time: "11:30 AM",
                  date: "Mon, Feb 14",
                  duration: "60 min",
                  status: "booked",
                  participants: 3,
                  availability: 0
                },
                {
                  time: "2:00 PM",
                  date: "Mon, Feb 14",
                  duration: "30 min",
                  status: "available",
                  participants: 0,
                  availability: 100
                }
              ].map((slot, idx) => (
                <tr key={idx}>
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                    <div className="w-12 h-12 bg-blueGray-200 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6" />
                    </div>
                    <span
                      className={
                        "ml-3 font-bold " +
                        (color === "light" ? "text-blueGray-600" : "text-white")
                      }
                    >
                      {slot.time}
                      <div className="text-blueGray-400 text-xs font-normal">
                        {slot.date}
                      </div>
                    </span>
                  </th>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {slot.duration}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i className={`fas fa-circle text-${
                      slot.status === 'available' ? 'emerald' : 
                      slot.status === 'pending' ? 'orange' : 'red'
                    }-500 mr-2`}></i>
                    {slot.status}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="flex">
                      {Array(slot.participants).fill(0).map((_, i) => (
                        <div
                          key={i}
                          className={`w-10 h-10 rounded-full border-2 border-blueGray-50 shadow ${
                            i > 0 ? '-ml-4' : ''
                          } bg-blueGray-200 flex items-center justify-center`}
                        >
                          <User size={20} className="text-blueGray-500" />
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="flex items-center">
                      <span className="mr-2">{slot.availability}%</span>
                      <div className="relative w-full">
                        <div className={`overflow-hidden h-2 text-xs flex rounded bg-${
                          slot.availability === 100 ? 'emerald' :
                          slot.availability > 60 ? 'teal' :
                          'red'
                        }-200`}>
                          <div
                            style={{ width: `${slot.availability}%` }}
                            className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-${
                              slot.availability === 100 ? 'emerald' :
                              slot.availability > 60 ? 'teal' :
                              'red'
                            }-500`}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                    <button className="text-blueGray-500">
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

BookingTable.defaultProps = {
  color: "light",
};

BookingTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};