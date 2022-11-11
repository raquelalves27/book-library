import React, { useState } from "react";
import Modal from "../modal/modal";

const Card=({book})=>{
    const[show, setShow] = useState(false) 
    const[bookItem, setItem] = useState()
    return(
        <>
            {
                book.map((item) =>{
                    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail
                    let amount=item.saleInfo.listPrice && item.saleInfo.listPrice.amount
                    if(thumbnail !== undefined && amount !== undefined)
                    return(
                        <>
                     <div className="card" onClick={()=>{setShow(true); setItem(item)}}>
                        <img src={thumbnail} alt=""/>
                        <div className="bottom">
                            <h3 className="title">{item.volumeInfo.title}</h3>
                             <p className="amount">&#83377;{amount}</p>
                             <Modal/>
                         </div>
                     </div>
                     
                     </>
                    )
                })
            }
        </>
    )
}
export default Card