let addData = document.querySelector('.signUp')
let checkSignIn = document.querySelector('.signIn')
let name1 = document.querySelector('#input-fname').value
let lName1 = document.querySelector('#input-lname').value
let pass = document.querySelector('#input-pass1').value

//document.querySelector('.textScreen').style.visibility = 'hidden'

document.querySelector('.sign-Up').addEventListener('click', function () {
  document.querySelector('.buttonsContainer').style.visibility = 'hidden'
  document.querySelector('.SignUp-container').style.visibility = 'visible'
})

document.querySelector('.sign-In').addEventListener('click', function () {
  document.querySelector('.buttonsContainer').style.visibility = 'hidden'
  document.querySelector('.SignIn-container').style.visibility = 'visible'
})
// code for Sign up
function addUser() {
  // addUsers()
  let name1 = document.querySelector('#input-fname').value
  let lName1 = document.querySelector('#input-lname').value
  let pass = document.querySelector('#input-pass1').value

  if (name1.length != 0 && lName1.length != 0 && pass.length != 0) {
    usersData.push({ Name: name1, LastName: lName1, Password: pass })
    console.log(usersData[usersData.length - 1]) //last element

    document.querySelector('.SignUp-container').style.visibility = 'hidden'
    document.querySelector(
      '.welcomeText'
    ).innerHTML = `thank you for sign up ${name1} ${lName1}`
    document.querySelector('.welcomeText').style.visibility = 'visible'

    return true
  }
  alert('Enter valid information!')
  return false
}
addData.addEventListener('click', () => {
  addUser()
})
//...........................
// code for Sign In
function checkUser() {
  // addUsers()
  let name2 = document.querySelector('#input-fnameSI').value
  let lName2 = document.querySelector('#input-lnameSI').value
  let pass2 = document.querySelector('#input-pass1SI').value

  let obj = usersData.find(function (element) {
    if (
      element.Name === name2 &&
      element.LastName === lName2 &&
      element.Password === pass2
    ) {
      document.querySelector('.SignIn-container').style.visibility = 'hidden'
      document.querySelector(
        '.welcomeText'
      ).innerHTML = `welcome back  ${element.Name} ${element.LastName}`
      document.querySelector('.welcomeText').style.visibility = 'visible'
      console.log('You signed in!')
    }
  })
}
checkSignIn.addEventListener('click', () => {
  checkUser()
})

// let fullNamesIDs = usersData.map(
//   (usersData) => `${usersData.Name} ${usersData.LastName} ${usersData.Password}`
// )
// console.log(fullNamesIDs)
