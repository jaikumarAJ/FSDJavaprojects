// Restart Button
var r = document.querySelector('#b');

// Grab all the squares
var sqs = document.querySelectorAll("td");


// Clear board function
function clearBoard() {
  for (var i = 0; i < sqs.length; i++) {
      sqs[i].textContent = '';
  }

}
r.addEventListener('click',clearBoard)




// Create a function that will check the square marker
function marker(){
    if(this.textContent === ''){
      this.textContent = 'X';
      // console.log(marker)
    }else if (this.textContent === 'X') {
      this.textContent = 'O';
    }else {
      this.textContent = '';
    }
};

// Use a for loop to add Event listeners to all the squares
for (var i = 0; i < sqs.length; i++) {
    sqs[i].addEventListener('click', marker);
}
