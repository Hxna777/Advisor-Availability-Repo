# Advisor Availability Feature Prototype

A frontend prototype exploring a solution to a hypothetical university problem scenario  where academic advising appointments are released once a week, and once fully booked, students have no way to know if a slot opens up without repeatedly checking manually.

## The Problem

Academic advising appointments are released in a weekly batch. When they're gone, students either wait until next week or manually re-check the booking page hoping for a cancellation. This prototype explores a "waitlist + notify" alternative that removes the need to keep checking.

## What's in this repo

- `src/App.jsx` / `src/App.css` — the working React prototype
- `product/product-overview-document.md` — problem statement, target user, scope, goals, assumptions, compliance considerations, success metrics. 
- `product/user-stories.md` — user stories with acceptance criteria, including an out-of-scope section for limitations of the prototype. 
- `screenshots/` — key states of the app

## Screenshots

| No availability | Appointment time preference | waitlist confirmation | appointment available | appointment confirmation
|---|---|---|---|---|
| ![No appointments](screenshots/1-no-availability.png) | ![Appointment time preference](screenshots/2-appointment-time-preference.png) | ![Waitlist confirmation](screenshots/1-no-availability.png) | ![Appointment available](screenshots/1-no-availability.png) | ![Appointment confirmation](screenshots/1-no-availability.png) |

## Tech stack

React (Vite), frontend-only by design to keep the prototype focused on demonstrating the UX and product thinking.

## Run it locally

