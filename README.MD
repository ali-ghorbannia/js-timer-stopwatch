# Timer and Stopwatch JavaScript Functions

This repository contains JavaScript functions for implementing a simple timer and stopwatch feature in a web application. These functions provide functionality for displaying the current time and day of the week, as well as implementing a stopwatch with start, stop, and clear functionalities.

## Features:

1. **Display Current Time and Day:**

   - The `timeFunc()` function updates the display of the current time and day of the week.
   - It retrieves the current time and day using JavaScript's `Date` object.
   - The time is displayed in the format "HH:MM:SS" with leading zeros if necessary.
   - The day of the week is displayed using a `switch` statement based on the value returned by the `getDay()` method.

2. **Continuous Time Update:**

   - The `timeFunc()` function is called at regular intervals (every second) using `setInterval()` to continuously update the displayed time and day.

3. **Stopwatch Functionality:**
   - The `stopwatch()` function is triggered when the user clicks the "Start" button.
   - It starts a stopwatch timer that updates the display every second with the elapsed time.
   - When the "Start" button is clicked again, it records the current stopwatch time and adds it to a list of recorded times.
   - The "End" button stops the stopwatch timer, and the "Clear" button clears the list of recorded times.

## Usage:

- Include the provided JavaScript code in your web application.
- Ensure that the HTML elements referenced in the code (`timeHolder`, `dayHolder`, `stopWatchHolder`, etc.) are present in your HTML file.
- You may customize the appearance and behavior of the timer and stopwatch elements as needed.

## Contribution:

Contributions and improvements to the functionality and documentation of this code are welcome. Please feel free to fork the repository, make your changes, and submit a pull request.
