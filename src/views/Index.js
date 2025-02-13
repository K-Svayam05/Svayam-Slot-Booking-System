import React from "react";
import { Link } from "react-router-dom";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import patternReact from "assets/img/pattern_react.png";
import illHeader from "assets/img/ill_header.png";



export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                Easy Slot Booking System - Schedule Meetings Effortlessly
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                Configure your availability, share your booking link, and let others schedule meetings with you seamlessly. Perfect for professionals, teams, and organizations.
              </p>
              <div className="mt-12">
                <Link to="/auth/login" className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150">
                  Get Started
                </Link>
                <Link to="/auth/register" className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150">
                  Sign Up Free
                </Link>
              </div>
            </div>
          </div>
        </div>
        
<img
  className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px"
  src={patternReact}
  alt="..."
/>;

      </section>

      <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
        <div className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20" style={{ transform: "translateZ(0)" }}>
          <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
            <polygon className="text-blueGray-100 fill-current" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" className="absolute left-0 w-full block h-95-px -top-94-px">
                    <polygon points="-30,95 583,95 583,65" className="text-lightBlue-500 fill-current"></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Simplify Your Scheduling
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    No more back-and-forth emails for scheduling meetings. Set your availability once and share your booking link with anyone who needs to schedule time with you.
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-calendar"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Easy Scheduling
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Set your availability preferences and let others book time slots that work for everyone.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-clock"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Time Zone Smart
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Automatic time zone detection ensures no confusion about meeting times across different regions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-users"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">Team Management</h6>
                      <p className="mb-4 text-blueGray-500">
                        Perfect for teams - manage multiple calendars and coordinate group availability effortlessly.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-sync"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Calendar Integration
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Seamlessly integrates with Google Calendar, Outlook, and other popular calendar services.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-calendar-check text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">Smart Booking Features</h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  Our booking system comes with all the features you need to manage your schedule effectively.
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fas fa-fingerprint"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Customizable Booking Rules
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fas fa-bell"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Automated Notifications
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fas fa-globe"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Multiple Time Zones Support
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
            <img
  alt="..."
  className="max-w-full rounded-lg shadow-xl"
  style={{
    transform:
      "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
  }}
  src={illHeader}
/>

            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 bg-blueGray-200 relative pt-32">
        <div className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20" style={{ transform: "translateZ(0)" }}>
          <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
            <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <p className="text-4xl text-center">
                <span role="img" aria-label="calendar">
                  📅
                </span>
              </p>
              <h3 className="font-semibold text-3xl">
                Ready to simplify your scheduling?
              </h3>
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
                Start managing your appointments more efficiently today. Create your free account and experience the ease of automated scheduling.
              </p>
              <div className="sm:block flex flex-col mt-10">
                <Link to="/auth/register"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Create Free Account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}