import React, { useState } from 'react';

const DisplayForm = (props) => {

    return (
        <div>
            <header>Form Input</header>
            <p>First Name : {props.firstName}</p>
            <p>Last Name : {props.lastName}</p>
            <p>Email : {props.email}</p>
            <p>Password : {props.pw}</p>
            <p>Confirm Password : {props.conPw}</p>
        </div>

    )

}


export default DisplayForm