const schedule = [
    { time: '09:00', event: 'Opening Ceremony', description: 'The inaugration is about to begin, click here to navigate.' },
    { time: '02:00', event: 'Registration', description: 'Registrations and accomadation.' },
    { time: '02:00', event: 'Lunch Time', description: 'Time to grab some lunch and network.' },
    { time: '01:00', event: 'Evaluation Time', description: 'Time for evaluations and feedback.' },
    { time: '00:00', event: 'Closing Ceremony', description: 'The event concludes with the closing ceremony.' }
];

function updateSchedule() {
    const currentTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    const currentEvent = schedule.find(event => currentTime >= event.time) || schedule[0];
    document.getElementById('event-schedule').textContent = currentEvent.event;
    document.getElementById('event-description').textContent = currentEvent.description;
}

updateSchedule();
setInterval(updateSchedule, 60000); // Update every minute


// Google Forms Submit
function executeGoogleFormsSubmit() {
    // Build the Field Ids and Answers dictionary object
    // (replace with your Google Form Ids and Answers)
    var bodyValues = {
        "entry.306042534": document.getElementById("unique-id").value,
        "entry.193107409": document.getElementById("issue").value,
    };

    // check if there is any empty field
    for (var key in bodyValues) {
        if (bodyValues[key] === "") {
            alert("Please fill in all the fields");
            return;
        }
    }

    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Set the request method and URL
    xhr.open("POST", "https://docs.google.com/forms/u/0/d/e/1FAIpQLSet_LIYBtTKUXZLYuSshu1Lgib5IDGRbFAaP1GSzhF3Z6yrKg/formResponse");

    // Set the request headers
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    // Convert the bodyValues object to a URL-encoded string
    var formData = Object.keys(bodyValues).map(key => encodeURIComponent(key) + "=" + encodeURIComponent(bodyValues[key])).join("&");

    // Set the onload event handler
    xhr.onload = function () {
        // Use the response status and text
        console.log(`Status : ${xhr.status} ${xhr.statusText}`);
        console.log(`Body : \n${xhr.responseText}`);

    };

    // Send the POST request with the form data
    xhr.send(formData);

    // Reset the form
    document.getElementById("unique-id").value = "";
    document.getElementById("issue").value = "";
    alert("Your response has been submitted successfully");

}


// for the tweets to be centered
window.addEventListener('load', function () {
    var tweetContainers = document.querySelectorAll('.tweet-container');
    tweetContainers.forEach(function (container) {
        container.style.display = 'flex';
        container.style.justifyContent = 'center';
        container.style.alignItems = 'center';
    });
});


// The Header logic
// Get the header image element
const headerImage = document.getElementById('header-image');
const headerImage2 = document.getElementById('header-image2');
const bicepLogo = document.getElementById('bicep-logo');

// Function to update the header image and BICEP logo based on screen width
function updateHeaderImage() {
    if (window.innerWidth > 600) {
    headerImage.src = 'pics/anv.png';
    headerImage2.style.display = 'none';
    bicepLogo.style.width = '130px';
    bicepLogo.style.height = '130px';
    } else {
    headerImage.src = 'pics/head1.png';
    headerImage2.src = 'pics/head2.png';
    headerImage2.style.display = 'block';
    bicepLogo.style.width = '80px';
    bicepLogo.style.height = '80px';
    }
}

// Call the function on page load and whenever the window is resized
window.addEventListener('load', updateHeaderImage);
window.addEventListener('resize', updateHeaderImage);