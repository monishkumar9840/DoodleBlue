import React, { useState } from "react";
import "./Registration.css";

function Registration({ event, onSubmit, onBack }) {
  const [formData, setFormData] = useState({
    studentName: "",
    email: "",
    department: "",
    year: "",
    password: "",
    attendance: "in-person",
    accessibility: false,
    message: "",
  });

  // Prevent error if event is not passed
  if (!event) {
    return (
      <section className="registration-section">
        <div className="registration-container">
          <h1>No Event Selected</h1>
          <p className="registration-description">
            Please select an event before registering.
          </p>

          <button
            type="button"
            className="back-button"
            onClick={onBack}
          >
            Back to Events
          </button>
        </div>
      </section>
    );
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.studentName ||
      !formData.email ||
      !formData.department ||
      !formData.year
    ) {
      alert("Please fill all required fields.");
      return;
    }

    // Send selected event ID back to App
    onSubmit(event.id);
  };

  const handleReset = () => {
    setFormData({
      studentName: "",
      email: "",
      department: "",
      year: "",
      password: "",
      attendance: "in-person",
      accessibility: false,
      message: "",
    });
  };

  return (
    <section className="registration-section">
      <div className="registration-container">

        <p className="registration-subtitle">
          SAVE YOUR SEAT
        </p>

        <h1>Student Event Registration</h1>

        <p className="registration-description">
          Complete the required fields to register for a campus event.
        </p>

        <form onSubmit={handleSubmit}>

          <div className="registration-grid">

            {/* Student Name */}
            <div className="form-group">
              <label>
                Student name <span>*</span>
              </label>

              <input
                type="text"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <label>
                Email address <span>*</span>
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="student@example.com"
                required
              />
            </div>

            {/* Department */}
            <div className="form-group">
              <label>
                Department <span>*</span>
              </label>

              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
              >
                <option value="">
                  Select your department
                </option>

                <option value="CSE">
                  Computer Science Engineering
                </option>

                <option value="CSE-CS">
                  CSE - Cyber Security
                </option>

                <option value="ECE">
                  Electronics and Communication
                </option>

                <option value="EEE">
                  Electrical and Electronics
                </option>

                <option value="MECH">
                  Mechanical Engineering
                </option>

                <option value="CIVIL">
                  Civil Engineering
                </option>
              </select>
            </div>

            {/* Year */}
            <div className="form-group">
              <label>
                Year of study <span>*</span>
              </label>

              <select
                name="year"
                value={formData.year}
                onChange={handleChange}
                required
              >
                <option value="">
                  Select your year
                </option>

                <option value="1st Year">
                  1st Year
                </option>

                <option value="2nd Year">
                  2nd Year
                </option>

                <option value="3rd Year">
                  3rd Year
                </option>

                <option value="4th Year">
                  4th Year
                </option>
              </select>
            </div>

            {/* Password */}
            <div className="form-group">
              <label>
                Create a demo password (optional)
              </label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password input example"
              />

              <small>
                This is a teaching example only; no password is saved or sent.
              </small>
            </div>

            {/* Attendance */}
            <div className="form-group">
              <label>How will you attend?</label>

              <div className="radio-group">

                <label className="radio-label">
                  <input
                    type="radio"
                    name="attendance"
                    value="in-person"
                    checked={formData.attendance === "in-person"}
                    onChange={handleChange}
                  />

                  In person
                </label>

                <label className="radio-label">
                  <input
                    type="radio"
                    name="attendance"
                    value="online"
                    checked={formData.attendance === "online"}
                    onChange={handleChange}
                  />

                  Online
                </label>

              </div>
            </div>

          </div>

          {/* Selected Event */}
          <div className="form-group full-width">

            <label>
              Choose an event <span>*</span>
            </label>

            <select value={event.id} disabled>
              <option value={event.id}>
                {event.title}
              </option>
            </select>

          </div>

          {/* Accessibility */}
          <div className="checkbox-group">

            <input
              type="checkbox"
              name="accessibility"
              checked={formData.accessibility}
              onChange={handleChange}
            />

            <label>
              I would like the team to contact me about accessibility support.
            </label>

          </div>

          {/* Message */}
          <div className="form-group full-width">

            <label>
              Message (optional)
            </label>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Any questions or notes for the event team?"
              rows="5"
            />

          </div>

          {/* Buttons */}
          <div className="registration-buttons">

            <button
              type="submit"
              className="submit-registration"
            >
              Submit Registration
            </button>

            <button
              type="button"
              className="reset-form"
              onClick={handleReset}
            >
              Reset Form
            </button>

            <button
              type="button"
              className="back-button"
              onClick={onBack}
            >
              Back to Events
            </button>

          </div>

        </form>

      </div>
    </section>
  );
}

export default Registration;