/*Declared the variables and added statements to make sure the first name of the user and the two letter state code are capitalized*/
let userFirst = prompt("Please enter your first name")
const nameCapitalized = userFirst.charAt(0) .toUpperCase() + userFirst.slice(1)
let userState = prompt("Please enter the two letter code for the state that you live in")
const stateCapitalized = userState.toUpperCase()
let temp = prompt("What is the current temperature outside in Fahrenheit?")

/*Created an array to hold the output values*/
const suggestions = ['wear a warm coat, hat, scarf and gloves.', 'wear a warm coat but you won\'t need a hat, scarf, or gloves.', 'wear your warmestt coat, a warm hat, a scarf, and warm gloves.', 'wear a warm coat, hat and gloves. Maybe a scarf too']

/*Created an if/else statement to check to see if the conditions are satisfied and then output a message*/
if (userState = "NE" && temp < 32) {
  NSB.MsgBox(suggestions[0])
} else if (userState = "NE" && temp <=50 && temp >=32) {
  NSB.MsgBox(suggestions[1])
} else if (userState = "FL" && temp <=50 && temp >=32) {
  NSB.MsgBox(suggestions[2])
} else if (userState = "FL" && temp > 50 && temp <= 70) {
  NSB.MsgBox(suggestions[3])
} else {
  NSB.MsgBox("I don't know what you should wear!")
}