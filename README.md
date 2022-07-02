# Coding Challenge

## Demo Link:

[Coding challenge demo link](https://julianpek.github.io/Challenge/)

## Table of Contents

1. [About the Project](#about-the-project)
2. [What I Am Proud Of](#what-i-am-proud-of)
3. [Screenshots](#screenshots)
4. [Technologies](#technologies)
5. [Setup](#setup)
6. [Status](#status)
7. [Credits](#credits)

## About the Project

The goal of this project was to create a customer list prototype that is easily editible by the user. One key feature included in the project is form and input validation. Through styling changes, error notifications, and restrictions, the user is guided through every step of the editing process to ensure a smooth experience. A GET request is used to fetch customer data through a RESTful API. Depending on the outcome of the GET request, different information is displayed to provide a better user experience. If the the GET request fails, the user is notified through an error message. While the request is in progress, the user is notified through a loading message. Finally, if the request is successful, the user is presented with their customer data mapped inside a table with the ability to edit each customer.

## What I Am Proud Of

What I am particulary proud of is how I decided to validate user inputs and the edit form as a whole. Instead of validating inputs upon submission or displaying a generic alert, I decided to validate each input field onBlur and display the relavant error beside the appropriate input field. Each input field uses it's own validation function. For specific input fields like Email or Postal Code, unique regex is used to ensure the appropriate character combination is entered. In addition to this, if all input fields aren't valid, the user is unable to press the Save button. The button is disabled by default unless all fields are valid. I am proud of this approach because it gives the user direct feedback before submitting the form. This can guide the user to submit the form successfully on their first attempt resulting in a better user experience.

## Screenshots

![Customer List](https://user-images.githubusercontent.com/85806647/176986715-f1fbbc6d-af0c-4b0c-950f-405be1cd0a15.png)
![Edit Modal](https://user-images.githubusercontent.com/85806647/176986716-a288c64a-017a-47c0-ad09-cd2257e10a57.png)

## Technologies

HTML, CSS, JavaScript, React, RESTful API.

## Setup

1. Install node (https://nodejs.org/en/download/)
2. Ensure you have version v16.13.1 installed or use nvm to manage your node version.
3. Run npm install
4. Run npm start

## Status

Coding challenge is completed.

## Credits

Wave for the opportunity (cheesy, I know right?).
