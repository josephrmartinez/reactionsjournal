import { Outlet, NavLink, Link } from "react-router-dom";


export default function Root() {

  return (
      <div className="container">
        <div id="detail" className="flex items-center w-full h-full flex-col pt-6"><Outlet /></div>
        <nav className="flex items-center w-full shadow-inner sm:shadow-none">
          <ul className="grid grid-cols-5 gap-1 w-full h-full">
          <NavLink
            to={`/reactionsjournal/`}
            end
            className={({ isActive }) =>
              isActive
                ? "transition-all flex flex-col items-center justify-evenly rounded-full stroke-amber-500 text-gray-500 font-semibold"
                : "transition-all flex flex-col items-center justify-evenly rounded-full stroke-gray-500 text-gray-500"}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
              </svg>
              <div className="text-xs select-none">concepts</div>
          </NavLink>
          
          <NavLink
            to={`/reactionsjournal/logs`}
            className={({ isActive }) =>
              isActive
                ? "transition-all flex flex-col items-center justify-evenly rounded-full stroke-amber-500 text-gray-500 font-semibold"
                : "transition-all flex flex-col items-center justify-evenly rounded-full stroke-gray-500 text-gray-500"}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
            </svg>
            <div className="text-xs select-none">logs</div>
          </NavLink>

          <NavLink
            to={`/reactionsjournal/insights`}
            className={({ isActive }) =>
              isActive
                ? "transition-all flex flex-col items-center justify-evenly rounded-full stroke-amber-500 text-gray-500 font-semibold"
                : "transition-all flex flex-col items-center justify-evenly rounded-full stroke-gray-500 text-gray-500"}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
            </svg>
            <div className="text-xs select-none">insights</div>
          </NavLink>

          <NavLink
            to={`/reactionsjournal/account`}
            className={({ isActive }) =>
              isActive
                ? "transition-all flex flex-col items-center justify-evenly rounded-full stroke-amber-500 text-gray-500 font-semibold"
                : "transition-all flex flex-col items-center justify-evenly rounded-full stroke-gray-500 text-gray-500"}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
            <div className="text-xs select-none">account</div>
          </NavLink>

          <NavLink
            to={`/reactionsjournal/add`}
            className={({ isActive }) =>
              isActive
                ? "transition-all flex flex-col items-center justify-evenly rounded-full stroke-amber-500 text-gray-500 font-semibold"
                : "transition-all flex flex-col items-center justify-evenly rounded-full stroke-gray-500 text-gray-500"}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            <div className="text-xs select-none" >add</div>
          </NavLink>
          </ul>
        </nav>
      </div>
  );
}


