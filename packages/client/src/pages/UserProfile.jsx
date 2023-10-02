import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useProvideAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import api from '../utils/api.config';
import { useNavigate } from 'react-router-dom';

function UserProfile() {
const {auth} = useProvideAuth();
  useEffect (()=> {
    api.get("/protected")
    .then(()=>
    console.log ("successfull"))
    .catch((err) =>
    console.log ("failed"))
  },[auth.isAuthenticated]) ;

  if (auth.isAuthenticated === false) {
  return <Navigate to = "/signin" />;
  }
 console.log(auth.user)
 const navigate = useNavigate();
  return (
    <div>
      <h2 style={{display: "flex", justifyContent: 'center'}}>{`${auth.user}'s `}Profile </h2> 

      <div style={{display:"flex",justifyContent:"center", alignItems:"center", margin:"auto"}}>
        
        <button onClick={()=> navigate('/addrecipe')}>Add recipe</button>
        
        {/* <button> Edit Recipe</button>
        <button> Delete Recipe</button> */}

      </div>
    
  </div>
  )
}

export default UserProfile