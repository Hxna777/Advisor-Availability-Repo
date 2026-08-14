# Advisor Availability Feature Prototype

A frontend prototype exploring a solution to a hypothetical university scenario  where academic advising appointments are released once a week, and once fully booked, students have no way to know if a slot opens up without repeatedly checking manually.

## The Problem

Academic advising appointments are released in a weekly batch. When they're gone, students either wait until next week or manually re-check the booking page hoping for a cancellation. This prototype explores a "waitlist + notify" alternative that removes the need to keep checking.

## What's in this repo

- `src/App.jsx` / `src/App.css` — the working React prototype
- `product/product-overview-document.md` — problem statement, target user, scope, goals, assumptions, compliance considerations, success metrics. 
- `product/user-stories.md` — user stories with acceptance criteria, including an out-of-scope section for limitations of the prototype. 
- `screenshots/` — key states of the app

## Screenshots

1. Showing No Availability
  <img width="1402" height="1030" alt="1-no-availability" src="https://github.com/user-attachments/assets/12e61f32-c675-401e-845a-fb5db182d85f" />


2. Selecting Appointment Time Preference
  <img width="1400" height="1026" alt="2-appointment-time-preference" src="https://github.com/user-attachments/assets/d3afad5b-877e-44a7-9bbd-30d411f41e8d" />

3. Displaying Waitlist Confirmation
  <img width="1396" height="1018" alt="3-waitlist-confirmation" src="https://github.com/user-attachments/assets/8e7fc171-622f-4e1e-9173-8c8f3e2a7812" />

4. Revealing Appointment Available
  <img width="1396" height="1020" alt="4-appointment-available" src="https://github.com/user-attachments/assets/3c8e3eb9-4dd9-49cd-83a4-e50e6d063374" />

5. Confirming Appointment Booking
  <img width="1400" height="1018" alt="5-appointment-confirmation" src="https://github.com/user-attachments/assets/f57dabc0-4a06-42cf-84c7-6bb15e57c3ae" />

## Tech stack

React (Vite), frontend-only by design to keep the prototype focused on demonstrating the UX and product thinking.

## Run it locally

