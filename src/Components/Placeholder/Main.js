import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import Card from "../Card/card";
import axios from "axios";

const Main = () => {
  const[search, setSearch] = useState("");
  const searchBook = (evt)=>{
    if(evt.key === "Enter")
    {
      console.log("hello")
    }
  }
  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>Teste onde ficaria</h1>
        </div>
        <div className="row2">
          <h2>find Search book</h2>
          <div className="search">
            <input type="text" placeholder="enter name book"  value={search} onChange={i=>setSearch(i.target.value)} onKeyPress={searchBook}/>
          </div>
          <button>
            Pesquisar <BiSearchAlt />
          </button>
        </div>
      </div>
      <div className="container">
        <Card />
      </div>
    </>
  );
};
export default Main;
