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
  </div>
);

export default AdminPage;
