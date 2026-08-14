import { useState } from "react";
import "./App.css";

// --- MOCK DATA ---
// In a real product this would come from a backend. Here it's hardcoded.
const NEXT_RELEASE_DATE = "Monday, 9:00 AM";

const MOCK_APPOINTMENTS = {
  Morning: {
    advisor: "Dr. Sarah Chen",
    date: "Thursday, Aug 20",
    time: "9:30 AM",
    location: "Advising Office, Room 204",
  },
  Afternoon: {
    advisor: "Dr. James Patel",
    date: "Thursday, Aug 20",
    time: "2:30 PM",
    location: "Advising Office, Room 108",
  },
  Any: {
    advisor: "Dr. Maria Lopez",
    date: "Friday, Aug 21",
    time: "11:00 AM",
    location: "Advising Office, Room 204",
  },
};

function App() {
  // Tracks which time of day the student prefers
  const [preferredTime, setPreferredTime] = useState("Any");

  // Tracks whether the student has joined the waitlist
  const [onWaitlist, setOnWaitlist] = useState(false);

  // Prototype-only: simulates an appointment opening up
  const [appointmentAvailable, setAppointmentAvailable] = useState(false);
  // Holds whichever mock appointment matched the student's preference
  const [matchedAppointment, setMatchedAppointment] = useState(null);


  // Tracks whether the student has confirmed booking
  const [booked, setBooked] = useState(false);

  const handleJoinWaitlist = () => {
    setOnWaitlist(true);
  };

  const handleSimulateAvailability = () => {
    const appointment = MOCK_APPOINTMENTS[preferredTime];
    setMatchedAppointment(appointment);
    setAppointmentAvailable(true);
  };

  const handleBookAppointment = () => {
    setBooked(true);
  };

  return (
    <div className="page">
      <h1>Academic Advising Appointments</h1>

      {/* STATE 1: An appointment has been "released" by the demo control */}
      {appointmentAvailable ? (
        <div className="card appointment-card">
          <h2>An Appointment Is Available!</h2>

         {!booked ? (
            <>
              <p><strong>Advisor:</strong> {matchedAppointment.advisor}</p>
              <p><strong>Date:</strong> {matchedAppointment.date}</p>
              <p><strong>Time:</strong> {matchedAppointment.time}</p>
              <p><strong>Location:</strong> {matchedAppointment.location}</p>
              <button className="primary-btn" onClick={handleBookAppointment}>
                Book Appointment
              </button>
            </>
          ) : (
            <div className="confirmation">
              <h3>✅ Appointment Confirmed</h3>
              <p>
                You're booked with {matchedAppointment.advisor} on{" "}
                {matchedAppointment.date} at {matchedAppointment.time}.
              </p>
            </div>
          )}
        </div>
      ) : (
        // STATE 2: Default state — no appointments open yet
        <div className="card">
          <p className="no-appointments">
            There are currently no appointments available.
          </p>
          <p className="next-release">
            Next appointment release: <strong>{NEXT_RELEASE_DATE}</strong>
          </p>

          {!onWaitlist ? (
            <div className="waitlist-form">
              <label htmlFor="time-select">Preferred time of day:</label>
              <select
                id="time-select"
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
              >
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
                <option value="Any">Any</option>
              </select>

              <button className="primary-btn" onClick={handleJoinWaitlist}>
                Join Waitlist
              </button>
            </div>
          ) : (
            <div className="confirmation">
              <h3>✅ You're on the Waitlist</h3>
              <p>
                We'll notify you when a slot opens up (preference:{" "}
                <strong>{preferredTime}</strong>).
              </p>
            </div>
          )}
        </div>
      )}

      {/* PROTOTYPE-ONLY CONTROL — not part of the real product */}
      <div className="demo-controls">
        <p className="demo-label">Prototype Demo Control</p>
        <button
          className="demo-btn"
          onClick={handleSimulateAvailability}
          disabled={appointmentAvailable}
        >
          Simulate Appointment Becoming Available
        </button>
      </div>
    </div>
  );
}

export default App;