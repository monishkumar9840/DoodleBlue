import { useState, useRef, useEffect } from "react";
import { Button, Input, Select, TextArea } from "../Common";
import "./Registration.css";

function Registration({ event, events, onEventChange, onSubmit }) {

  const nameInputRef = useRef(null);

  useEffect(() => {
    nameInputRef.current.focus();
  }, []);

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
  const [submittedRegistration, setSubmittedRegistration] = useState(null);
  const [submissionError, setSubmissionError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setSubmittedRegistration(null);
    setSubmissionError('');
    setFormData((previousData) => ({
      ...previousData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleEventChange = (e) => {
    setSubmittedRegistration(null);
    setSubmissionError('');
    onEventChange(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!event) {
      setSubmissionError('Please choose an event.');
      return;
    }

    setSubmissionError('');
    setIsSubmitting(true);

    try {
      await onSubmit(formData, event);
      setSubmittedRegistration({ ...formData, event });
    } catch (error) {
      setSubmissionError(
        error instanceof Error
          ? `${error.message}. Make sure the JSON Server is running.`
          : 'Could not save your registration. Make sure the JSON Server is running.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    if (isSubmitting) return;
    setSubmittedRegistration(null);
    setSubmissionError('');
    onEventChange('');
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
              <label htmlFor="studentName">
                Student name <span>*</span>
              </label>

              <Input
                ref={nameInputRef}
                type="text"
                id="studentName"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">
                Email address <span>*</span>
              </label>

              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="student@example.com"
                required
              />
            </div>

            {/* Department */}
            <div className="form-group">
              <label htmlFor="department">
                Department <span>*</span>
              </label>

              <Select
                id="department"
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
              </Select>
            </div>

            {/* Year */}
            <div className="form-group">
              <label htmlFor="year">
                Year of study <span>*</span>
              </label>

              <Select
                id="year"
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
              </Select>
            </div>

            {/* Password */}
            <div className="form-group">
              <label htmlFor="password">
                Create a demo password (optional)
              </label>

              <Input
                type="password"
                id="password"
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
                  <Input
                    type="radio"
                    id="attendance-in-person"
                    name="attendance"
                    value="in-person"
                    checked={formData.attendance === "in-person"}
                    onChange={handleChange}
                  />

                  In person
                </label>

                <label className="radio-label">
                  <Input
                    type="radio"
                    id="attendance-online"
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

            <label htmlFor="event">
              Choose an event <span>*</span>
            </label>

            <Select
              id="event"
              value={event ? String(event.id) : ""}
              onChange={handleEventChange}
              required
            >
              <option value="">Select an event</option>
              {events.map((availableEvent) => (
                <option key={availableEvent.id} value={String(availableEvent.id)}>
                  {availableEvent.title}
                </option>
              ))}
            </Select>

          </div>

          {/* Accessibility */}
          <div className="checkbox-group">

            <Input
              type="checkbox"
              id="accessibility"
              name="accessibility"
              checked={formData.accessibility}
              onChange={handleChange}
            />

            <label htmlFor="accessibility">
              I would like the team to contact me about accessibility support.
            </label>

          </div>

          {/* Message */}
          <div className="form-group full-width">

            <label htmlFor="message">
              Message (optional)
            </label>

            <TextArea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Any questions or notes for the event team?"
              rows="5"
            />

          </div>

          {/* Buttons */}
          <div className="registration-buttons">

            <Button
              variant="primary"
              type="submit"
              className="submit-registration"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Saving...' : 'Submit Registration'}
            </Button>

            <Button
              variant="secondary"
              type="button"
              className="reset-form"
              onClick={handleReset}
              disabled={isSubmitting}
            >
              Reset Form
            </Button>

          </div>

        </form>

        {submissionError && (
          <p className="registration-error" role="alert">
            {submissionError}
          </p>
        )}

        {submittedRegistration && (
          <section className="registration-success" role="status" aria-live="polite">
            <h2>Registration complete!</h2>
            <p>
              Your registration has been saved to the local database.
            </p>
            <ul>
              <li><strong>Student:</strong> {submittedRegistration.studentName}</li>
              <li><strong>Email:</strong> {submittedRegistration.email}</li>
              <li>
                <strong>Department:</strong>{' '}
                {submittedRegistration.department === 'CSE'
                  ? 'Computer Science Engineering'
                  : submittedRegistration.department === 'CSE-CS'
                    ? 'CSE - Cyber Security'
                    : submittedRegistration.department}
              </li>
              <li><strong>Event:</strong> {submittedRegistration.event.title}</li>
              <li>
                <strong>Attendance:</strong>{' '}
                {submittedRegistration.attendance === 'online' ? 'Online' : 'In person'}
              </li>
            </ul>
          </section>
        )}

      </div>
    </section>
  );
}

export default Registration;