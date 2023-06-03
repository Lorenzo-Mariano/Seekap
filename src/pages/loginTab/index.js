import { useState } from "react";
import styles from './index.module.css';

export default function LoginForm() {

    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    function userNameChangeHandler(event) {
        console.log(event)
        setLoginUsername(event.target.value);
    }

    function passwordChangeHandler(event) {
        console.log(event);
        setLoginPassword(event.target.value);
    }

    function submitLoginHandler(event) {
        event.preventDefault();
        console.log('submitted! (login)');
    }

    return (
        <form className={styles["login-form"]}>
            <div className={styles['form-name']}>Login</div>

            <label>Username</label>
            <input type="text" className={styles['login-username']} onChange={userNameChangeHandler} value={loginUsername}></input>

            <label>Password</label>
            <input type="password" className={styles['login-password']} onChange={passwordChangeHandler} value={loginPassword}></input>

            <input type="submit" className={styles["submit-button"]} onClick={submitLoginHandler} value="Submit" />
        </form>
    )
}