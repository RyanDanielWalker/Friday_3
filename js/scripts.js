function mrRobogersSays(userInput) {
  let inputArray = []
  userNumber = parseInt(userInput.trim().split(" "))
  for (let i=0; i<=userNumber; i++) {
    inputArray.push(i.toString())
  }
  return inputArray
}

