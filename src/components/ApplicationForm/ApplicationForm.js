import React from 'react';

const ApplicationForm = (props) => {
  return (
    <div className="application">
      <h3>{props.applyText}</h3>
      <form className="application__form">
        <div className="application__form-field">
          <label>Team members</label>
          <textarea name="textarea" placeholder="Minimum 1"></textarea>
        </div>
        <button className="ctaButton">Apply</button>
      </form>
    </div>
  )
}

export default ApplicationForm;
