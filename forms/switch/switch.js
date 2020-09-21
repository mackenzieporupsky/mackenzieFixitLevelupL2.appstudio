/*Declaring the variables and adding statements that capitalize the first letter of user's name and 2 letter state code*/
let userFirst = prompt("Please enter your first name")
const nameCapitalized = userFirst.charAt(0) .toUpperCase() + userFirst.slice(1)
let userState = prompt("Please enter the two letter code for the state that you live in")
const stateCapitalized = userState.toUpperCase()
let temp = prompt("What is the current temperature outside in Fahrenheit?")

/*Added output statements to array*/
const suggestions = ['wear a warm coat, hat, scarf and gloves.', 'wear a warm coat but you won\'t need a hat, scarf, or gloves.', 'wear your warmestt coat, a warm hat, a scarf, and warm gloves.', 'wear a warm coat, hat and gloves. Maybe a scarf too']

/*Created a switch to output a certain statement from the array based on what the user inputs*/
switch (true) {
  case (userState = "NE" && temp < 32):
    NSB.MsgBox(suggestions[0])
    break
  case (userState = "NE" && temp <=50 && temp >=32): 
    NSB.MsgBox(suggestions[1])
    break
  case (userState = "FL" && temp <=50 && temp >=32): 
    NSB.MsgBox(suggestions[2])
    break
  case (userState = "FL" && temp > 50 && temp <= 70): 
    NSB.MsgBox(suggestions[3])
    break 
  default:
    NSB.MsgBox("I don't know what you should wear!")
}