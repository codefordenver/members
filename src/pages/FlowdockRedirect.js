import React from 'react';
import './FlowdockRedirect.css';

function Alert() {
  alert('Please check your email to accept the invite!');
}

const FlowdockRedirect = () => (
  <div>
    <a
      onClick={Alert}
      href="https://www.flowdock.com/app/cfa-brigades/code-for-denver"
    >
      <h1>Click to request a Flowdock invitation</h1>
    </a>
    <p>Please check your email to accept the invite.</p>
  </div>
);

export default FlowdockRedirect;
