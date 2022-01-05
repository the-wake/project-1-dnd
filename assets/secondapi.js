
function randomFood(foodSearch) {
    fetch("https://api.spoonacular.com/food/menuItems/search?query=" + foodSearch + "&number=1&apiKey=4205dfaac5c8485eb2c6e53fe9758c5c")
        .then(function (response) {
            if (response.ok) {
                fetchStatus = "good";

                return response.json();
            } else {
                fetchStatus = "bad";
                // console.log(foodSearch);

            }
        })
        .then(function (data) {
           
            if(data.expires){
                console.log(data.menuItems[0].title)
                console.log(data)
                $("#img1").attr("src", data.menuItems[0].img+ ".png")
                $("#snack").text(data.menuItems[0].title);
            }
            // picNiss = data.menuItems[1].title;
            // console.log(picNiss)
           
        })

        
        
}
randomFood()
function getInputValue(e) {
    e.preventDefault()
    // Selecting the input element and get its value 
    var inputVal = document.getElementById("citySearch").value;

    randomFood(inputVal);
    console.log(inputVal)
}
document.querySelector(".subBtn").addEventListener("click", getInputValue)