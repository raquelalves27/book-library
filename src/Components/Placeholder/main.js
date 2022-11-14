import React, { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import api from "../../Services/api";
import PaginatedItems from "../Paginate/paginate";

const Main = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");


  const searchBook = async (evt) => {
    if (evt.key === "Enter") {
      try {
        const res = await api.get(
          `/volumes?q=${search}=&key=${process.env.REACT_APP_KEY_API}&maxResults=20`
        );

        const books = res.data.items.map(book => {
          return {
            title: book.volumeInfo.title,
            author: book.volumeInfo.authors,
            description: book.volumeInfo.description || "não foi possível encontrar",
            listPrince: book.saleInfo.listPrice && book.saleInfo.listPrice.amount || 0,
            imageLinks: book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail
          }
        })
        setBooks(books);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const send = async() => {
    const evt = {
      key: "Enter"
    }
    searchBook(evt)
  }

  useEffect(()=>{
    const evt = {
      key: "Enter"
    }
    searchBook(evt)
  }, [])

  return (
    <>
      <div className="header">
        <div className="row1">
          <img src= "https://www.fariasbrito.com.br/assets/imgs/logo-colorida.webp" />
        </div>
        <div className="row2">
          <h2>Olá aluno, encontre seu livro!</h2>
          <div className="search">
            <input
              type="text"
              placeholder="enter name book"
              value={search}
              onChange={(i) => setSearch(i.target.value)}
              onKeyPress={searchBook}
            />
          </div>
                 <button onClick={send}>
            Pesquisar <BiSearchAlt />
          </button>
        </div>
      </div>
      <div className="container">
        { books.length && <PaginatedItems itemsPerPage={8} books={books} />}
      </div>
    </>
  );
};
export default Main;
