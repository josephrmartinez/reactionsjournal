import { starterData } from "../starterData"


export default function Account() {   
    
    function handleClearLocalStorage() {
        localStorage.setItem("reactionsJournalLogData", JSON.stringify(starterData))
    }

    return (
        <div className="font-mukta flex flex-col m-auto w-4/5 text-gray-700">
            <div className="text text-lg text-center font-bold my-4">No need to create an account.</div>
            <div className="my-4">This site uses local storage to save your log data.</div>
            <div className="my-4">No need to provide your email or remember a password. Your log data is stored on your browser.</div>
            
            <div className="my-4">To delete your logs, clear your browsing data or click the button below:</div>
            <div className="m-auto">
                <button className="bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-800 font-semibold py-2 px-4  border border-gray-400 rounded-full shadow my-5" onClick={handleClearLocalStorage}>clear local storage</button>
            </div>
            
        </div>
    )
}