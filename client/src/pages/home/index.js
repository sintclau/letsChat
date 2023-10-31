import dbCheckUser from '../../database/dbCheckUser';
import styles from './styles.module.css';

const Home = ({ username, setUsername, password, setPassword, socket }) => {
    const handleLogin = async () => {
        const userCheck = await dbCheckUser(username, password);
        if (userCheck) {
            console.log("Logged in successfully!");
        } else {
            console.log("Couldn't log in!");
        }
    };
    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h1>{`letsChat`}</h1>
                <input className={styles.userInput} placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
                <input className={styles.passInput} type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
                <button className='btn btn-primary' onClick={handleLogin}>Login</button>
            </div>
            <div className={styles.rightContainer} />
        </div>
    );
};

export default Home;