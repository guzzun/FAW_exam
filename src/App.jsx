import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import UserDetails from './components/UserDetails';
import { getRandomUser } from './services/userService';
import './App.css';

const appStyle = {
  fontFamily: 'Arial, sans-serif',
  textAlign: 'center',
  marginTop: '50px',
};

class App extends React.Component {
  state = {
    currentUser: null,
  };

  componentDidMount() {
    this.fetchRandomUser();
  }

  fetchRandomUser = async () => {
    try {
      const user = await getRandomUser();
      this.setState({ currentUser: user });
    } catch (error) {
      // Handle error
    }
  };

  render() {
    const { currentUser } = this.state;

    return (
      <Router>
        <div style={appStyle}>
          <Header userName={currentUser && `${currentUser.name.first} ${currentUser.name.last}`} />

          <Route exact path="/">
            <div>
              <h1>Hello, Usero!</h1>
              <Link to="/user">View Random User</Link>
            </div>
          </Route>

          <Route path="/user">{currentUser && <UserDetails user={currentUser} />}</Route>
        </div>
      </Router>
    );
  }
}

export default App;
