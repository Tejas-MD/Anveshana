const schedule = [
    { time: '09:00', event: 'Opening Ceremony', description: 'hello,The inaugration is about to begin, click here to navigate.' },
    { time: '02:00', event: 'Lunch Time', description: 'Time to grab some lunch and network.' },
    { time: '01:00', event: 'Evaluation Time', description: 'Time for evaluations and feedback.' },
    { time: '06:00', event: 'Closing Ceremony', description: 'The event concludes with the closing ceremony.' }
];

function updateSchedule() {
    const currentTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    const currentEvent = schedule.find(event => currentTime >= event.time) || schedule[0];
    document.getElementById('event-schedule').textContent = currentEvent.event;
    document.getElementById('event-description').textContent = currentEvent.description;
}

updateSchedule();
setInterval(updateSchedule, 60000); // Update every minute


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
    xhr.onload = function() {
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