import React, {useState} from 'react';
import DisplayForm from './DisplayForm';

const IntakeForm = (props) => {
const [firstName, setFirstName] = useState("")
const [lastName, setLastName] = useState("")
const [email, setEmail] = useState("")
const [pw, setPw] = useState("")
const [conPw, setConPw] = useState("")

const handleSubmit = (e) => {
    e.preventDefault()
    if((firstName.length<3) ||( lastName.length<3) || ( email.length<5 ) || (pw.length<8) ||(pw !== conPw) ){
        alert("Invalid Form")
    }
    else if( (pw && conPw == 'password') || (pw && conPw == 'Password') ){
        alert("Invalid Form - Password cannot be 'password'")

    }
    else{
    const newUser = { firstName,  lastName,  email}
    console.log(newUser)
}
}
    return (
        <div className=''>
            <div>
                <form action="">
                    <label htmlFor="">First Name</label>
                    <input type="text" name="firstName" onChange={(e)=>{setFirstName(e.target.value)}} value={firstName} />
                    {
                        firstName.length > 0 && firstName.length<3? <p style={{color:"red"}}>  First Name must be 3 characters or more </p> : <p></p>

                    }
                    <label htmlFor="">Last Name</label>
                    <input type="text" name="lastName" onChange={(e)=>{setLastName(e.target.value)}} value={lastName} />
                    {
                        lastName.length > 0 && lastName.length<3? <p  style={{color:"red"}}> Last Name must be 3 characters or more </p> : <p></p>

                    }
                    <label htmlFor="">Email</label>
                    <input type="text" name="email"onChange={(e)=>{setEmail(e.target.value)}} value={email} />
                    {
                        email.length > 0 && email.length<5? <p  style={{color:"red"}}> Email must be 5 characters or more </p> : <p></p>

                    }
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" onChange={(e)=>{setPw(e.target.value)}} value={pw} />
                    {
                        pw.length > 0 && pw.length<8? <p  style={{color:"red"}}> Password must be 8 characters or more </p> : <p></p>

                    }
                    
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" name="conpass" onChange={(e)=>{setConPw(e.target.value)}} value={conPw} />
                    {
                        
                        pw !== conPw? <p  style={{color:"red"}}> Passwords must match </p> : <p></p>

                    }
                    {
                        conPw.length > 0 && conPw <8?<p  style={{color:"red"}}> Password must be 8 characters or more </p> : <p></p>
                    }
                    <button type='submit' onClick={handleSubmit} >Submit</button>
                </form>
            </div>
            <div>
                <DisplayForm firstName={firstName} lastName = {lastName} email ={email} pw = {pw} conPw={conPw}></DisplayForm>
            </div>
        </div>
    );
}

export default IntakeForm