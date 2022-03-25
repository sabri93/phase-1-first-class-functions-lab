// Code your solution in this file!
const returnFirstTwoDrivers = function(){
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
        let newArray = drivers.slice(0,2);
        return newArray

}

const returnLastTwoDrivers = function(){
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
        let newArray = drivers.slice(2);
        return newArray
}

let selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers]


function createFareMultiplier(x){
   
   return function fare(x){
       return x*x
   }
}


 function fareDoubler(x){
    const fare = function fare(){
    }
     return x*2

    }
  
     
    function fareTripler(x){
        const fare = function fare(){
        }
     return x*3
  }    
  
  const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
  
  function selectDifferentDrivers(arrayOfDrivers, fun){

    
    if (fun === returnLastTwoDrivers){
        return returnLastTwoDrivers()
    
    } else if (fun === returnFirstTwoDrivers){
        return returnFirstTwoDrivers()
    }
    
      
      
       
    
  }
     
     
     
  




  


