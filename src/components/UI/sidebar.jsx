import React,{useState} from "react";
import MyProfile from '../content/side-bar/my-profile/my-profile';

const Sidebar = (props) =>{
  const sideBarToggleHandler= (e)=>{
      console.log(e.target.checked);
  }

  return (
    <div className="sidebarFix">
      <div  className="sidebar">
        <input onClick={sideBarToggleHandler} id="sidebarId" type="checkbox" className="sidebar__toggle"/>
        <div className="slideSideBar"><MyProfile/></div>
        <label for="sidebarId" className="sidebar__btn"><span className="sidebar__btn-span"><i className="fa fa-bars" aria-hidden="true"></i><span className="sidebar__btn-span2">8</span></span></label>
      </div>
    </div>

  )
}

export default Sidebar;
