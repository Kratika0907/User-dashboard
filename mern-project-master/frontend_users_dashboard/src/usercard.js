import React from 'react';
import './style.css';
import {Link , useRouteMatch} from "react-router-dom";
  


export const UserCard = (props) => {
   let { path, url } = useRouteMatch();
  const handleDeleteUser = (id,event ) => {
    console.log("delete" ,id)
  }
  const showUserDetail = (id , event) => {
    console.log(id , "show detail")
  }
  return (
    <div className="container" key={props.id}>
    <span className="icon-wrapper" onClick={(event)=>handleDeleteUser(props.id , event)}><i class="fa fa-close"></i></span>
    <Link to={`/${props.id}`}><img src="https://visualpharm.com/assets/387/Person-595b40b75ba036ed117da139.svg" alt={"kratika"}/></Link>
    <div> Kratika</div>
    <div> company | domain </div>
    <div> college | department </div>
    </div>
  )
}