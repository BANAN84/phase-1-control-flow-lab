function scuberGreetingForFeet(x){
  if (x<=400) {
    let result ="This one is on me!";
    return result ;
  }

    else if (x>400 && x<=2000) { 
      let result="That will be twenty bucks.";
      return result ;
  }
  else if (x>2000 && x<=2500){
    let result ="I will gladly take your thirty bucks.";
    return result ;}
    
  else if (x>2500) 
  {
    let result ='No can do.';
    return result ;
  }
  
  }
  
  // Write your code here!


function ternaryCheckCity(city){
  // Write your code here! 
  
  return city=== 'NYC'? 'Ok, sounds good.':'No go.'
}

function switchOnCharmFromTip(a){
  switch (a) {
    case 'generous':
       a="Thank you so much."
       break
    case 'not as generous':
       a='Thank you.'
      break
      default:
       a= "Bye."
  }
  return a
  // Write your code here!
}