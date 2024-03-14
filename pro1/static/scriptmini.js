// Function to open the popup
function redirect(){
    setTimeout(function() {
        window.location.href = "{% url 'minidjango:c2' %}";
    }, 5000); // 5 seconds (5000 milliseconds)
}

let isPaused = false; // Flag to track whether the game is paused

function togglePause() {
    const pauseButton = document.getElementById('pause');
    const randomNumberButton = document.getElementById('Button');

    // Toggle the state of the pause flag
    isPaused = !isPaused;

    if (isPaused) {
        // If paused, clear the interval to stop generating random numbers
        clearInterval(intervalId);
        // Disable the "Generate Numbers" button
        randomNumberButton.disabled = true;
        // Disable striking of cells
        document.querySelectorAll('.cell').forEach(cell => {
            cell.removeEventListener('click', onClick);
        });
        // Change the pause button image to indicate resume
        pauseButton.src ="/static/play.png"; // Change the image to play icon
    } else {
        // If not paused, resume generating random numbers
        intervalId = setInterval(generateRandomNumber, 3000);
        // Enable the "Generate Numbers" button
        randomNumberButton.disabled = false;
        // Enable striking of cells
        document.querySelectorAll('.cell').forEach(cell => {
            cell.addEventListener('click', onClick);
        });
        // Change the pause button image to indicate pause
        pauseButton.src = "/static/pause.png"; // Change the image to pause icon
    }
}

// Function to open the popup
function openPopup2() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
    // Add blur effect to background elements
    var elementsToBlur = document.querySelectorAll("body > *:not(#popup)");
    elementsToBlur.forEach(function(element) {
        element.classList.add("blur-background");
    });
}

// Function to close the popup
function closePopup2() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
    // Remove blur effect from background elements
    var elementsToBlur = document.querySelectorAll("body > *:not(#popup)");
    elementsToBlur.forEach(function(element) {
        element.classList.remove("blur-background");
    });
}

// Function to open the quit popup
// Function to open the quit popup
function quitopenPopup() {
    var quitpopup = document.getElementById("quitpopup");
    quitpopup.style.display = "block";
    // Add blur effect to background elements except quitpopup
    var elementsToBlur = document.querySelectorAll("body > *:not(#quitpopup)");
    elementsToBlur.forEach(function(element) {
        element.classList.add("blur-background");
    });
}

// Function to close the quit popup
function quitclosePopup() {
    var quitpopup = document.getElementById("quitpopup");
    quitpopup.style.display = "none";
    // Remove blur effect from background elements
    var elementsToBlur = document.querySelectorAll("body > *:not(#quitpopup)");
    elementsToBlur.forEach(function(element) {
        element.classList.remove("blur-background");
    });
}


// Function to open the settings popup
function setopenPopup() {
    var setpopup = document.getElementById("setpopup");
    setpopup.style.display = "block";
    // Add blur effect to background elements
    var elementsToBlur = document.querySelectorAll("body > *:not(#setpopup)");
    elementsToBlur.forEach(function(element) {
        element.classList.add("blur-background");
    });
}

// Function to close the settings popup
function setclosePopup() {
    var setpopup = document.getElementById("setpopup");
    setpopup.style.display = "none";
    // Remove blur effect from background elements
    var elementsToBlur = document.querySelectorAll("body > *:not(#setpopup)");
    elementsToBlur.forEach(function(element) {
        element.classList.remove("blur-background");
    });
}

// Function to toggle password visibility
function togglePasswordVisibility(passwordId) {
    const passwordInput = document.getElementById(passwordId);
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
}

// Function to edit profile
function editProfile() {
    var profileName = document.getElementById("profileName");
    var newName = prompt("Enter your new name:");
    if (newName !== null && newName.trim() !== "") {
        profileName.textContent = newName;
    }
}

function togglePasswordVisibility(passwordId) {
    const passwordInput = document.getElementById(passwordId);
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
}
// Other functions remain unchanged

// Function to close the popup


