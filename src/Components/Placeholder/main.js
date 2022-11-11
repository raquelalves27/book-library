import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import Card from "../Card/card";
import api from "../../Services/api"


const Main = () => {
  const [bookData,setData]=useState([])
  const[search, setSearch] = useState("")
  const searchBook = async (evt)=>{
    if(evt.key === "Enter")
    {
      try {
     const res = await api.get(`/volumes?q=${search}=&key=${process.env.REACT_APP_KEY_API}&maxResults=20`)
     setData(res.data.items)
      } catch (error) {
      console.log(error);
    }
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
        <Card  book={bookData}/>
      </div>
    </>
  );
};
export default Main;
