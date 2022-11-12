import React, { useState } from "react";
import Modal from "../modal/modal";

const Card = ({ book }) => {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState();
  const thumbnail =
    book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;
  const amount = book.saleInfo.listPrice && book.saleInfo.listPrice.amount;
  // if(thumbnail !== undefined && amount !== undefined)

  return (
    <>
      <div
        className="card"
        onClick={() => {
          setShow(true);
          setItem(book);
        }}
      >
        <img src={thumbnail} alt="" />
        <div className="bottom">
          <h3 className="title">{book.volumeInfo.title}</h3>
          <p className="amount">&#83377;{amount}</p>
          <Modal />
        </div>
      </div>
    </>
  );
};

export default Card;