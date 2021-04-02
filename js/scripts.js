function mrRobogersSays(userInput) {
  const numberArray = []
  for(let i=0; i<=userInput; i++){
    numberArray.push(i.toString()) 
  }
  numberArray.forEach(function(element){
    let newArray = []
    if (element.includes("3")) {
      newArray.push("Won't you be my neighbor?")}
      else if (element.includes("2")) {
        newArray.push("Boop!")
      }else if (element.includes("1")) {
        newArray.push("Beep!")
      }
      else {newArray.push(element)
      }
        console.log(newArray)
  })
  
  }




  
  
  
  
  
  
  
  
  