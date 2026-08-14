# User Stories

# Story 1: View Next Appointment Release

    As a student who cannot find an available appointment, I want to know when new appointments will be released so that I know when to check the system again.

    Acceptance Criteria

    -   The next appointment release date and time are displayed when no appointments are available.

# Story 2: Set Preferred Time of Day

    As a student I want to indicate whether I prefer a Morning, Afternoon, or 'Any' appointment when I get notified of an open appointment.

    Acceptance Criteria

        - When the student opens the drop down menu to select a preferred time, the options of Morning, Afternoon, or Any are displayed to indicate scheduling preferences.
        - An appointment is considered a "match" for a student if its time-of-day equals the student's selected preference, or if the student selected "Any."

# Story 3: Join Appointment Waitlist

    As a student who cannot find an available appointment, I want to join a waitlist so that I can be notified when a suitable appointment becomes available.

    Acceptance Criteria

        - The student receives confirmation after successfully joining the waitlist.
        - The student cannot accidentally join the same waitlist multiple times.

# Story 4: Notify Student of Availability

    As a student on the waitlist, I want to be notified when a matching appointment becomes available so that I can attempt to book it.

    Acceptance Criteria

        - A student is notified, via an in-app update to the booking page, when a matching appointment becomes available.
        - The notification identifies the appointment date, time, and location.
        - The notification does not imply that the appointment is reserved for the student.
        - The student can navigate from the notification to the booking flow.

# Story 5: Book the available appointment and receive confirmation

    As a student I want to book the appointment that was shown to me.

    Acceptance Criteria

        - When I click 'Book Appointment', the interface shows a clear booking confirmation that includes the advisor's name, and the date and time of the appointment.
        - Given I have booked the appointment, the 'Book Appointment' button is no longer shown, so I cannot send a request to book the appointment again.
        - Clicking 'Book Appointment' multiple times in quick succession does not create multiple bookings or show conflicting confirmation states.

# Out of Scope / Not addressed in this prototype

    - **Multi-student slot contention:** In a real system, two waitlisted students could be shown the same available slot at the same time, and only one could successfully book it. This prototype simulates a single student session with no concept of other users, so this scenario cannot occur here. A real implementation would need a defined resolution rule (e.g., first-to-click wins, with the second student shown a "slot no longer available" state).
    - **Waitlist expiration or leave/cancel flow:** Not included; a student's waitlist status is assumed to persist for the session with no removal mechanism.
