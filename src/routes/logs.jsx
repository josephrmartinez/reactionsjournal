import { useState, useEffect } from "react"
import { nanoid } from "nanoid"
import { starterData } from "../starterData"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { faAngleUp } from "@fortawesome/free-solid-svg-icons"
import { DateTime } from "luxon"

export default function Logs() {
    const[logData, setLogData] = useState(
        JSON.parse(localStorage.getItem("reactionsJournalLogData")) || starterData)
    
    useEffect(() => {
    localStorage.setItem("reactionsJournalLogData", JSON.stringify(logData))
  }, [logData])
   
    
    function handleExpandContent(id) {
        setLogData(prevLogData => prevLogData.map(each => {
        return each.conversationID === id ? { ...each, entryExpanded: !each.entryExpanded } : each
        })
        )
    }

    function handleDeleteLog(id) {
        setLogData(prevLogData => prevLogData.filter(each => each.conversationID !== id)
        )
    }
 

    function Log(props) {
        let dateObj = new Date(props.conversationDate)
        let dateString = dateObj.toDateString()
        let displayDate = dateString.slice(0, dateString.length - 5)

        let userReacted = props.userReactions.some(each => each.selected)
        let userResponded = props.userResponses.some(each => each.selected)
        let partnerReacted = props.partnerReactions.some(each => each.selected)
        let partnerResponded = props.partnerResponses.some(each => each.selected)

        let userReactionsList = props.userReactions.filter(each => each.selected)
        let userReactionsArray = userReactionsList.map(each => {
            return each.name
        })
        let userReactionsGrid = userReactionsArray.map(each => {
            return (
                <div className="w-fit text-gray-500 text-sm" key={each}>{each}</div>
            )
        })

        let userResponsesList = props.userResponses.filter(each => each.selected)
        let userResponsesArray = userResponsesList.map(each => {
            return each.name
        })
        let userResponsesGrid = userResponsesArray.map(each => {
            return (
                <div className="w-fit text-gray-500 text-sm" key={each}>{each}</div>
            )
        })

        let partnerReactionsList = props.partnerReactions.filter(each => each.selected)
        let partnerReactionsArray = partnerReactionsList.map(each => {
            return each.name
        })
        let partnerReactionsGrid = partnerReactionsArray.map(each => {
            return (
                <div className="w-fit text-gray-500 text-sm" key={each}>{each}</div>
            )
        })

        let partnerResponsesList = props.partnerResponses.filter(each => each.selected)
        let partnerResponsesArray = partnerResponsesList.map(each => {
            return each.name
        })
        let partnerResponsesGrid = partnerResponsesArray.map(each => {
            return (
                <div className="w-fit text-gray-500 text-sm" key={each}>{each}</div>
            )
        })
        
        let notesAdded = (props.notes !== "")


        return (
            <div className="border rounded-md flex flex-col w-10/12 p-4">
                <div className="text-gray-500 border-b-2 border-amber-500 mb-4 w-fit">{displayDate}</div>
                <div className="flex flex-row place-content-between mb-4">
                    <div className="bg-emerald-700/50 font-semibold text-white px-4 py-2 rounded-md">{ props.conversationLocation }</div>
                    <div className="bg-transparent font-semibold border border-gray-200 text-gray-500 px-4 py-2 rounded-full">{ props.conversationWith }</div>
                </div>
                
                {props.entryExpanded && <div>
                    {userReacted &&
                        <>
                        <div className="text font-bold text-gray-700">
                            {userReactionsList.length === 1 ? "reaction I had:" : "reactions I had:"}
                        </div>
                        <div className="ml-4 my-5 grid grid-cols-2 auto-rows-auto gap-3">{userReactionsGrid}</div>
                        </>
                    }

                    {partnerReacted &&
                        <>
                        <div className="text font-bold text-gray-700">
                            {partnerReactionsList.length === 1 ? "reaction I heard:" : "reactions I heard:"}
                        </div>
                        <div className="ml-4 my-5 grid grid-cols-2 auto-rows-auto gap-3">{partnerReactionsGrid}</div>
                        </>}
                    
                    {userResponded &&
                        <>
                        <div className="text font-bold text-gray-700">
                            {userResponsesList.length === 1 ? "response I had:" : "responses I had:"}
                        </div>
                        <div className="ml-4 my-5 grid grid-cols-2 auto-rows-auto gap-3">{userResponsesGrid}</div>
                        </>}
                    
                    {partnerResponded &&
                        <>
                        <div className="text font-bold text-gray-700">
                            {partnerResponsesList.length === 1 ? "response I heard:" : "responses I heard:"}
                        </div>
                        <div className="ml-4 my-5 grid grid-cols-2 auto-rows-auto gap-3">{partnerResponsesGrid}</div>
                        </>}
                    
                    {notesAdded &&
                        <>
                        <div className="text font-bold text-gray-700">
                        notes:
                        </div>
                        <div className="ml-4 my-5 w-fit text-gray-500 text-sm">{props.notes}</div>
                        </>
                    }
                </div>}
                
                <div className="grid grid-cols-3">
                    {props.entryExpanded && <div className="col-start-2 justify-self-center text-sm text-gray-300 px-5 cursor-pointer" onClick={props.handleDeleteLog}>delete</div>}
                    <div className="col-start-3 justify-self-end pl-6 cursor-pointer" onClick={props.handleExpandContent}><FontAwesomeIcon icon={props.entryExpanded ? faAngleUp : faAngleDown} size="1x"/></div>
                </div>

            </div>
        )
    }
    

    const logs = logData.map(each => <Log
        conversationID={each.conversationID}
        key={each.conversationID}
        conversationDate={each.conversationDate}
        conversationLocation={each.conversationLocation}
        conversationWith={each.conversationWith}
        userReactions={each.userReactions}
        userResponses={each.userResponses}
        partnerReactions={each.partnerReactions}
        partnerResponses={each.partnerResponses}
        notes={each.notes}
        entryExpanded={each.entryExpanded}
        handleExpandContent={() => handleExpandContent(each.conversationID)}
        handleDeleteLog={() => handleDeleteLog(each.conversationID)}
        />
        )


    return (
    <>
        {logData.length === 0 ?
        <div className="m-auto font-bold">Add entries to view logs.</div> :
        <div className="overflow-y-scroll flex flex-col w-full h-full items-center gap-4">
            {logs}
        </div>}
    </>
);

}