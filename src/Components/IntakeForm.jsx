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

    const newUser = { firstName,  lastName,  email}
    console.log(newUser)

}
    return (
        <div className=''>
            <div>
                <form action="">
                    <label htmlFor="">First Name</label>
                    <input type="text" name="firstName" onChange={(e)=>{setFirstName(e.target.value)}} value={firstName} />
                    <label htmlFor="">Last Name</label>
                    <input type="text" name="lastName" onChange={(e)=>{setLastName(e.target.value)}} value={lastName} />
                    <label htmlFor="">Email</label>
                    <input type="text" name="email"onChange={(e)=>{setEmail(e.target.value)}} value={email} />
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" onChange={(e)=>{setPw(e.target.value)}} value={pw} />
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" name="conpass" onChange={(e)=>{setConPw(e.target.value)}} value={conPw} />
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