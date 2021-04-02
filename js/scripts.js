function mrRobogersSays(userInput) {
  const numberArray = []
  for(let i=0; i<=userInput; i++){
    numberArray.push(i.toString()) 
  }
  let resultArray = []
  numberArray.forEach(function(element){
    if (element.includes("3")) {
      resultArray.push(" Won't you be my neighbor?")}
      else if (element.includes("2")) {
        resultArray.push(" Boop!")
      }else if (element.includes("1")) {
        resultArray.push(" Beep!")
      }
      else {resultArray.push(element)
      }
    })
    return resultArray
  }

  

  $(document).ready(function(){
    $("form#userForm").submit(function(event){
    event.preventDefault()
    const inputFromUser = parseInt($("#numberInput").val())
    if (inputFromUser > 100) {
      alert ("Wow! You sure are ambitious. Unfortunately, we can't count that high in this neighborhood. Please choose a number below 100")
    }else{
      let printedResult = mrRobogersSays(inputFromUser)
      $("#answerField").text(printedResult)}
    })
  })








  