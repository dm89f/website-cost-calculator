import {featuresCost} from '../../../constants/websiteFeaturesCost'

export const calculateCost = (pages)=>{

  let pageDesignCost = pages.reduce( (sum, curr)=>{

    let option = featuresCost.find( (item)=>(item.name === curr.Design ))
    return sum + option.cost
  
  }, 0 ) ;

  let interactionAnimCost = pages.reduce( (sum, curr)=>{

    let option = featuresCost.find( (item)=>(item.name === curr.interactAnim ))
    return sum + option.cost
  
  }, 0 ) ;

  let othersCost =pages.reduce( (sum, curr)=>{

    let option = featuresCost.find( (item)=>(item.name === curr.integration ))
    return sum + option.cost
  
  }, 0 ) ;
  let  totalCost = pageDesignCost + interactionAnimCost + othersCost ;

  return { pageDesignCost, interactionAnimCost, othersCost, totalCost };
  
}
