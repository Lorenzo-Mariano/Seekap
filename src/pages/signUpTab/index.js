import { useState } from "react";
import styles from './index.module.css';

export default function SignUpForm() {

    const [signUpUsername, setSignUpUsername] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');

    function userNameChangeHandler(event) {
        setSignUpUsername(event.target.value);
    }

    function passwordChangeHandler(event) {
        setSignUpPassword(event.target.value);
    }

    function submitSignUpHandler(event) {
        event.preventDefault();
        console.log('submitted! (sign up)')
    }

    return (
        <form className={styles["sign-up-form"]}>
            <div className={styles['form-name']}>Sign Up</div>

            <label>Username</label>
            <input type="text" className={styles["sign-up-username"]} onChange={userNameChangeHandler} value={signUpUsername}></input>

            <label>Password</label>
            <input type="password" className={styles["sign-up-password"]} onChange={passwordChangeHandler} value={signUpPassword}></input>

            <input type="submit" className={styles["submit-button"]} onClick={submitSignUpHandler} value="Submit" />
        </form>
    )
}