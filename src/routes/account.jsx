import { useState } from "react"
import { starterData } from "../starterData"


export default function Account() {   
    const [accountData, setAccountData] = useState( 
        JSON.parse(localStorage.getItem("reactionsJournalLogData")) || starterData)
        


    function handleClearLocalStorage() {
        setAccountData(starterData)
        localStorage.setItem("reactionsJournalLogData", JSON.stringify(starterData))
        
    }


    return (
        <div className="font-mukta flex flex-col m-auto text-gray-600">
            <div className="flex flex-col m-auto">
                <div className="text text-lg text-gray-600 font-medium text-center my-4">No need to create an account.</div>
                <div className="my-4 mx-auto max-w-xs text-center">This site uses local storage to save your log data on your browser.</div>
                
                <div className="my-4 mx-auto max-w-xs text-center">To delete your logs, clear your browsing data or click the button below:</div>
                <div className="m-auto">
                    <button
                        className="bg-emerald-700/60  hover:bg-emerald-700/70 duration-300 drop-shadow-lg shadow-md active:shadow text-white font-semibold py-2 px-4 rounded-full  my-5"
                        onClick={handleClearLocalStorage}
                        >
                        {accountData == starterData ? "local storage cleared" : "clear local storage"}
                    </button>
                </div>


            </div>
            

            <div className="text-center text-sm mt-24 text-gray-500 mb-6">site created by <a className="underline" href="https://josephm.dev/">josephm.dev</a></div>
            
            
        </div>
    )
}
