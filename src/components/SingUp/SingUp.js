import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './SingUp.css';
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from '../../firebase.init';
const SingUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();


    const [createUserWithEmailAndPassword, user, hookError] = useCreateUserWithEmailAndPassword(auth)


    const handleEmailBlur = event => {
        setEmail(event.target.value);

    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);

    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);

    }

    if (user) {
        navigate('/shop');
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Your two passwords did not match')
            return;
        }
        if (password.length < 6) {
            setError('password must be 6 characters or longer')
            return;
        }
        createUserWithEmailAndPassword(email, password)
        // .then(result => {
        //     // const user = result.user;
        //     console.log("user submit now", result)
        // });
    }

    return (
        <div className="form-container">
            <div>
                <h2 className="form-title">Sing Up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="pasword">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-pasword">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <p style={{ color: 'red' }}>{hookError}</p>
                    <input className="form-submit" type="submit" value="Sing Up" />
                </form>
                <p className="form-link-father">
                    Already Have an account? <Link className="form-link" to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default SingUp;