let intervalId;
let generatedNumbers = []; // Array to store generated numbers
let number;
(function() {    
    // Define the function within the closure
    window.startGeneratingRandomNumbers = function() {
        // Check if tickets have already been generated
        if (document.getElementById('startButton').textContent === 'Restart') {
            // Set the text content of the button to "Restart"
            // Perform reload and continue executing the function after reloading
            window.location.reload();
            return; // Don't execute further code until after reloading
        }

        const n = prompt("Enter number of tickets:");
        if (n !== null && !isNaN(n) && parseInt(n) > 0) {
            const ticketsContainer = document.getElementById('tickets-container');
            ticketsContainer.innerHTML = ''; // Clear previous tickets
            for (let i = 0; i < parseInt(n); i++) {
                const tickets = generateTickets();
                ticketsContainer.appendChild(formatTickets(tickets)); 
            }
            
            // Update flag to indicate tickets have been generated
            hasGeneratedTickets = true;

            // Display the "Click" button after generating tickets
            document.getElementById('Button').style.display = 'block';
            // Change text content of the "Start" button to "Restart" and disable it
            document.getElementById('startButton').textContent = 'Restart';
        }
        else {
            alert("Invalid input. Please enter a valid number.");
        }
    };
})();
// Default level is set to 'medium'
// Define the Level variable with a default value
// Define the levels array
const levels = ['slow', 'medium', 'fast'];

// Initialize the currentLevel variable with the index of 'medium'
let currentLevelIndex = levels.indexOf('medium');
document.getElementById('levelDisplay').textContent = levels[1];

// Function to change the level
function changeLevel(direction) {
    // Check if direction is 'prev' or 'next'
    if (direction === 'prev') {
        // Move to the previous level, stop if index reaches 0
        currentLevelIndex = Math.max(0, currentLevelIndex - 1);
    } else if (direction === 'next') {
        // Move to the next level, stop if index reaches the end of the array
        currentLevelIndex = Math.min(levels.length - 1, currentLevelIndex + 1);
    }
    // Update the content of the levelDisplay span with the new level
    document.getElementById('levelDisplay').textContent = levels[currentLevelIndex];
}



function start() {
    // Show the randomNumber div
    document.getElementById('randomNumber').style.display = 'block';
    // Generate a random number immediately when the button is clicked
    generateRandomNumber();
    
    // Determine the interval based on the level
    let interval;
    let k=document.getElementById('levelDisplay').textContent
    switch(k) {
        case 'slow':
            interval = 4000;
            break;
        case 'fast':
            interval = 2000;
            break;
        default:
            interval = 3000; // Medium or default level
    }

    // Start generating random numbers with the determined interval
    intervalId = setInterval(generateRandomNumber, interval);
    
    // Disable the button after it's clicked to prevent multiple clicks
    document.getElementById('Button').disabled = true;
    
    // Start the transformation animation
    startTransformation();
}


function startTransformation() {
    setInterval(() => {
        const randomNumber = document.getElementById('randomNumber');
        // Check if the game is not paused before adding the transformation class
        if (!isPaused) {
            randomNumber.classList.add('transformed');
            setTimeout(() => {
                randomNumber.classList.remove('transformed');
            }, 300); // Adjust the duration of the transformation
        }
    }, 3000); // Adjust the interval for transformation
}

let mat; 
function generateTickets() {
    const rows = 3;
    const columns = 8;
     mat = Array.from({ length: rows }, () => Array(columns).fill("  "));
    const generatedNumbers = [];

    for (let i = 0; i < rows; i++) {
        let value = 0;
        while (value < 5) {
            const randCol = Math.floor(Math.random() * columns);
            if (mat[i][randCol] == "  ") {
                let randomNumber;
                do {
                    randomNumber = Math.floor(Math.random() * 99) + 1;
                } while (generatedNumbers.includes(randomNumber));
                mat[i][randCol] = randomNumber;
                generatedNumbers.push(randomNumber);
                value++;
            }
        }
    }
    return mat;
}

function formatTickets(matrix) {
    const table = document.createElement('table');
    let startWithWhite = true;

    for (let i = 0; i < matrix.length; i++) {
        const row = document.createElement('tr');
        let alternateColor = startWithWhite;

        for (let j = 0; j < matrix[i].length; j++) {
            const data = document.createElement('td');
            data.textContent = matrix[i][j];
            data.addEventListener('click', onClick);

            if (alternateColor) {
                data.style.backgroundColor = 'white';
            } else {
                data.style.backgroundColor = getRandomColor();
            }
            alternateColor = !alternateColor;
            row.appendChild(data);
        }
        startWithWhite = !startWithWhite;
        table.appendChild(row);
    }
    table.style.marginBottom = '20px';
    return table;
}

