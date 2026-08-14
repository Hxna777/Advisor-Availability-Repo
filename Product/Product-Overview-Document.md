# Product Overview Document

# Product

    Advisor Availability Feature

# Problem

    Academic advising appointments at a university are released only once at the start of the week, and students can only view and book appointments that are within the currently available one-week window. When no appointments are available, students must wait for the next release or repeatedly check for any appointments that are available due to cancellations throughout the week.

# Target User

    Primary user: University student seeking an academic advising appointment.

    Secondary users: Academic advisors and administrative staff.

# User Problem

    Students have no way of being notified when an appointment becomes available throughout the week due to a cancellation.

# Key Assumptions

    - Advisors release appointments in a fixed, predictable weekly batch at the start of the week (Every Monday, 9am local time).
    - Students are willing to state a rough time-of-day preference for their appointments rather than an exact time.
    - A single "first come" simulated match is enough to demonstrate the concept.

# Proposed MVP

    Allow students who cannot find an appointment to:

    1. See when the next appointment release occurs.
    2. Specify a preferred time of day for a desired appointment in the current week.
    3. Join a waitlist.
    4. Receive an in-product notification when an appointment at their preferred time becomes available.
    5. Attempt to book the appointment.
    6. Receive a confirmation upon successful booking.

# Goal

    Reduce repeated appointment-system checking attempts and improve student satisfaction towards the booking process.

# In Scope

    This prototype only demonstrates the UX steps involved in the feature using hardcoded mock data.

# Out of Scope

    - Real email/SMS notifications
    - University authentication
    - Calendar integration
    - Backend appointment management
    - Multi-student concurrency (e.g., two students competing for the same slot; see User Stories doc for more detail on this case)

# Compliance & Accessibility Considerations (not implemented in this prototype)

    If built as a real university feature, before deployment, privacy (FIPAA) regulations and data collection norms, and industry standards for accesibility need to be abided by. Smooth integration into existing unviersity digital interfaces would also be prioritized during the build. These are noted here to reflect real-world scope, not implemented in this frontend-only prototype.

# Success Metrics

    Potential metrics to validate after a real launch (not measurable from this mock-data prototype):

    - Waitlist-to-booking conversion rate
    - Number of repeated availability checks
    - Student satisfaction with the booking process through short survey