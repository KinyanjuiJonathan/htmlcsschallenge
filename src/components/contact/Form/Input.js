import { useState } from "react";
;


export default function Input(props){
    const[name, setName]=useState("");
    const[email, setEmail]= useState("");
    
    function handleName(event){
        setName(event.target.value);
    }
    function handleEmail(event){
        setEmail(event.target.value);
    }
    function submit(event){
        event.preventDefault();
        props.addUSer({
            name: name,
            email: email
        });
        setName("");
        setEmail("");
    }

    return(
        <div>
            <h2>Form</h2>
            <form onSubmit={submit} className='form'>
                <div>
                <p>Name*</p>
                <input className="input" onChange={handleName} value={name} placeholder="Name" type="name" required/>
                </div>
                <div>
                <p>Email*</p>
                <input className="input" onChange={handleEmail} value={email} placeholder="Email" type="email"/>
                </div>
                <div>
                    <p>Departments*</p>
                < select name="Departments" id="Departments" >
                    <option value="Men">Departments</option>
                    <option value="women">Women</option>
                    <option value="children">Children</option>
                    </select> 
                    </div>
                    <div> 
                    {/* <DigitalTime>
                            type={"picker"}
                            value={new Date()}
                     </DigitalTime> */}
                     </div>
                <div>
                    <p>Time</p>
                <select name="Time" type="Time" placeholder="4:00 Available"> Time
                    </select>  
                    </div>  <br></br>
                
                <button className="submit">Book Appointment</button>
            </form>
            
        </div>
    );
}

