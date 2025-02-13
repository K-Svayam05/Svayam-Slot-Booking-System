import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function AvailableTimeSlots() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [availableSlots, setAvailableSlots] = useState([]);

  // Sample data with more detailed information
  const slotData = {
    "2025-02-14": [
      { time: "9:00 AM - 9:30 AM", duration: "30 mins", availability: 2 },
      { time: "10:00 AM - 10:45 AM", duration: "45 mins", availability: 1 }
    ],
    "2025-02-15": [
      { time: "11:30 AM - 12:30 PM", duration: "60 mins", availability: 3 },
      { time: "2:00 PM - 2:30 PM", duration: "30 mins", availability: 2 }
    ],
    "2025-02-16": [
      { time: "3:30 PM - 4:15 PM", duration: "45 mins", availability: 1 },
      { time: "5:00 PM - 5:30 PM", duration: "30 mins", availability: 2 }
    ]
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const formattedDate = date.toISOString().split("T")[0];
    setAvailableSlots(slotData[formattedDate] || []);
  };

  const handleBooking = (slot) => {
    // Handle booking logic here
    alert(`Booking slot: ${slot.time}`);
  };

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                Available Time Slots
              </h3>
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
              <button
                className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowCalendar(!showCalendar)}
              >
                {showCalendar ? "Hide Calendar" : "Show Calendar"}
              </button>
            </div>
          </div>
        </div>
        {showCalendar && (
          <div className="flex justify-center p-4">
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              inline
              minDate={new Date()}
            />
          </div>
        )}
        <div className="block w-full overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Time Slot
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Duration
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Availability
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {selectedDate ? (
                availableSlots.length > 0 ? (
                  availableSlots.map((slot, index) => (
                    <tr key={index}>
                      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                        {slot.time}
                      </th>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {slot.duration}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {slot.availability} slots available
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <button
                          onClick={() => handleBooking(slot)}
                          className="bg-emerald-500 text-white active:bg-emerald-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        >
                          Book Now
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center py-4">
                      No available slots for {selectedDate.toLocaleDateString()}
                    </td>
                  </tr>
                )
              ) : (
                <tr>
                  <td colSpan="4" className="text-center py-4">
                    Please select a date to view available slots
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}