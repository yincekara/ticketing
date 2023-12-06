import axios from 'axios';

const LandingPage = ({currentUser}) => {
    axios.get('/api/users/currentuser').catch((err) => {
        console.log(err.message);
    });
    console.log('currentUser: ', currentUser);
    return <h1>Landing Page</h1>;
}
/*
LandingPage.getInitialProps = async () => {
    console.log('I am on the server');
    const response = await axios.get('api/users/currentuser');
    return response.data;
}
*/
export default LandingPage;