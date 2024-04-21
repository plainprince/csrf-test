# CSRF-Attack example

## step one:
Clone the code by doing `git clone https://github.com/plainprince/csrf-test.git`.

## step two:
Install the packages by running `npm install` or just `npm i` and start the server by running `node index.js`. (make sure nodejs is installed)

## step three:
Check if the server is running by going to [http://localhost:3000/](localhost:3000) and seeing if the server responds with
`Welcome to the CSRF example homepage (and some form)`.

## step four:
Start the attack by going to [http://localhost:3000/csrf-attack](localhost:3000/csrf-attack) and clicking the submit-button. Now you should be able to see the text `Email updated successfully`, but the email didn't get updated to the values you wrote into the input fields, but instead the values of two hidden input fields, containing the "fake" csrf-token and the email of the hacker.