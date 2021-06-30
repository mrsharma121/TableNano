import React, { useState, useEffect } from 'react'
import "./RecordTable/style.scss"
import "./RecordTable/master.scss"
import PriorityHighRoundedIcon from '@material-ui/icons/PriorityHighRounded';
const Input = (props) => {
    const [inputValueText, setInputValueText] = useState(props.value)
    // useEffect(()=>{
    //     let id = props.identity
    //     setTimeout(()=>{
    //         props.getBackValue({
    //             id : inputValueText,
    //         })
    //     }, 0)
    // },[inputValueText])
    // style =  {props.customStyle.inputStyle}
    return (
        <div className ={`flex ${props.label && props.label.position==="top" ? "flex-center-center":'flex-start'} input-container bdr ph`}>
            {props.label && <label  htmlFor={`${props.label.name}`} className={`flex  ${props.label && props.label.position==="top" ? "flex-start w100":'flex-center-center'} font-normal font-weight-medium color-black`} style = {{ height:"fit-content", marginRight:`${props.label.position ==="left"?"0.5vw":"0vw"}`}} >  {props.label.name}</label>}
            
            <div className="flex flex-center-center w100">
                <div className="flex flex-start w100">
                    <div className={`flex flex-start`}>
                        <input type="text" />
                    </div>
                    <div className="flex flex-center-center">
                    <div className="flex flex-center-center error-icon">
                        <PriorityHighRoundedIcon />
                    </div>
                    </div>
                </div>

                <div className="flex flex-start w100">plese select box</div>
            </div>
            {/* <div className="input-background" style = { props.valid ? props.customStyle.defaultInputStyle : props.customStyle.inputStyle} >
        <div className = "input-field" >
           <input type="text"
           style = {props.customStyle && props.customStyle.classes && props.customStyle.inlineStyle }
           value = {inputValueText}
           className = "input-box"
           onChange = {((e)=>setInputValueText(e.target.value))}
           /> 
            </div>
            </div> */}
           {
               props.valid ? "" :
           <div  className= "exclamation">!</div>
           }
        {
            inputValueText? ""
            :
            <div className="error-msg" style= {props.customStyle && props.customStyle.classes && props.customStyle.inlineStyle } >
            <p>Please Write something</p>
           </div> 
        }
           
        </div> 
    )
}

export default Input
