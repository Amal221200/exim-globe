"use client"
import { Play } from "lucide-react";
import "./styles.scss";
import { useState } from "react";


const Accordion = ({ text, label }: { text: string, label: string }) => {
    const [open, setOpen] = useState(false)
    
    return (
        <div className="accordion">
            <button className={`accordion-trigger  ${open ? 'opened' : 'closed'}`} onClick={() => setOpen(current => !current)}>
                <Play size={13} fill={open ? "#ffb100" : "#333"} color={open ? "#ffb100" : "#333"} className={`transition icon`} />
                <strong className="transition">{label}</strong>
            </button>
            <p className={`accordion-content ${open ? 'show' : 'hide'}`}>
                {text}
            </p>
        </div>
    )
}

export default Accordion