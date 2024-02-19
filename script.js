const schedule = [
    { time: '09:00', event: 'Opening Ceremony', description: 'The event kicks off with the opening ceremony.' },
    { time: '12:00', event: 'Lunch Time', description: 'Time to grab some lunch and network.' },
    { time: '15:00', event: 'Evaluation Time', description: 'Time for evaluations and feedback.' },
    { time: '18:00', event: 'Closing Ceremony', description: 'The event concludes with the closing ceremony.' }
];

function updateSchedule() {
    const currentTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    const currentEvent = schedule.find(event => currentTime >= event.time) || schedule[0];
    document.getElementById('event-schedule').textContent = currentEvent.event;
    document.getElementById('event-description').textContent = currentEvent.description;
}

updateSchedule();
setInterval(updateSchedule, 60000); // Update every minute

