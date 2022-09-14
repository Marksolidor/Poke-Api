import React from "react";

const Pagination = (props) => {
    const {onLeftClick, onRightClick, page, totalPages} = props;
    return(

   <>
   <div className="pagination">
    <button className="pagination-btn" onClick={onLeftClick}> Back </button>
    <div>{page} de {totalPages}</div>
    <button className="pagination-btn" onClick={onRightClick}> Next </button>
   </div>
   </>
    )
}

export default Pagination