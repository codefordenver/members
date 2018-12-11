import React from 'react';
import './FlowdockLanding.css';

const FlowdockLanding = () => (
  <div className="Flowdock-landing">
    <h1>Join Code for Denver on Flowdock</h1>
    <ol>
      <li>Check your email for a link to join our organization on Flowdock.</li>
      <li>
        Already part of CfD on Flowdock
        {'?'}{' '}
        <a href="https://www.flowdock.com/app/cfa-brigades/code-for-denver">
          Go to Flows
        </a>
      </li>
    </ol>
  </div>
);

export default FlowdockLanding;
