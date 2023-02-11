import { useState } from "react"
import useMultistepForm from "../useMultistepForm"
import DateLocationWithForm from "./addForms/DateLocationWithForm"
import UserReactionsForm from "./addForms/UserReactionsForm"
import UserResponsesForm from "./addForms/UserResponsesForm"
import PartnerReactionsForm from "./addForms/PartnerReactionsForm"
import PartnerResponsesForm from "./addForms/PartnerResponsesForm"
import NotesAndSubmitForm from "./addForms/NotesAndSubmitForm"
import { Navigate } from "react-router-dom"



const INITIAL_DATA = {
    "conversationID": "",
    "conversationDate": "",
    "conversationLocation": "",
    "conversationWith": [],
    "userReactions": [],
    "userResponses": [],
    "partnerReactions": [],
    "partnerResponses": [],
    "notes": ""
}

export default function Add() {
    const [data, setData] = useState(INITIAL_DATA)
    
    function updateFields(fields) {
        setData(prevData => {
            return {...prevData, ...fields}
        })
        console.log(data)
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
    }

    return (
        <div className="font-mukta h-full w-4/5 flex flex-col items-center">
            <form className="h-full w-full grid grid-cols-1  grid-rows-[10%_80%_10%]" onSubmit={onSubmit}>
                {step}
            <div className="flex flex-row justify-around">
                {currentStepIndex !== 0 && <button type="button" onClick={back}>back</button>}
                {<button type="submit">{isLastStep ? "log entry" : "next"}</button>}
            </div>
            </form>
            </div>
    )
}