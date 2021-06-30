import React, { useState } from 'react'
import "./RecordTable/style.scss"
const Modal = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    console.log(isOpen)
    return (
        <div className = "Modal-container" style= {props.customStyle && props.customStyle.classes && props.customStyle.inlineStyle } >
            <input type="button"
             value="Click"
             onClick = {()=>setIsOpen(true)}
             className = "modal-btn"
             />

            {
                isOpen ? 
                <div className = "modal-box" >
                    <div className = "Modal-content" >Modal text here
                    
                    <button className = "close-modal-btn" onClick = { ()=> setIsOpen(false)} > Close </button>
                    </div>
                </div>
            : ""
            }
        </div>
    )
}

export default Modal
