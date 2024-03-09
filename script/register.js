// loginInput
// continueWithEmail
// continueWithGoogle
// continueWithFacebook

const BASE_URL = 'https://bewakoof-web-clone.vercel.app/api'


document.querySelector('.registerForm').addEventListener('submit', (event) => {
     event.preventDefault();
     const name = document.querySelector('.inputName').value;
     const email = document.querySelector('.inputEmail').value;
     const password = document.querySelector('.inputPassword').value;
     console.log(name, email, password)
     alert()

     fetch(`${BASE_URL}/register`, {
          method: 'POST',
          headers: {
               'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password, name }),
     }).then(response => response.json())
          .then(data => {
               // Assuming the server responds with a token property
               console.log(data)

               if (token) {
                    // Store the token in localStorage
                    localStorage.setItem('token', token);

                    // Redirect to the dashboard or another page
                    window.location.href = '/index.html';
               } else {
                    console.error('Authentication failed');
                    // Handle authentication failure, show an error message, etc.
               }

          })
          .catch(error => {
               console.error('Error:', error);
               // Handle authentication failure, show an error message, etc.
          });
});







