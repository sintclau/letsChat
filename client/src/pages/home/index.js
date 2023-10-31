import dbCheckUser from '../../database/dbCheckUser';
import styles from './styles.module.css';

const Home = ({ username, setUsername, password, setPassword, socket }) => {
    function login(username, password) {
            console.log("test");
            if (dbCheckUser(username, password) == true) {
                console.log("Logged in succesfully!");
            }
    };

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h1>{`letsChat`}</h1>
                <input className={styles.userInput} placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
                <input className={styles.passInput} type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
                <button className='btn btn-primary' onClick={login(username, password)}>Login</button>
            </div>
            <div className={styles.rightContainer} />
        </div>
    );
};

export default Home;