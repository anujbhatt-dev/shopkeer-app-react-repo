import React from 'react';

const DetailBtn = (props)=>{
  return (
    <div className="detailBtn">
      <button className="detailBtn__btn detailBtn__btn-cancel">cancel</button>
      <button className="detailBtn__btn detailBtn__btn-complete">complete</button>
      <button className="detailBtn__btn detailBtn__btn-ok">ok</button>
    </div>
  )
}

export default DetailBtn;
