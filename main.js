// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

//grab all heart elements from HTML
const hearts = document.querySelectorAll(".like")

//iterate through each heart and add a click event listener to each
hearts.forEach(heart => {
  heart.addEventListener('click', (e) => {
    //for each heart, mimic a server request that returns either a success or failure status
    mimicServerCall()
    //if server returns a success status, use if statement to change like heart
    //from empty to full/red and vis versa
    .then(sucess => {
      if (e.target.textContent === EMPTY_HEART) {
        e.target.textContent = FULL_HEART
        e.target.className = 'activated-heart'
      } else if (e.target.textContent === FULL_HEART) {
        e.target.textContent = EMPTY_HEART
        e.target.className = ''
      }
    })
    //if server returns a failure status, display error model by changing class name to an empty string
    //display error in error modal
    .catch(error => {
      document.querySelector('#modal').className = ''
      document.querySelector('#modal-message').textContent = error
      //error displays for 3 seconds then disappears
      setTimeout(() => {document.querySelector('#modal').className = 'hidden'}, 3000)
    })
  })
})






//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
