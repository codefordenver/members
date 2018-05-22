import React from 'react';
import alertify from 'alertifyjs';
import './FlowdockRedirect.css';

function Alert() {
  alertify.defaults.notifier.delay = 0;
  alertify.alert(
    'Almost there...',
    'Please check your email to complete the process!',
    function() {
      window.open('https://www.flowdock.com/app/cfa-brigades/code-for-denver');
    }
  );
}

const FlowdockRedirect = () => (
  <div className="Flowdock-link">
    <h1 onClick={Alert}>Click to request an invite to join CfD on Flowdock</h1>
    <h2>Please check your email to complete the process.</h2>
  </div>
);

export default FlowdockRedirect;
