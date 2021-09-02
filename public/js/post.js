const postFormHandler = async (event) => {
    event.preventDefault();

    const newBreed = document.querySelector('#newBreed').value.trim();
    const newGender = document.querySelector('#newGender').value.trim();
    const newContact = document.querySelector('#newContact').value.trim();
    const newDetails = document.querySelector('#newDetails').value.trim();
    if (newBreed && newGender && newContact) {
        const response = await fetch('/api/post', {
            method: 'POST',
            body: JSON.stringify({ newBreed, newGender, newContact, newDetails }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed upload');
        }
    }
};

document
    .querySelector('#post-form')
    .addEventListener('submit', postFormHandler);