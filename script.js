function toggleDiv(divNum) {
    // Hide all divs
    for (var i = 1; i <= 11; i++) {
      document.getElementById("question" + i).style.display = "none";
    }
    // Show the selected div
    document.getElementById("question" + divNum).style.display = "block";
};

//
let poeng = 0;

function addPoints(points) {
    poeng += points;
    document.getElementById("poeng").innerHTML = poeng;
}