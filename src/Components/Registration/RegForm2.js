import React from 'react'
import {setTestSliceData} from '../Slices/TestSlice'
import { useDispatch ,useSelector} from 'react-redux'
import {Button} from 'react-bootstrap'

export default function RegForm2(props) {
    let propData=props.data
    const selector=useSelector(state=>state.TestReducer)
    
    console.log(selector);
    return (
        <div>
 
        
        <span>Details Taken</span>
      
    <p/>   <Button variant="outline-primary" > CLICK</Button>

<div style={{marginTop:"40px" }}>
    <p> FirstName: {selector.fname}</p>
    <p> LastName: {selector.lname}</p>
    <p> Email: {selector.email}</p>
    <p> Phone: {selector.phone}</p>
    <p> City: {selector.city}</p>
    <p> State: {selector.state}</p>
    <p> Zipcode: {selector.zip}</p>
</div>

        </div>
    )
}
