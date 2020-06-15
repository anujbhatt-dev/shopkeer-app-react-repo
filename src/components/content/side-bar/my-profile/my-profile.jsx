import React from "react"
// import Sidebar from "../../UI/sidebar"


const MyProfile=(props)=>{
  return (
    <div className="myProfile-fixer">
      <div className="myProfile">
        <div className="myProfile__head">
          <div className="myProfile__head-myPic">image</div>
          <div className="myProfile__head-myName">banku</div>
        </div>
        <div className="myProfile__shopPic">image</div>
        <div className="myProfile__details">
          <div className="myProfile__details-item">name</div>
          <div className="myProfile__details-item">address</div>
          <div className="myProfile__details-item">phone</div>
          <div className="myProfile__details-item">Order: 4</div>
          <div className="myProfile__details-item">completed order: 5</div>
        </div>
      </div>
    </div>
  )
}
export default MyProfile;
