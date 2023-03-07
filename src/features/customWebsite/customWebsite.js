import { createSlice } from "@reduxjs/toolkit"
import {featuresCost} from '../../constants/websiteFeaturesCost'

const initialState={
  pageDesignCost:0,
  interactionAnimCost:0,
  othersCost:0,
  totalCost:0,
  pages:[ 
    { name:'Home', Design:'none', interactAnim:'none', integration:'none' },
    { name:'Service', Design:'none', interactAnim:'none', integration:'none' },
    { name:'About Us', Design:'none', interactAnim:'none', integration:'none' },
    { name:'Partners', Design:'none', interactAnim:'none', integration:'none' },
    { name:'Contact Us', Design:'none', interactAnim:'none', integration:'none' },

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
    decrementPageFunc(state, action){
      console.log(action.payload)
      // const { pageName, feature } = action.payload;

    },
    incrementPageFunc(state, action){
      console.log(action.payload)

    }
  }
})


export const getPages = (state)=>(state.customWebsite.pages);
export const getPageDesignCost = (state)=>(state.customWebsite.pageDesignCost);
export const getInteractionAnimCost = (state)=>(state.customWebsite.interactionAnimCost);
export const getOthersCost = (state)=>(state.customWebsite.othersCost)
export const getTotalCost = (state) =>(state.customWebsite.totalCost)

export const { decrementPageFunc, incrementPageFunc } = customizeWebsiteSlice.actions;
export default customizeWebsiteSlice.reducer