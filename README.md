# CSRF-Attack example

## step one:
Download the code, and start the server by running `node index.js`. (make sure nodejs is installed)

## step two:
Check if the server is running by going to [http://localhost:3000/](localhost:3000) and seeing if the server responds with
`Welcome to the homepage`.

## step three:
Start the attack by going to [http://localhost:3000/csrf-attack.html](localhost:3000/csrf-attack) and clicking the submit-button. Now you should be able to see the text `Email updated successfully`.