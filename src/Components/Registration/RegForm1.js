import React,{useState,useEffect} from 'react'
import { Col,Row,Button,Container , Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import {Link} from 'react-router-dom'
import {useFormik} from 'formik'
import './Registration.css'
import RegForm2 from './RegForm2'

import { setUserData } from '../Slices/RegSlice'
import{ setTestSliceData} from '../Slices/TestSlice'
import { useDispatch ,useSelector} from 'react-redux'


export default function RegForm1( ) {

    let history=useHistory()
 
    let Goto=()=>{
            history.push('/RegForm2')

    }
     //state=>userdata comes from Store
let ReduxData1=useSelector(state=>state.userdata)
//  console.log(ReduxData1);
 
 
 

const dispatch=useDispatch()


 const formik=useFormik({
  initialValues:{
    // fname:"",
    // lname:"",
    // email:"",
    // phone:"",
    // pass:"",
    state:"",
    city:"",
    zip:"",
    formCounter:"2"
         
  },
  validate:"",
  onSubmit:(values)=>{
  console.log(values);
  
  // dispatch(setUserData(values))
 dispatch(setTestSliceData(values))
  
  }
});








    return (
         <div > 
 
             
                  {/* {propData1==1 ?   */}
                  <div >

                
                    <Container className="Registration_Container"> 
            <Row className="Registration_Container_Row">
            <h1>Step 2</h1>
                 <Form onSubmit={formik.handleSubmit}>  


  <Form.Group className="mb-3" controlId="state">
    <Form.Label>State</Form.Label>
    <Form.Control type="text" placeholder="Enter State" onChange={formik.handleChange}/>
 
  </Form.Group>

  <Form.Group className="mb-3" controlId="city">
    <Form.Label>City</Form.Label>
    <Form.Control type="text" placeholder="Enter City" onChange={formik.handleChange}/>
 
  </Form.Group>


  <Form.Group className="mb-3" controlId="zip">
    <Form.Label>Zipcode</Form.Label>
    <Form.Control type="text" placeholder="Enter Zipcode"onChange={formik.handleChange} />
    
  </Form.Group>
  
  <Button className="BtnSubmit" variant="outline-success" type="submit">
    Submit
  </Button>
  
  
</Form> 
<Button className="BtnNext" variant="outline-primary" type="click "onClick={Goto} >
    {/*onClick={()=>{setPropData(propData+1)}}  */}
    Next 
  </Button> 
            </Row>
            </Container>
            <Button className="BtnNext" variant="outline-warning" type="click" onClick={Goto}>
    Go Back To Home
  </Button>  
           </div>
                    {/* : ""} */}
                  
             
                   
        </div>
    )
}
