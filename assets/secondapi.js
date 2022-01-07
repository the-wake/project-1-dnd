var imageFood = document.querySelector("#img1");
var API1 =  "bc3600e23d5e465f999caa4b7e68f31a"
var API2 = "4205dfaac5c8485eb2c6e53fe9758c5c"


function randomFood(foodSearch) {
    fetch("https://api.spoonacular.com/food/menuItems/search?query=" + foodSearch + "&number=1&apiKey=" + NOTHING)//add API KEY when needed
        .then(function (response) {
            if (response.ok) {
                fetchStatus = "goodFood";

                return response.json();
            } else {
                fetchStatus = "badFood";
            }
        })
        .then(function (data) {
           
            if(data.expires){
                
                // console.log(data)
                
                console.log(data.menuItems[0])
               
                $("#img1").attr("src",  data.menuItems[0].image);
                
            }
        })
}

function getInputValue() {
    
    // e.preventDefault()
    // Selecting the input element and get its value 
    var inputVal = document.getElementById("foodSearch").value;

    randomFood(inputVal);
    console.log(inputVal)

    console.log("hello")
}
// document.querySelector("#foodForm").addEventListener("submit", getInputValue)

$("#foodForm").on('submit', function(event) {
event.preventDefault();
getInputValue();
});


// Get the input field
// var input = document.getElementById("myInput");

// // Execute a function when the user releases a key on the keyboard
// input.addEventListener("keyup", function(event) {
//   // Number 13 is the "Enter" key on the keyboard
//   if (event.keyCode === 13) {
//     // Cancel the default action, if needed
//     event.preventDefault();
//     // Trigger the button element with a click
//     document.getElementById("myBtn").click();
//   }
// });