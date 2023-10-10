import './Bmi.css'
import { useState } from "react";

export const BmiText = () => {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [Bmi, setBmi] = useState(0)
    function onWeightChange(event){
        setWeight(event.target.value)
    }
    function onHeightChange(event){
        setHeight(event.target.value)
    }
    const calBmi = () => {
        setBmi(weight / Math.pow(height/100, 2))
    }

    return(
        <>  <body>
            <center>
            <br/>
            <div class="backdrop">
            <br/>
            <h1>แอพคำนวน BMI</h1>
            <br/><br/>
            
            
            <div>You Input Height
            <input type="text" value={height}
                onChange={event=>onHeightChange(event)}
            >
            </input>
            <br/><br/>
            
            You Input Weight
            <input type="text" value={weight}
                onChange={event=>onWeightChange(event)}
            >
            </input></div>

            <br/>
            <button onClick={()=>calBmi()}>คำนวณ</button>

            <br/><br/> 
            Your BMI : { Bmi.toFixed(2) } 
            <h2>{Bmi < 18.5 ? 'ต่ำกว่าเกณฑ์' : Bmi > 30 ? 'เกินเกณฑ์' : 'ปกติ'}</h2>
            <br/><br/>
                
            </div>
            </center>
            </body>
        </>    
    )
}