function getRandomColor() {
    const colors = ['lightpink', 'cyan', 'yellow', 'lightgreen', 'lavender'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}
let strikeCount=0;
let score=0;
// Function to handle click events on cells
function onClick(event) {
    // Check if the game is paused
    if (isPaused) {
        return;
    }

    const clickedData = event.target;
    const clickedNumber = parseInt(clickedData.textContent.trim());
    // Check if the clicked number is one of the generated numbers
    if (generatedNumbers.includes(clickedNumber)) {
        // Check if the clicked cell is already struck
        if (!clickedData.classList.contains('strikethrough')) {
            // Add strike indication to the clicked cell
            const crossElement = document.createElement('div');
            crossElement.textContent = '✗';
            crossElement.classList.add('cross');
            clickedData.appendChild(crossElement);
            // Increment the strike count
            console.log(strikeCount);
            strikeCount++;
 
            // If five strikes are achieved, display "Jaldi Five"
            if (strikeCount === 5) {
                document.getElementById('celeb').style.display = 'block';
                document.getElementById('celeb').textContent = 'jaldi five';

                score += 5; // Increase score by 5
            }
            
            // Update the score displayed on the page
           /* document.getElementById('score').textContent = score;

            // Check if the row is completed after each click
            for (let i = 0; i < mat.length; i++) {
                let rowCompleted = true; // Flag to track if all cells in the row are struck

                for (let j = 0; j < mat[i].length; j++) {
                    const cell = mat[i][j];

                    // Check if the cell is not struck
                    if (!cell.textContent.classList.contains('strikethrough')) {
                        rowCompleted = false; // Set the flag to false if any cell is not struck
                        break; // Exit the loop as soon as we find an unstruck cell
                    }
                }

                // If all cells in the row are struck, update the score
                if (rowCompleted) {
                    score += 5; // Increase score by 5
                }
            }*/

            // Update the score displayed on the page after checking all rows
            document.getElementById('score').textContent = score;
        }
    }
}


// Function to generate random numbers and update the UI


function buttons() {
    const container = document.getElementById('container');
    const randomNumberElement = document.getElementById('randomNumber');
    const randomNumber = parseInt(randomNumberElement.textContent);

    for (let i = 1; i <= 100; i++) {
        const circle = document.createElement('div');
        circle.textContent = i;
        circle.classList.add('circle');
        circle.addEventListener('click', function() {
            document.getElementById('randomNumber').textContent = this.textContent;
            // Remove clicked class from all circles
            container.querySelectorAll('.circle').forEach(btn => btn.classList.remove('clicked'));
            // Add clicked class to the clicked circle
        });

        container.appendChild(circle);
  
    }
}

buttons();

function generateRandomNumber() {
    do {
        number = Math.floor(Math.random() * 99) + 1;
    } while (generatedNumbers.includes(number));
    generatedNumbers.push(number);
    document.getElementById('randomNumber').textContent = number;
    updateCircleColors(); // Call updateCircleColors() after generating each random number
}


function updateCircleColors() {
    const circles = document.querySelectorAll('.circle');
    const randomNumber = parseInt(document.getElementById('randomNumber').textContent);

    // Check if the game is not paused
    if (!isPaused) {
        circles.forEach(circle => {
            const circleNumber = parseInt(circle.textContent);
            if (circleNumber === randomNumber) {
                circle.style.backgroundColor = '#EB0E00'; // Change background color to red
            } 
        });
    }
}



// Encapsulate the function and the flag within a closure

document.getElementById('image').addEventListener('click', function() {
    var audio = document.getElementById('audio');
    if (audio.paused) {
        document.getElementById('image').src = './volume.png';
      audio.play();
    } else {
        document.getElementById('image').src ='./mute.png';
      audio.pause();
      audio.currentTime = 0; // Reset audio to the beginning
    }
  });


  