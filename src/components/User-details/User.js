import React from 'react';
import './User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

const User = (props) => {
    // console.log(props)
    const {name, email, phone, location, picture} = props.user;
    return (
        <div className="user-section">
            <div className="user-pic">
                <img src={picture.large} alt="" />
            </div>
            <div className="user-info">
                <h1>Name: {name.first} {name.last}</h1>
                <p>email: {email}</p>
                <p>Learn about me</p>
                <p>Phone: {phone}</p>
                <p>Address: {location.city}, {location.country}</p>
                <p>Yearly Income: {location.street.number}$</p>
                <button className="add-btn" onClick={() => props.handleAddFriend(props.user)}><FontAwesomeIcon icon={faUserPlus} /> Add Friend</button>
            </div>
        </div>
    );
};

export default User;