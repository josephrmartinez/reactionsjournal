import { useState } from "react"
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";



export default function Concepts() {

    return (
        <div >
            <nav className="">
                <ul className="flex flex-row w-10/12 mx-auto items-center border rounded-full justify-between">
                <NavLink
                    to={`/reactionsjournal/concepts/reactions`}
                    end
                    className={({ isActive }) =>
                        `transition-all cursor-pointer w-1/2 h-14 rounded-full flex flex-col items-center justify-center ${isActive ? `border-2 border-green-700 text-gray-700` : `border-none text-gray-500` }`}>
                    <div className={`transition-all text-lg text-center leading-5 font-mukta font-bold tracking-wide h-10 w-6/12`}>habitual reactions</div>
                </NavLink>
                <NavLink
                    to={`/reactionsjournal/concepts/responses`}
                    end
                    className={({ isActive }) =>
                        `transition-all cursor-pointer w-1/2 h-14 rounded-full flex flex-col items-center justify-center ${isActive ? `border-2 border-green-700 text-gray-700` : `border-none text-gray-500` }`}>
                    <div className={`transition-all text-lg text-center leading-5 font-mukta font-bold tracking-wide h-10 w-6/12`}>intentional responses</div>
                </NavLink>
            </ul>
            </nav>
            <Outlet />
            
        </div>
    )
}




