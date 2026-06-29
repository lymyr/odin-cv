# CV Application

## Live Demo
https://heartfelt-kelpie-b4d4d9.netlify.app/

## Learning Process & Technical Implementation
This project served as a deep dive into React state management and component structure. Rather than scattering state across multiple disjointed components, I focused on centralizing the data and handling complex nested structures. 

Key technical takeaways from this build include:

* **Single Source of Truth:** Managed the entire application's data using a single `applicant` state object which holds all form inputs for the CV.
* **Complex State Arrays & Nested Data:** Implemented logic to allow the `applicant` state to hold multiple entries for both Academic Experience and Practical Experience. A single practical experience entry can also contain an array of multiple distinct job responsibilities.
* **Conditional Rendering:** Utilized state toggles to switch the UI between form input fields (for editing) and static HTML elements (for the final submitted view).

## Features
* **General Information:** Capture name, email, and phone number details.
* **Educational Experience:** Add multiple schools, titles of study, and date of attendance/graduation.
* **Practical Experience:** Add multiple jobs, including company name, position title, dates worked, and an array of main responsibilities.
* **Edit/Submit Toggle:** Users can submit their data to view a simple generated CV layout, and easily switch back to edit mode to update their information.

## Technologies Used
* React (Hooks, State Management, Props)
* CSS (Custom styling and layout)
* Vite / Create React App
