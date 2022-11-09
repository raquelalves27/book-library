import React from "react";
import {BiSearchAlt} from 'react-icons/bi'

const Main = () => {
  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>Teste onde ficaria</h1>
        </div>
        <div>
          <div className="row2">
            <div>
              <h2>find Search book</h2>
              <div className="search">
                <input type="text" placeholder="enter name book" />
                <button>
                <BiSearchAlt/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Main;
