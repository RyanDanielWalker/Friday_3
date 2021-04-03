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
      if (inputFromUser <= 1000) {
        let printedResult = mrRobogersSays(inputFromUser)
        $("#answerField").text("Mr. Robogers counts to that number like this: " + printedResult)
        $("#answerField").slideDown(750)
      } else {
        alert ("There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to follow the directions.")
      }
    } else {
      alert("Let's try entering a number that is equally as worthwhile as you are.")
    }
  })
})










  