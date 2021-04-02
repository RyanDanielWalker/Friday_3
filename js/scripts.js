function mrRobogersSays(userInput) {
  const numberArray = []
  for(let i=0; i<=userInput; i++){
    numberArray.push(i.toString()) 
  }
  let resultArray = []
  numberArray.forEach(function(element){
    if (element.includes("3")) {
      resultArray.push("Won't you be my neighbor?")}
      else if (element.includes("2")) {
        resultArray.push("Boop!")
      }else if (element.includes("1")) {
        resultArray.push("Beep!")
      }
      else {resultArray.push(element)
      }
    })
    return resultArray
  }

  // function omit(text) {
  //   let inputToSend = text.split(" ")
  //   const notAllowed = ("^[A-Za-z]+$")
    
  //   inputToSend.forEach(function(element) {
  //     if (element.includes(notAllowed)) {
  //       inputToSend = ""
  //     } 
  //     return inputToSend;
  //   })
  // }






  $(document).ready(function(){
    ("form#input").submit(event)
    event.preventDefault()
    const inputFromUser = parseInt($("form#userForm").val())



  })

  