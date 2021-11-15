import React from 'react';
import './Usercart.css';
const Usercart = (props) => {
    // console.log(props);
    const count = props.count;
    // let total = 0;
    // for (let i = 0; i < count.length; i++) {
    //     const element = count[i];
    //     total = total + element.location.street.number;
    // }
    const totalSalary = count.reduce((sum, user) => sum + user.location.street.number, 0)
    return (
        <div className="user-cart">
            <h2>Friends Details</h2>
            <p>Friends Added: {count.length}</p>
            <p>Total Annual Salary: {totalSalary}</p>
        </div>
    );
};

export default Usercart;