import { useState } from "react"
import { starterData } from "../starterData"

export default function Insights() {
    const[logData, setLogData] = useState(
        JSON.parse(localStorage.getItem("reactionsJournalLogData")) || starterData)
    

    console.log(logData)
    function createArray(category) {
        let returnArray = []
        logData.map(each => {
            let returnObj = each[category].filter(each => each.selected);
        returnObj.forEach(each => returnArray.push(each.name))
        })
        return returnArray
    }

    function returnTopThree(arr) {
        const map = {};
        let keys = [];
        for (let i = 0; i < arr.length; i++) {
            if (map[arr[i]]) {
                map[arr[i]]++;
            } else {
                map[arr[i]] = 1;
            }
        }
        for (let i in map) {
            keys.push(i);
        }
        keys = keys.sort((a, b) => {

            if (map[a] === map[b]) {

                if (a > b) {
                    return 1;
                } else {
                    return -1;
                }
            }
            else {
                return map[b] - map[a];
            }
        })
        .slice(0, 3);
        return keys;
    };
    
    
    function FrequentItem(props) {
        return (
            <div className="w-fit text-gray-500 text-sm" >{props.text}</div>
        )
    }

    const frequentUserReactions = 
        returnTopThree(createArray("userReactions")).map(each => <FrequentItem text={each} key={each} />)

    const frequentUserResponses = 
        returnTopThree(createArray("userResponses")).map(each => <FrequentItem text={each} key={each} />)

    const frequentPartnerReactions = 
        returnTopThree(createArray("partnerReactions")).map(each => <FrequentItem text={each} key={each} />)

    const frequentPartnerResponses = 
        returnTopThree(createArray("partnerResponses")).map(each => <FrequentItem text={each} key={each} />)

    
    return (
        <>
            {logData.length < 5 && <div className="font-mukta flex flex-col items-center m-auto w-4/5 text-gray-700">
                <div className="text text-lg text-gray-600 font-medium text-center">Add five entries to start seeing insights on common reactions and communication patterns.</div>
            </div>}
            {logData.length >= 5 && <div className="font-mukta flex flex-col my-auto text-gray-700">
                <div className='text-lg font-semibold text-gray-700'>conversations logged: </div>
                <div className="ml-4 mb-4 mt-1 text-gray-500 text-sm">{logData.length}</div>

                <div className='text-lg font-semibold text-gray-700'>your frequent reactions:</div>
                <div className="ml-4 mb-6 mt-1 flex flex-col">
                    {frequentUserReactions}
                </div>

                <div className='text-lg font-semibold text-gray-700'>your frequent responses:</div>
                <div className="ml-4 mb-6 mt-1 flex flex-col">
                    {frequentUserResponses}
                </div>

                <div className='text-lg font-semibold text-gray-700'>reactions frequently observed:</div>
                <div className="ml-4 mb-6 mt-1 flex flex-col">
                    {frequentPartnerReactions}
                </div>

                <div className='text-lg font-semibold text-gray-700'>responses frequently observed:</div>
                <div className="ml-4 mb-6 mt-1 flex flex-col">
                    {frequentPartnerResponses}
                </div>
            </div>}
            <div className="text-center text-sm text-gray-500 mb-6">site created by <a className="underline" href="https://josephm.dev/">josephm.dev</a></div>
        </>
    )
}