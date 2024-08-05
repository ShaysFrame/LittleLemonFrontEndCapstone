// Design the Booking form

import React from "react";

const BookingForm = (props) => {
  const [dates, setDates] = React.useState("");
  const [times, setTimes] = React.useState("");
  const [guests, setGuests] = React.useState("");
  const [occasion, setOccasion] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.SubmitForm(e);
  };

  const handleChange = (e) => {
    setDates(e);
    props.dispatch(e);
    // Solve it later???
  };

  const handleBookChange = (e) => {
    setGuests(e.target.value);
  }

  const handleTimeChange = (e) => {
    setTimes(e.target.value);
  }

  const handleOccasionChange = (e) => {
    setOccasion(e.target.value);
  }

  return (
    <header>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <>
              <label htmlFor="book-date">Choose Date:</label>
              <input
                id="book-date"
                value={dates}
                type="date"
                onChange={(e) => handleChange(e.target.value)}
                required
              />
            </>

            {/* For time selection */}
            <div>
              <label htmlFor="book-time">Choose Time:</label>
              <select
                id="book-time"
                value={times}
                onChange={handleTimeChange}
              >
                <option value="">Select a Time</option>
                {props.availableTimes.availableTimes.map((availableTimes) => {
                  return <option key={availableTimes}>{availableTimes}</option>;
                })}
              </select>
            </div>

            {/* For number of guests */}
            <>
                <label htmlFor="book-guests">Number of Guests:</label>
                <input 
                  type="number" 
                  id="book-guests"
                  min={1}
                  value={guests}
                  onChange={handleBookChange}
                />
            </>

            {/* For occasion */}
            <>
              <label htmlFor="book-occasion">Occasion:</label>
              <select 
                id="book-occasion" 
                key={occasion}
                value={occasion}
                onChange={handleOccasionChange}
              >
                <option value="">Birthday</option>
                <option value="">Anniversary</option>
              </select>
              <div className="btnReceive">
                <input 
                  aria-label="On Click" 
                  type="submit" 
                  value={"Make Your Reservation"}
                />
              </div>
            </>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;
