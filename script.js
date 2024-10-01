document.getElementById('eventForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const eventTitle = document.getElementById('eventTitle').value;
    const eventDate = document.getElementById('eventDate').value;

    if (eventTitle && eventDate) {
        addEvent(eventTitle, eventDate);
        document.getElementById('eventTitle').value = '';
        document.getElementById('eventDate').value = '';
    } else {
        alert('Por favor, complete todos los campos.');
    }
});

function addEvent(title, date) {
    const eventList = document.getElementById('eventList');

    const eventDiv = document.createElement('div');
    eventDiv.classList.add('event');

    const eventDetails = document.createElement('span');
    eventDetails.textContent = `${title} - ${date}`;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        eventList.removeChild(eventDiv);
    });

    eventDiv.appendChild(eventDetails);
    eventDiv.appendChild(deleteBtn);
    eventList.appendChild(eventDiv);
}
