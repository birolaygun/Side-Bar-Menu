import React, { useState } from "react";
import { Link } from "react-router-dom";
import { menu } from "./data.js";

const Menu = (props) => {
  return (
    <div>
      {menu
        .filter((items) => items[0].class === props.clss)
        .map((item) => {


          return item.length === 1 ? (
            <Link
              to={`/${item[0].menu}`.toLowerCase().split(" ").join("_")}
              key={Math.random()}
            >
              <div className="item">
                <div className="icon">
                  <i className={item[0].icon}></i>
                </div>
                <div className="menuName ">{item[0].menu}</div>
              </div>
            </Link>
          ) : (
            <div key={Math.random()} className="menu-item">
              <div
                onClick={() => {
                  if (
                    document.getElementById(item[0].menu).style.display ===
                    "none"
                  ) {
                    document.getElementById(item[0].menu).style.display =
                      "block";
                  } else {
                    document.getElementById(item[0].menu).style.display =
                      "none";
                  }
                }}
                id={item[0].id}
                className={`${item[0].id}` + " " + "items"}
              >
                <div className={" " + "icon"}>
                  <i className={item[0].icon}></i>
                </div>

                <div className={"menuName"}>{item[0].menu}</div>

                <i className={"fas fa-chevron-down"}></i>
              </div>

              <div
                id={item[0].menu}
                className={`${item[0].menu}` + " " + "subMenu"}
              >
                {item[1].map((sub) => (
                  <Link
                    key={Math.random()}
                    className="menu-child"
                    to={`/${sub}`.toLowerCase().split(" ").join("_")}
                  >
                    {sub}
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Menu;
