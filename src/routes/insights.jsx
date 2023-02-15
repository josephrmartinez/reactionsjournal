import { useState } from "react"

export default function Insights() {
    const[logData, setLogData] = useState(
        JSON.parse(localStorage.getItem("reactionsJournalLogData")) || starterData)
    
    console.log(logData.length)
    
    return (
        <>
            {logData.length < 5 && <div className="font-mukta flex flex-col items-center m-auto w-4/5 text-gray-700">
                <div className="text text-lg font-bold text-center">Add five entries to start seeing insights on common reactions and communication patterns.</div>
            </div>}
            {logData.length >= 5 && <div className="font-mukta flex flex-col my-auto text-gray-700">
                <div className='text-lg font-semibold text-gray-700'>conversations logged: </div>
                <div className="ml-4 mb-6 mt-2 text-gray-500 text-sm">{logData.length}</div>

                <div className='text-lg font-semibold text-gray-700'>your frequent reactions:</div>
                <div className="ml-4 mb-6 mt-2 grid grid-cols-2 auto-rows-auto gap-3">
                    <div className="w-fit text-gray-500 text-sm" >defensiveness</div>
                    <div className="w-fit text-gray-500 text-sm" >sarcasm</div>
                </div>

                <div className='text-lg font-semibold text-gray-700'>your frequent responses:</div>
                <div className="ml-4 mb-6 mt-2 grid grid-cols-2 auto-rows-auto gap-3">
                    <div className="w-fit text-gray-500 text-sm" >quiet listening</div>
                    <div className="w-fit text-gray-500 text-sm" >empathy</div>
                </div>

                <div className='text-lg font-semibold text-gray-700'>reactions you frequently observe:</div>
                <div className="ml-4 mb-6 mt-2 grid grid-cols-2 auto-rows-auto gap-3">
                    <div className="w-fit text-gray-500 text-sm" >giving advice</div>
                    <div className="w-fit text-gray-500 text-sm" >storytelling</div>
                </div>

                <div className='text-lg font-semibold text-gray-700'>responses you frequently observe:</div>
                <div className="ml-4 mb-6 mt-2 grid grid-cols-2 auto-rows-auto gap-3">
                    <div className="w-fit text-gray-500 text-sm" >reflecting feelings</div>
                    <div className="w-fit text-gray-500 text-sm" >quiet listening</div>
                </div>
            </div>}
        </>
    )
}