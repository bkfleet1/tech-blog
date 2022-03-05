const signupFormHandler = async (event) => {
    event.preventDefault();

    const fname = document.querySelector('#fname').value.trim();
    const lname = document.querySelector('#lname').value.trim();
    const username = document.querySelector('#username').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    const address1 = document.querySelector('#address1').value.trim();

    const city = document.querySelector('#city').value.trim();
    const state = document.querySelector('#state').value.trim();
    const zip = document.querySelector('#zip').value.trim();
   

    
    if (fname && lname && username && email && password && address1 && city && state && zip) {
        const response = await fetch('/api/users/', {
            method: 'post',
            body: JSON.stringify({
                fname,
                lname,
                username,
                email,
                password,
                address1,
                city,
                state,
                zip}),
                headers: { 'Content-Type': 'application/json' }
              });
          
              if (response.ok) {
                document.location.replace('/dashboard/');
              } else {
                alert(response.statusText);
              }
            }
          }


document
.querySelector('.signup-form')
.addEventListener('submit', signupFormHandler);