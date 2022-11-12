import React, { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import api from "../../Services/api";
import PaginatedItems from "../Paginate/paginate";

const Main = () => {
  const [bookData, setData] = useState([]);
  const [search, setSearch] = useState("");


  const searchBook = async (evt) => {
    if (evt.key === "Enter") {
      try {
        const res = await api.get(
          `/volumes?q=${search}=&key=${process.env.REACT_APP_KEY_API}&maxResults=20`
        );
        setData(res.data.items);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const send = async() => {
    const res = await api.get(
      `/volumes?q=${search}=&key=${process.env.REACT_APP_KEY_API}&maxResults=20`
    );
    setData(res.data.items);
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
          <h1>Teste onde ficaria</h1>
        </div>
        <div className="row2">
          <h2>find Search book</h2>
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
        { bookData.length && <PaginatedItems itemsPerPage={8} dados={bookData} />}
      </div>
    </>
  );
};
export default Main;
