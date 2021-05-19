console.log('%c HI', 'color: firebrick')


document.addEventListener("DOMContentLoaded", function() {
    loadImages();
    loadBreeds();
})

// fetching the images using the imgUrl
// parse the response as JSON
function loadImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
    return fetch(imgUrl)
    .then(resp => resp.json())
    .then(results => {
        results.message.forEach(image => addImage(image))
    });
}

//adding image elements to the DOM for each image in the array
function addImage(picUrl) {
    const container = document.getElementById("dog-image-container");
    const newImage = document.createElement('img');
    newImage.src = picUrl;
    container.appendChild(newImage);
}

//challenge #2

// fetching all dog breeds using the below url
// added results to page
function loadBreeds() {
    return fetch('https://dog.ceo/api/breeds/list/all' )
    .then(resp => resp.json())
    .then(results => {
        const breeds = Object.keys(results.message);
        addBreeds(breeds);
    });
}

//challenge #3 and #4
// breeds filtered by first letter in dropdown 
// text color changes when user clicks a dog breed

function addBreeds(breeds) {
    const ul = document.getElementById("dog-breeds");
    breeds.forEach(breed => {
        const li = document.createElement("li");
        li.innerText = breed;
        ul.appendChild(li);
        li.addEventListener("click", function(event) {
            event.target.style.color = "blue";
        });
    });
}