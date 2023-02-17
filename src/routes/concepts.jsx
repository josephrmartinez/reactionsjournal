import { useState } from "react"



export default function Concepts() {
    const [headerHabituals, setHeaderHabituals] = useState(true)
    const [infoBox, setInfoBox] = useState({isDisplayed: false, title: "", content: ""})


    function HeaderToggleOption(props) {
        const styles = {
            border: props.isSelected ? "2px solid #04785780" : "none",
            color: props.isSelected ? "#4b5563" : "#B6B6B6",
        }
        return (
            <div onClick={toggleHeader} style={styles} className="m-0 cursor-pointer w-1/2 h-14 rounded-full flex flex-col items-center justify-center">
                <div className="text-lg text-center leading-5 font-mukta font-bold tracking-wide h-10 w-6/12">{props.text}</div>
            </div>
        )
    }


    function Header(props) {
        return (
            <div className="flex flex-row w-11/12 items-center border rounded-full justify-between">
                <HeaderToggleOption text={`habitual\nreactions`} isSelected={headerHabituals}/>
                <HeaderToggleOption text="intentional responses" isSelected={!headerHabituals}/>
            </div>
        )
    }

    function InfoBox(props) {
        return (
            <div className="fixed inset-0" onClick={props.toggleInfoBox}>
            <div className="infobox z-40">
                <div className="font-mukta text-gray-500 text-lg tracking-wide font-bold text-center mx-4 my-8 leading-5">{infoBox.title}</div>
                    <div className="font-mukta text-base text-gray-500 mx-5">{ infoBox.content }</div>
                    {/* <div className="h-full w-full flex flex-row justify-around">
                        <div>back</div>
                        <div>next</div>
                    </div> */}
            </div>
            </div>
        )
    }

    function Concept(props) {
        return (
            <div className="cursor-pointer flex flex-col justify-center align-middle" onClick={props.handleConceptClick}>
                <div className="select-none text-center tracking-wide font-mukta text-gray-500 drop-shadow-sm">{props.text}</div>
            </div>
        )
    }


    let habituals = habitualReactions.map(each => <Concept handleConceptClick={() => handleConceptClick(each)} key={each.concept} text={each.concept}/>)
    let intentionals = intentionalResponses.map(each => <Concept handleConceptClick={() => handleConceptClick(each)} key={each.concept} text={each.concept}/>)

    function toggleHeader() {
        setHeaderHabituals(!headerHabituals)
    }





    function handleConceptClick(conceptObj) {
        setInfoBox(prevInfoBox => ({
            isDisplayed: true,
            title: conceptObj.fulltitle,
            content: conceptObj.description
        }))
    }


    function toggleInfoBox() {
        setInfoBox(prevInfoBox => ({
            ...prevInfoBox,
            isDisplayed: !infoBox.isDisplayed,
        }))
    }

    return (
        <div className="flex items-center flex-col h-full w-full">
            <Header />
            <div className="content-grid">
                {headerHabituals && habituals}
                {!headerHabituals && intentionals}
            </div>
            {infoBox.isDisplayed && <InfoBox toggleInfoBox={toggleInfoBox} />}
        </div>
    )
}


let habitualReactions = 
    [
    {
        concept: "giving advice",
        fulltitle: "giving advice, problem solving, fixing with prescriptions",
        description: "Listener tells the speaker what they should do."
    }, 
    {
        concept: "defensiveness",
        fulltitle: "defensiveness",
        description: "Listener is acutely sensitive to criticism where there is none intended, gets defensive, dismissive, or incorrectly assumes the speaker is talking about them. Listener remains fixated on perceived criticism."
     },
     {
        concept: "changing subject",       
        fulltitle: "changing the subject",
        description: "Listener makes a connection to something the speaker says and decides to shift the topic."
    },
    {          
        concept: "diagnosing",
        fulltitle: "diagnosing, labeling, static judgement",
        description: "Listener interprets or evaluates speaker's behavior. Labels speaker with static judgement or diagnosis."
    }, 
    {
        concept: "dismissing feelings",
        fulltitle: "dismissing difficult feelings",
        description: "Listener trys to make the speaker feel better with dismissive comments, even if well-intentioned: 'Everything is going to be okay.' 'There is no need to feel that way.' Dismisses difficult feelings instead of relating to them with curiosity."
    },     
    {
        concept: "sarcasm",
        fulltitle: "sarcasm",
        description: "Listener replies with sarcasm, attempts to make a joke or inject humor into conversation. Keeping things at a  level."
    },
    {
        concept: "taking it personally",
        fulltitle: "taking it personally",
        description: "Listener assumes the main reason the speaker is talking to them is that the speaker's situation has to do with them. Listener inserts themself into the narrative."
    },
    {
        concept: "shutting down",
        fulltitle: "shutting down",
        description: "Listener closes down, disengages from interaction. Self-preservation, withdrawing, minimizing response."
    },
    {
        concept: "devil's advocate",
        fulltitle: "devil's advocate",
        description: "Listener plays devil's advocate or asks the speaker if they've considered the other person's perspective. Tries to empathize with the “other” before the speaker."
    },
    {
        concept: "intellectualizing",
        fulltitle: "intellectualizing",
        description: "Listener references expert opinion, academic studies, a book or article they recently read, or other “authoritative” source to make a point."
    },
    {
        concept: "sympathy",
        fulltitle: "sympathy, feeling sorry for the other person with pity",
        description: "Listener shares their own feelings about what the speaker said rather than holding space to honor the speaker’s unique feelings and needs."
    },
    {
        concept: "one-upping",
        fulltitle: "one-upping",
        description: "Listener is intent on telling the speaker that they've been through something even more significant than what the speaker is currently describing."
    },
    {
        concept: "commiserating",
        fulltitle: "commiserating, over-identification",
        description: "Listener agrees with the speaker through over-identification; does not honor the uniqueness of speaker's position. 'I know exactly what you mean.' 'I've had that exact experience.'"
    },
    {
        concept: "storytelling",
        fulltitle: "personal storytelling",
        description: "Listener takes the focus away from speaker and tells stories relating back to themself."
    },
    ]


let intentionalResponses =
[
    {
        concept: "empathy",
        fulltitle: "empathetic listening",
        description: "Listener connects with the speaker's underlying feelings and needs."
    }, 
    {
        concept: "quiet listening",
        fulltitle: "quiet listening",
        description: "Listener holds space for the speaker to express themself fully."
    },
    {
        concept: "reflecting feelings",
        fulltitle: "reflecting feelings",
        description: "Listener reflects back to the speaker the feelings they are hearing expressed."
        },
     {          
        concept: "curiosity",
        fulltitle: "curiosity",
        description: "Listener responds to reflexive reaction by instead choosing curiosity over being right."
    },
     {
        concept: "being present",       
        fulltitle: "being present",
        description: "Listener makes an effort to just be present with the speaker."
    },
    {
        concept: "speaking up",
        fulltitle: "speaking up",
        description: "Instead of shutting down, or closing off, the speaker chooses to engage and speak up."
    },
    {
        concept: "taking responsibility",
        fulltitle: "taking responsibility",
        description: "Accepting accountability, being proactive. Suggesting a plan of action to move forward or accepting resposibility for your part in the situation."
        },
    {
        concept: "assume positive intent",
        fulltitle: "assume positive intent",
        description: "Listener self-regulates defensiveness or other reaction and instead assumes positive intent from the speaker."
    }, 
    
    ]