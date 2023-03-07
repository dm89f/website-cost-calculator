
export const calculateCost = (pages)=>{

  let pageDesignCost = pages.reduce( (sum, page)=>{

    let temp = 0;
    if( page.Design === 1 ){
      temp = 100;
    }else if(page.Design === 2){
      temp = 150;
    }else if(page.Design === 3){
      temp = 200;
    }

    return sum + temp;
  
  }, 0 ) ;

  let interactionAnimCost = pages.reduce( (sum, page)=>{

    let temp = 0;
    if( page.interactAnim === 1 ){
      temp = 100;
    }else if(page.interactAnim === 2){
      temp = 150;
    }else if(page.interactAnim === 3){
      temp = 200;
    }

    return sum + temp;
  
  }, 0 ) ;

  let othersCost =pages.reduce( (sum, page)=>{

    let temp = 0;
    if( page.integration === 1 ){
      temp = 100;
    }else if(page.integration === 2){
      temp = 150;
    }else if(page.integration === 3){
      temp = 200;
    }

    return sum + temp;
  
  }, 0 ) ;
  let  totalCost = pageDesignCost + interactionAnimCost + othersCost ;

  return { pageDesignCost, interactionAnimCost, othersCost, totalCost };
  
}
