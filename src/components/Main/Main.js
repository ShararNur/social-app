import React from 'react';
import './Main.css'
import { useEffect, useState } from 'react';
import User from '../User-details/User';
import Usercart from '../Usercart/Usercart';

const Main = () => {
    const [users, setUsers] = useState([]);
    const [count, setCount] = useState([]);

    useEffect(() =>{
    fetch('https://randomuser.me/api/?results=15')
    .then(response => response.json())
    .then(data => {
      // console.log(data.results);
      setUsers(data.results);
    })
  }, [])

  const handleAddFriend =(user)=>{
    //   const userNumber = user.length;
    //   console.log("clicked", user);
      const newCount = [...count,user];
      setCount(newCount);
  }

    return (
        <div className="main-container">
            <div className="user-details">
            <h1>Team Builder</h1>
                {
                users.map(user => <User user={user} key= {user.login.md5} handleAddFriend={handleAddFriend}></User>)
                }
            </div>
            <div className="user-cart">
                
                <Usercart count={count} ></Usercart>
                
            </div>
        </div>
    );
};

export default Main;