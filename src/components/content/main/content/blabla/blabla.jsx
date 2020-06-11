import React from "react"
import Modal from "../../../../UI/modal/modal";
import BlaBlaMenu from "./blabla-menu/blabla-menu"

const BlaBla = ()=>{
  return (
    <React.Fragment>
     <div className="menu"><BlaBlaMenu/></div> 
      <Modal>TEST  MODAL</Modal>
    <div className="blabla">
      blabla
    </div>
    </React.Fragment>
  )
}

export default BlaBla;
