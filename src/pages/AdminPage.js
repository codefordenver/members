import React from 'react';
import { Link } from 'react-router-dom';

const AdminPage = () => (
  <div>
    <h1>Admin Info and Resources</h1>
    <p>
      For adding people to Flowdock, you can use{' '}
      <Link to="/admin/onboarding">this page</Link> to get a list of people that
      signed up in the last week.
    </p>
    <p>
      For creating new projects go to:{' '}
      <Link to="/projects/create">/projects/create</Link>
      <br />
      Technically anyone can do this right now, but we haven't made the url
      discoverable until we figure out the flow better.
    </p>
  </div>
);

export default AdminPage;
