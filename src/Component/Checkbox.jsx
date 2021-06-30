import React, {useState} from 'react';
import "./RecordTable/style.scss";

const Checkbox = (props) => {
    const [checkboxValue, setCheckBoxValue] = useState("")
    console.log(checkboxValue)
    return (
<>
        {
            props.identity.map((data)=>{
                return(
                    <label
                    htmlFor={data}
                    className="flex w100 ph font-normal font-weight-medium "
                  >
                    <span className="flex flex-center-center custom-check">
                    <input type="checkbox" name="" id="" />    
                    </span>
                    <span className="flex flex-center-center mlr-large">
                      {data}
                    </span>
                  </label>
                // <div className = "checkbox-container" style= {props.customStyle && props.customStyle.classes && props.customStyle.inlineStyle } >
                //     <input type="checkbox"
                //     name=""
                //      className="input-checkbox"
                //      defaultChecked = {props.checked}
                //      onChange = {((e)=>setCheckBoxValue(e.target.checked))}
                //   />
                //     <div  className="checkbox-label">{data}</div>
                //     </div>
                )
            
            })
            }
            </>
    )
}

export default Checkbox



