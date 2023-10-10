import './Bmi.css'
import { useRef, useState } from "react";

const Input = ({Referent,  inputLabel}) => {
    return(
        <div>
            <label>{inputLabel}</label>
            <input ref={Referent}  type='text'/>
        </div>
    )
}

export const BmiText = () => {
    const weight = useRef(null);
    const height = useRef(null);
    const [Bmi, setBmi] = useState(0)

    const calBmi = () => {
        setBmi(weight.current.value / Math.pow(height.current.value/100, 2))
    }

    return(
         
        <body>
            <center><br/>

            <div class="backdrop">
                <br/>
                <h1>แอพคำนวน BMI</h1>
                <br/>
            
                <div>
                    You Input Height (cm.)
                    <Input type="text" Referent={height}/>
                    <br/>
                    You Input Weight (kg.)
                    <Input type="text" Referent={weight} />
                </div>

                <br/>

                <button onClick={()=>calBmi()}>
                    คำนวณ
                </button>

                <br/><br/> 

                <div>
                    Your BMI : { Bmi.toFixed(2) } 
                    <h2>
                        {Bmi < 18.5 ? 'ต่ำกว่าเกณฑ์' : Bmi > 30 ? 'เกินเกณฑ์ (โรคอ้วนระดับที่ 2 )' : Bmi > 25.0 ? 'เกินเกณฑ์ (โรคอ้วนระดับที่ 1)':  Bmi > 23.0 ? 'เกินเกณฑ์ (น้ำหนักเกิน)'  : 'เกณฑ์ปกติ (สมส่วน)'}
                    </h2>
                </div>

                <br/><br/>
            </div>
            
            </center>
        </body>
    )
}
