import React from "react";
import Link from "next/link";
import { BsCalendar2Week } from "react-icons/bs";

function Sidebar() {
  return (
    <>
      <div className="flex flex-col w-64 h-screen px-4 py-8 border-r bg-gradient-to-b from-[#DA4379] to-[#E7A93F] sticky top-0">
        <h2 className="text-[21px] font-semibold text-center text-white">
          Manage
        </h2>
        <div className="flex flex-col justify-between mt-6">
          <aside>
            <ul>
              <li>
                <Link href="/">
                  <a className="flex justify-center items-center px-4 py-2 text-white rounded-md">
                    <div className="mr-[10px]">
                      <BsCalendar2Week className="w-[20px] h-[20px] text-white" />
                    </div>
                    <h1 className="text-[18px] text-white">Events</h1>
                  </a>
                </Link>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
