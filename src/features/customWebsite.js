import { createSlice } from "@reduxjs/toolkit"


const initialState={
  pageDesignCost:0,
  interactionAnimCost:0,
  others:0,
  pages:[ 
    { name:'Home', Design:'advanced', interactAnim:'complex', integration:'basic' },
    { name:'Service', Design:'Complex', interactAnim:'basic', integration:'none' },    
  ]
}

// Example structure of customizeWebsiteSlice state
/*  
  state={
    pageDesignCost:0,
    interactionAnimCost:0,
    others:0,
    totalCost:0,
    pages:[ 
      { name:'Home', Design:'advanced', interactAnim:'complex', integration:'basic' }
      { name:'Service', Design:'Complex', interactAnim:'basic', integration:'none' },    
    ]
  }

  options for Design, interactAnim, integration are : 
    none
    basic
    advanced
    complex
*/


export const customizeWebsiteSlice = createSlice({
  name:'customWebsite',
  initialState,
  reducers:{
    
  }
})


export const getPages = (state)=>(state.customWebsite.pages)


export const {  } = customizeWebsiteSlice.actions;
export default customizeWebsiteSlice.reducer