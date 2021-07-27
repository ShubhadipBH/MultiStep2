import { createSlice } from '@reduxjs/toolkit'
 

const initialState = {
    fname:null,
    lname:null,
     email:null,
    pass:null,
    phone:null,
    state:null,
    city:null,
    zip:null,
     message:null,
     error:null,
     formCounter:null
  
}

const TestSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        setTestSliceData : (state,action) => {
 
            //  state.register=action.payload
            //  let regData=state.register
            //  console.log(regData)
            
    //  if(action.payload.formCounter==1 ){
              state.fname=action.payload.fname
            state.lname=action.payload.lname
            state.email=action.payload.email
            state.pass=action.payload.pass
            state.phone=action.payload.phone
              
        // }
        //    else if(action.payload.formCounter==2 )
        //     {
                state.zip=action.payload.zip
                state.state=action.payload.state
                state.city=action.payload.city
                state.formCounter=action.payload.formCounter
            // }
 
        
        }
    
    
    }
});

export const {setTestSliceData} = TestSlice.actions
export default TestSlice.reducer