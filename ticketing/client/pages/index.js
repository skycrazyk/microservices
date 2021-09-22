import axios from 'axios'

const Landing = ({ currentUser }) => {
    // console.log(currentUser)
    return <h1>Landing page</h1>
}

Landing.getInitialProps = async () => {
    // const response = await axios.get('/api/users/currentuser')
    // return response.data
    console.log('I WAS EXECUTED')
    return {}
}

export default Landing
