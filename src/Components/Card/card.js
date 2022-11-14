import React, { useState } from "react";
import Modal from "../modal/modal";
import "../modal/style.css";

const Card = ({ book }) => {
  return (
    <>
      <div
        className="card"
        onClick={() => {}}
      >
        <img src={book.imageLinks} alt="" />
        <div className="bottom">
          <h3 className="title">{book.title}</h3>
          <p className="amount">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(book.listPrince)}
          </p>
          <Modal book={book} />
        </div>
      </div>
    </>
  );
};

export default Card;
