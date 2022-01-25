import React from 'react';

// Component for user when they finish filling out Create Profile page 
// will state simple status message
// and some calendar to schedule interview
// this component should take in some type of prop that renders success so that it registers this page
const ScreeningInterview = () => {

  return (  
    <div>
      <h2>Congrats! You are enrolled.</h2>
      <p>Please select a time for your screening interview:</p>
      <p>Some Calendar implementation</p>
    </div>
  )

}

export default ScreeningInterview;