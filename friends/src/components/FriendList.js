import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import styled from "styled-components";



 const FriendList = () => { 

	const logout = () => {
		localStorage.removeItem("token");
	  };
	  
    const [friends, setFriends] = useState([])

    useEffect(() => {
        getFriends()
    }, [])

    const getFriends = () => {
        const token = localStorage.getItem("token")
        axios.get("http://localhost:5000/api/friends", {headers: {Authorization: token}})
        .then(res => {
            console.log('friendslist res', res.data)
            setFriends(res.data)
    })

        .catch(err => console.log(err))
    }

     return (
         <div>
             <h2>Friends List</h2>
            <stlDiv>
                {friends.map(friend => {
                    return (
                        <div key={friend.id}>
                            <h4>{friend.name}</h4>
                            <h4>{friend.age}</h4>
                            <h4>{friend.email}</h4>
                        </div>
                    )
                })}
            </stlDiv>
			<Link onClick={logout}>Logout</Link>
         </div>
     )
 }

 export default FriendList;