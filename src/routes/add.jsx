import { useState } from "react"
import useMultistepForm from "../useMultistepForm"
import DateLocationWithForm from "./addForms/DateLocationWithForm"
import UserReactionsForm from "./addForms/UserReactionsForm"
import UserResponsesForm from "./addForms/UserResponsesForm"
import PartnerReactionsForm from "./addForms/PartnerReactionsForm"
import PartnerResponsesForm from "./addForms/PartnerResponsesForm"
import NotesAndSubmitForm from "./addForms/NotesAndSubmitForm"
import { Navigate } from "react-router-dom"
import { nanoid } from "nanoid"
import { starterData } from "../starterData"




const INITIAL_DATA = {
    conversationID: nanoid(),
    conversationDate: new Date(),
    conversationLocation: "",
    conversationWith: "",
    userReactions: [
    { id: "1", name: "giving advice", selected: false },
    { id: "2", name: "defensiveness", selected: false },
    { id: "3", name: "changing subject", selected: false },
    { id: "4", name: "diagnosing", selected: false },
    { id: "5", name: "dismissing feelings", selected: false },
    { id: "6", name: "sarcasm", selected: false },
    { id: "7", name: "taking it personally", selected: false },
    { id: "8", name: "shutting down", selected: false },
    { id: "9", name: "devil's advocate", selected: false },
    { id: "10", name: "intellectualizing", selected: false },
    { id: "11", name: "sympathy", selected: false },
    { id: "12", name: "one-upping", selected: false },
    { id: "13", name: "commiserating", selected: false },
    { id: "14", name: "personal storytelling", selected: false }
  ],
    userResponses: [
    { id: "1", name: "empathy", selected: false },
    { id: "2", name: "quiet listening", selected: false },
    { id: "3", name: "reflecting feelings", selected: false },
    { id: "4", name: "being present", selected: false },
    { id: "5", name: "curiosity", selected: false },
    { id: "6", name: "speaking up", selected: false },
    { id: "7", name: "take responsibility", selected: false },
    { id: "8", name: "assume positive intent", selected: false }
  ],
    partnerReactions: [
    { id: "1", name: "giving advice", selected: false },
    { id: "2", name: "defensiveness", selected: false },
    { id: "3", name: "changing subject", selected: false },
    { id: "4", name: "diagnosing", selected: false },
    { id: "5", name: "dismissing feelings", selected: false },
    { id: "6", name: "sarcasm", selected: false },
    { id: "7", name: "taking it personally", selected: false },
    { id: "8", name: "shutting down", selected: false },
    { id: "9", name: "devil's advocate", selected: false },
    { id: "10", name: "intellectualizing", selected: false },
    { id: "11", name: "sympathy", selected: false },
    { id: "12", name: "one-upping", selected: false },
    { id: "13", name: "commiserating", selected: false },
    { id: "14", name: "personal storytelling", selected: false }
  ],
    partnerResponses: [
    { id: "1", name: "empathy", selected: false },
    { id: "2", name: "quiet listening", selected: false },
    { id: "3", name: "reflecting feelings", selected: false },
    { id: "4", name: "being present", selected: false },
    { id: "5", name: "curiosity", selected: false },
    { id: "6", name: "speaking up", selected: false },
    { id: "7", name: "take responsibility", selected: false },
    { id: "8", name: "assume positive intent", selected: false }
  ],
    notes: "",
    entryExpanded: false
}

export default function Add() {
    const [data, setData] = useState(INITIAL_DATA)
    
    function updateFields(fields) {
        setData(prevData => {
            return {...prevData, ...fields}
        })
    }


    const { steps, currentStepIndex, step, isLastStep, back, next } =
        useMultistepForm([
            <DateLocationWithForm {...data} updateFields={updateFields} />,
            <UserReactionsForm {...data} updateFields={updateFields} />,
            <UserResponsesForm {...data} updateFields={updateFields} />,
            <PartnerReactionsForm {...data} updateFields={updateFields} />,
            <PartnerResponsesForm {...data} updateFields={updateFields} />,
            <NotesAndSubmitForm {...data} updateFields={updateFields} />
        ])
    
    

    function onSubmit(e) {
        e.preventDefault();
        if (!isLastStep) return next()

        console.log(data)
        // Parse any JSON previously stored in allEntries
        var existingData = JSON.parse(localStorage.getItem("reactionsJournalLogData"));
        if(existingData == null) existingData = starterData;
        
        localStorage.setItem("entry", JSON.stringify(data));
        // Save allEntries back to local storage
        existingData.push(data);
        console.log(existingData)
        localStorage.setItem("reactionsJournalLogData", JSON.stringify(existingData));
    };


    return (
        <div className="font-mukta h-full w-4/5 flex flex-col items-center">
            <form className="h-full w-full grid grid-cols-1  grid-rows-[10%_80%_10%]" onSubmit={onSubmit}>
                {step}
            <div className="flex flex-row justify-around items-start">
                {currentStepIndex === 0 && <div className="w-16"></div>}
                {currentStepIndex !== 0 && <button type="button" className="w-16" onClick={back}>back</button>}
                {<button className="w-16" type="submit">{isLastStep ? "log entry" : "next"}</button>}
            </div>
            </form>
            </div>
    )
}