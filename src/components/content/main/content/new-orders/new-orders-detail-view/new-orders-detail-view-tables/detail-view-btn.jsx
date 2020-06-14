import React from 'react';

const DetailBtn = (props)=>{
  return (
    <div className="detailBtn">
      <button className="detailBtn__btn detailBtn__btn-cancel"   onClick={props.deleteOrder}>decline</button>
      <button className="detailBtn__btn detailBtn__btn-complete">complete</button>
      <button className="detailBtn__btn detailBtn__btn-ok" onClick={props.close}>ok</button>
    </div>
  )
}

export default DetailBtn;
