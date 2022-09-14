import React from "react";

const Pagination = (props) => {
    const {onLeftClick, onRightClick, page, totalPages} = props;
    return(

   <>
   <div>
    <button onClick={onLeftClick}>Atras</button>
    <div>{page} de {totalPages}</div>
    <button onClick={onRightClick}>Siguiente</button>
   </div>
   </>
    )
}

export default Pagination