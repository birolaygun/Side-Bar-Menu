import React from "react";
import { Link } from "react-router-dom";
import { menu } from "./data.js";
import mercedes from "./galery/mercedes.gif";

const Menu = (props) => {
  const category = new Array(menu.map((ilk) => ilk[0].class));
  let categories = [];

  category[0].filter((el) => {
    if (categories.indexOf(el) == -1) {
      categories.push(el);
    }
  });

  return (
    <div className="sideBar">
      <div className="logo">
        <Link to="/">
          <img src={mercedes} alt="mercedes" />
        </Link>
      </div>
      <div className="menu">
        <div>
          {categories.map((clss) => {
            return (
              <div>
                <h1>{clss.toUpperCase()}</h1>
                {menu
                  .filter((items) => items[0].class === clss)
                  .map((item) => {
                    return item.length === 1 ? (
                      // Başlık

                      <Link
                        to={`/${item[0].menu}`
                          .toLowerCase()
                          .split(" ")
                          .join("_")}
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
                      // Açılan Başlık

                      <div
                        id={item[0].id
                          .toString()
                          .toUpperCase()
                          .split(" ")
                          .join("_")}
                        key={Math.random()}
                      >
                        <div
                          onClick={() => {
                            if (
                              document.getElementById(
                                item[0].menu.toLowerCase().split(" ").join("_")
                              ).style.display === "none"
                            ) {
                              document.getElementById(
                                item[0].menu.toLowerCase().split(" ").join("_")
                              ).style.display = "block";
                              document.getElementById(
                                item[0].menu.toUpperCase().split(" ").join("_")
                              ).style.transform = "rotate(90deg)";
                              document.getElementById(
                                item[0].id
                                  .toString()
                                  .toUpperCase()
                                  .split(" ")
                                  .join("_")
                              ).style.backgroundColor = "#29293c";
                            } else {
                              document.getElementById(
                                item[0].menu.toLowerCase().split(" ").join("_")
                              ).style.display = "none";
                              document.getElementById(
                                item[0].menu.toUpperCase().split(" ").join("_")
                              ).style.transform = "rotate(0deg)";
                              document.getElementById(
                                item[0].id
                                  .toString()
                                  .toUpperCase()
                                  .split(" ")
                                  .join("_")
                              ).style.backgroundColor = "transparent";
                            }
                          }}
                          className="items"
                        >
                          <div className="icon">
                            <i className={item[0].icon}></i>
                          </div>
                          <div className="menuName">{item[0].menu}</div>
                          <i
                            id={item[0].menu.toUpperCase().split(" ").join("_")}
                            className={"fas fa-angle-right"}
                          ></i>
                        </div>

                        <div
                          id={item[0].menu.toLowerCase().split(" ").join("_")}
                          className="subMenu"
                          style={{ display: "none" }}
                        >
                          {item[1].map((sub) =>
                            sub.length === 1 ? (
                              // Açılan Başlık > Başlık

                              <div key={Math.random()}>
                                <Link
                                  to={`/${sub[0]}`
                                    .toLowerCase()
                                    .split(" ")
                                    .join("_")}
                                >
                                  {sub[0]}
                                </Link>
                              </div>
                            ) : (
                              // Açılan Başlık > Açılan Başlık

                              <div key={Math.random()}>
                                <div
                                  className="subHead"
                                  onClick={() => {
                                    if (
                                      document.getElementById(
                                        sub[0]
                                          .toUpperCase()
                                          .split(" ")
                                          .join("_")
                                      ).style.display === "none"
                                    ) {
                                      document.getElementById(
                                        sub[0]
                                          .toUpperCase()
                                          .split(" ")
                                          .join("_")
                                      ).style.display = "block";

                                      document.getElementById(
                                        sub[0]
                                          .toLowerCase()
                                          .split(" ")
                                          .join("_")
                                      ).style.transform = "rotate(90deg)";
                                    } else {
                                      document.getElementById(
                                        sub[0]
                                          .toUpperCase()
                                          .split(" ")
                                          .join("_")
                                      ).style.display = "none";

                                      document.getElementById(
                                        sub[0]
                                          .toLowerCase()
                                          .split(" ")
                                          .join("_")
                                      ).style.transform = "rotate(0deg)";
                                    }
                                  }}
                                >
                                  <div className="subItems">{sub[0]}</div>
                                  <i
                                    id={sub[0]
                                      .toLowerCase()
                                      .split(" ")
                                      .join("_")}
                                    className={"fas fa-angle-right"}
                                  ></i>
                                </div>

                                {/* Açılan Başlık > Açılan Başlık > Başlık  */}

                                <div
                                  className="bottomSub"
                                  style={{ display: "none" }}
                                  id={sub[0].toUpperCase().split(" ").join("_")}
                                >
                                  {sub[1].map((subhead) => (
                                    <Link
                                      key={Math.random()}
                                      to={`/${subhead}`
                                        .toLowerCase()
                                        .split(" ")
                                        .join("_")}
                                      className="subHeadDiv"
                                    >
                                      <i className="fas fa-caret-right"></i>
                                      {subhead}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Menu;
