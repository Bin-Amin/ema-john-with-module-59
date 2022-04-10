import React, { useState } from "react";
import { useAuthState, useCreateUserWithnameAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setname] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleNameBlur = event => {
        setname(event.target.value);

    }

    const handleAddressBlur = event => {
        setAddress(event.target.value);

    }
    const handlePhoneBlur = event => {
        setPhone(event.target.value);

    }

    // if (user) {
    //     navigate('/shop');
    // }

    const handleCreateUser = event => {
        event.preventDefault();
        const shipping = { name, email, address, phone };
        console.log(shipping);

    }



    return (
        <div className="form-container">
            <div>
                <h2 className="form-title">Shipping Information</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="name">name</label>
                        <input onBlur={handleNameBlur} type="name" name="name" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input value={user?.email} readOnly type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name="address" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone-number">Phone Number</label>
                        <input onBlur={handlePhoneBlur} type="text" name="phone" id="" required />
                    </div>
                    {/* <p style={{ color: 'red' }}>{error}</p>
                    <p style={{ color: 'red' }}>{hookError}</p> */}
                    <input className="form-submit" type="submit" value="Add Shipping" />
                </form>

            </div>
        </div>
    );
};

export default Shipment;