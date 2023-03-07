import { createSlice } from "@reduxjs/toolkit"
import {calculateCost} from './utils/utils'

const initialState={
  pageDesignCost:0,
  interactionAnimCost:0,
  othersCost:0,
  totalCost:0,
  pages:[ 
    { name:'Home', Design:0, interactAnim:0, integration:0 },
    { name:'Service', Design:0, interactAnim:0, integration:0 },
    { name:'About Us', Design:0, interactAnim:0, integration:0 },
    { name:'Partners', Design:0, interactAnim:0, integration:0 },
    { name:'Contact Us', Design:0, interactAnim:0, integration:0 },

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
      const { pageName, feature } = action.payload;
      let updPage = state.pages.find( (page)=>(page.name === pageName) )
      
      if( updPage[feature] == 0 ) return;
      updPage[feature] -= 1;
      
      state.pages = state.pages.map( (page)=>{ 
        if(page.name === pageName) return updPage;
        else return page;
      } );

      console.log(calculateCost(state.pages))
      

    },
    incrementPageFunc(state, action){
      // console.log(action.payload)

      const { pageName, feature } = action.payload;
      let updPage = state.pages.find( (page)=>(page.name === pageName) )
      
      if( updPage[feature] == 3 ) return;
      updPage[feature] += 1;
      
      state.pages = state.pages.map( (page)=>{ 
        if(page.name === pageName) return updPage;
        else return page;
      } );

      // console.log(calculateCost(state.pages))
      const res = calculateCost(state.pages);

      state.interactionAnimCost = res.interactionAnimCost;
      state.othersCost = res.othersCost;
      state.pageDesignCost = res.pageDesignCost;
      state.totalCost = res.totalCost;

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