import { useState } from "react"
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";



export default function Concepts() {

    return (
        <div className="w-11/12">
            <nav className="w-10/12 mx-auto">
                <ul className="flex flex-row w-full items-center border rounded-full justify-between">
                <NavLink
                    to={`/reactionsjournal/concepts/reactions`}
                    end
                    className={({ isActive }) =>
                        `transition-all cursor-pointer w-1/2 h-14 rounded-full flex flex-col items-center justify-center ${isActive ? `border-2 border-emerald-700/50 text-gray-700` : `border-2 border-white text-gray-500` }`}>
                    <div className='transition-all text-lg text-center leading-5 font-mukta font-bold tracking-wide h-10 w-1/2 flex flex-col items-center'><div>habitual</div><div>reactions</div></div>
                </NavLink>
                <NavLink
                    to={`/reactionsjournal/concepts/responses`}
                    end
                    className={({ isActive }) =>
                        `transition-all cursor-pointer w-1/2 h-14 rounded-full flex flex-col items-center justify-center ${isActive ? `border-2 border-emerald-700/50 text-gray-700` : `border-2 border-white text-gray-500` }`}>
                    <div className='transition-all text-lg text-center leading-5 font-mukta font-bold tracking-wide h-10 w-1/2 flex flex-col items-center'><div>intentional</div><div>responses</div></div>
                </NavLink>
            </ul>
            </nav>
            <Outlet />
            
        </div>
    )
}




