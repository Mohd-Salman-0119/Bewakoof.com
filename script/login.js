// loginInput
// continueWithEmail
// continueWithGoogle
// continueWithFacebook



document.querySelector('.loginForm').addEventListener('submit', (event) => {
     event.preventDefault()
     const email = document.querySelector('.inputEmail').value;
     const password = document.querySelector('.inputPassword').value;

     fetch('http://localhost:8000/api/login', {
          method: 'POST',
          headers: {
               'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
     }).then(response => response.json())
          .then(data => {
               // Assuming the server responds with a token property
               const token = data.token;
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







