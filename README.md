# Task Management Logic in JavaScript

## Overview

This project offers basic logic in JavaScript for the management of a collection of tasks. It consists of:
- Transforming task objects in such a way that the description is omitted.
- Adding required new tasks using input from the user and assigning a unique ID.
- Filtering tasks to fetch only those which are marked as done.

## Languages used

- JavaScript

## Features

### Created Features

 - **Projection of Tasks by (Title and Status):** For retrieval of task titles and statuses, applies implementation of `.map()` method to yield an array of objects consisting of titles and statuses of the tasks without including the description.

- **Addition of Tasks:** Offers functionality `addNewTask` which takes care of adding new tasks with title description and status. Assigns IDs for new tasks which are added to old task lists thereby giving unique IDs.

- **Completed Task Filtering:** Includes a function `getCompletedTasks` that utilises the`.filter()` method to return a new array constaining only the tasks with a status of "done".

### Updated Features

- **ID Creation:** The `addNewTask` function now reliably determines the ID for new tasks by checking the ID of the last existing task, ensuring sequential and unique IDs.

## Challenges and Solutions

- **Challenge:** Ensuring that new data (tasks) are correctly structured and intergrate with existing data, including generating unique identifiers.
- **Solution:** I implemented clear object structures and logic for unique ID creation.

**Specific Challenge Encountered:** Rapid Sequential Commits

During the initial stages of development, I encountered a challenge related  to version control. I attempted to commit 3 changes sequentially, one         immediately after the other.I realised that commits should ideally represent a single, logical unit of work and therefore I should commit after making a change.

- This experience reinforced the value of thoughtful and well-organized commits for effective collaboration and maintainability of the project's history.

## Setup Instructions

-  This project primarily consists of JavaScript code and does not require a specific installation process beyond having a JavaScript runtime environment(web browser).

## **Usage:**
**In a Web Browser:**
1. Save the provided JavaScript code as an HTML file (e.g., `index.html`)  and include the JavaScript within `<script>` tags.
2. Open the `index.html` file in your web browser.
3. Open the browser's developer console (usually by pressing F12) to see  the output of `console.log()` and interact with the `prompt()` dialogues.
   
**Important:** The task status should be entered in lowercase (e.g., "todo", "doing", "done") for the application to correctly identify and process the status, particularly for filtering completed tasks.

- P.S. This project is open for collaboration. My contacts are just below.

## Contact

[Runyararo Marongwe/mrunya87@gmail.com] [https://github.com/Rue87]


