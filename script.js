function toggleDiv(divNum) {
    // Hide all divs
    for (var i = 1; i <= 3; i++) {
      document.getElementById("div" + i).style.display = "none";
    }
    // Show the selected div
    document.getElementById("div" + divNum).style.display = "block";
  }
/*var value = 0;

var addFive = document.getElementById("addFive");
var subFive = document.getElementById("subFive");

var addThree = document.getElementById("addThree");
var subThree = document.getElementById("subThree");

var addOne = document.getElementById("addOne");
var subOne = document.getElementById("subOne");

console.log(value)

addFive.onclick = function() {
    value +=5;
    console.log(value);
};

subFive.onclick = function() {
    value -=5;
    console.log(value);
};

addThree.onclick = function() {
    value +=3;
    console.log(value);
};

subThree.onclick = function() {
    value -=3;
    console.log(value);
};

addOne.onclick = function() {
    value +=1;
    console.log(value);
};

subOne.onclick = function() {
    value -=1;
    console.log(value);
};
*/