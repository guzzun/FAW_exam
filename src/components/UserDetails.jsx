import React from 'react';

const userDetailsStyle = {
  maxWidth: '600px',
  margin: '0 auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  marginTop: '20px',
};

const UserDetails = ({ user }) => {
  return (
    <div style={userDetailsStyle}>
      <h2>User Details</h2>
      <div>
        <strong>Name:</strong> {`${user.name.first} ${user.name.last}`}
      </div>
      <div>
        <strong>Email:</strong> {user.email}
      </div>
      <div>
        <strong>Country:</strong> {user.location.country}
      </div>
    </div>
  );
};

export default UserDetails;
