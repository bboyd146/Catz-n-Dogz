const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    if (email && password) {
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to log in.');
        }
    }
};

const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && email && password) {
        try {
            
            const response = await fetch('/api/user', {
                method: 'POST',
                body: JSON.stringify({ username, email, password }),
                headers: { 'Content-Type': 'application/json' },
            });
    
            if (response.ok) {
                document.location.replace('/dashboard');
            } else {
                alert('Failed to sign up.');
            }
        } catch (error) {
            console.log(error)
        }
    }
};
const login = document.querySelector('#login-form')
const signup = document.querySelector('#signup-form')

    login.addEventListener('submit', loginFormHandler);

    signup.addEventListener('submit', signupFormHandler);