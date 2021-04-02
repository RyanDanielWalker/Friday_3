function mrRobogersSays(userInput) {
  const newNumbers = userInput.trim()
  const numberArray = newNumbers.split(" ")
  numberArray.forEach(function(element){
  if (element.includes("3")){
    return "Won't you be my neighbor?"
  }else if (element.includes("2")){
    return "Boop!"
  }else if (element.includes("1")){
    return "Beep!"
  }else {
    return false
  }
  })
return numberArray  
}




  
  
  
  
  