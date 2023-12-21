import React from 'react';

const headerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '10px',
  textAlign: 'center',
};

const Header = ({ userName }) => {
  return <header style={headerStyle}>{userName && <span>{userName}</span>}</header>;
};

export default Header;
