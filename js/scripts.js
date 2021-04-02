function mrRobogersSays(userInput) {
  const numberArray = []
  let resultArray = []
  for(let i=0; i<=userInput; i++){
    numberArray.push(i.toString()) 
  }
  numberArray.forEach(function(element){
    if (element.includes("3")) {
      resultArray.push(" Won't you be my neighbor?")}
      else if (element.includes("2")) {
        resultArray.push(" Boop!")
      }else if (element.includes("1")) {
        resultArray.push(" Beep!")
      }
      else {resultArray.push(" " + element)
      }
    })
    return resultArray
  }
  $(document).ready(function(){
    $("form#userForm").submit(function(event){
    event.preventDefault()
    const inputFromUser = parseInt($("#numberInput").val())
    if (inputFromUser >= 0){
      if (inputFromUser > 1000) {
        alert ("I celebrate your ambition! Don't worry, we'll cover direction reading next week. For now, please enter a number between 1 & 1000")
      }else{
        let printedResult = mrRobogersSays(inputFromUser)
        $("#answerField").text("Mr. Robogers counts to that number like this: " + printedResult)}
        $("#answerField").slideDown(750)}
        else alert("You are special just the way you are, but you'd be even more special if you entered a number.")
      })
  })

  









  