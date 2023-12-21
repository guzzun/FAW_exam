import axios from 'axios';

const getRandomUser = async () => {
  try {
    const response = await axios.get('https://randomuser.me/api/');
    return response.data.results[0];
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

export { getRandomUser };
