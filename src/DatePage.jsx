import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePage = () => {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [duration, setDuration] = useState(0);

  const handleFromDateChange = (date) => {
    setFromDate(date);
  };

  const handleToDateChange = (date) => {
    setToDate(date);
  };

  const handleDurationChange = (e) => {
    const { value } = e.target;
    setDuration(parseInt(value));
  };

  // Calculate To Date based on Duration
  const calculateToDate = () => {
    if (fromDate && duration) {
      const calculatedToDate = new Date(fromDate);
      calculatedToDate.setMinutes(calculatedToDate.getMinutes() + duration);
      setToDate(calculatedToDate);
    }
  };

  return (
    <div className="date-page">
      <h1>Date Page</h1>
      <div className="form-group">
        <label htmlFor="fromDate">From Date:</label>
        <br />
        <DatePicker
          id="fromDate"
          selected={fromDate}
          onChange={handleFromDateChange}
          showTimeSelect
          dateFormat="MMMM d, yyyy h:mm aa"
          className="date-picker"
        />
      </div>
      <div className="form-group">
        <label htmlFor="duration">Duration (minutes):</label>
        <br />
        <input
          id="duration"
          type="number"
          value={duration}
          onChange={handleDurationChange}
          className="duration-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="toDate">To Date:</label>
        <br />
        <DatePicker
          id="toDate"
          selected={toDate}
          onChange={handleToDateChange}
          showTimeSelect
          dateFormat="MMMM d, yyyy h:mm aa"
          className="date-picker"
          disabled
        />
      </div>
      <button className="calculate-button" onClick={calculateToDate}>
        Calculate To Date
      </button>
    </div>
  );
};

export default DatePage;
