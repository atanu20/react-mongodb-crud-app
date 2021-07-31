import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {NavLink, Link} from 'react-router-dom';
import { useHistory } from 'react-router';

const Home =()=>{
    const [users,setUsers]=useState([]);
     useEffect(()=>{
        loadData();

    },[])
    const his=useHistory();
    const deleteUser=async (id)=>{
         await axios.delete(`http://localhost:8000/deletedata/${id}`);
        loadData();
        // console.log(id)
    
    }
    
const loadData= async ()=>{

const res= await axios.get("http://localhost:8000/getdata");
// console.log(res.data);
setUsers(res.data);

}

    return(
        <>
        <br /><br /><br />
       <div className="container show ">
       <div className="row">
           <div className="col-8 mx-auto ">
           <table className="table table-bordered table-sm">
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Date</th>
        <th>Operation</th>
      </tr>
    </thead>
    <tbody>
        
            
           {
            users.map((user,ind)=>{
                return (<>
                
                <tr key={ind}>
                <td>{ind+1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{new Date(user.date).toDateString()}</td>
                <td>
                    
                    <NavLink className="btn btn-danger" to={`/edit/${user._id}`}>Edit</NavLink>
                    &nbsp;
                    <Link className="btn btn-danger mx-2" onClick={()=>{ if (window.confirm('Are you sure you want to delete this item?'))deleteUser(user._id)}} >Delete</Link>
         

                </td>
                </tr>
                </>)
            })
    } 
       
    
    </tbody>
  </table>
           </div>
       </div>
       </div>
        </>
    );
}
export default Home;