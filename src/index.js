import React from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const name = "DEVersity";
const img = "https://picsum.photos/200?grayscale";
const headerStyle = {
  color: "red",
  textAlign: "center"
};

root.render(
  <div spellCheck="false">
    <h1 onClick={changeHeaderColor()} style={headerStyle}>
      Stuff {name} Likes
    </h1>
    <div className="lg-thumbnail">
      <img
        src="https://www.freecodecamp.org/news/content/images/size/w2000/2021/08/chris-ried-ieic5Tq8YMk-unsplash.jpg"
        alt=""
      />
      <img
        src="https://www.legendsoflearning.com/wp-content/uploads/2020/10/benefits-of-online-learning-graphic.png"
        alt=""
      />
      <img src={img} alt="" />
    </div>
    <p>Created by {name}</p>
    <p className="copyright">Copyright {getYear()}</p>
  </div>
);

function getYear() {
  let year = new Date().getFullYear();
  return year;
}

function changeHeaderColor() {
  console.log("I was clicked");
  headerStyle.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
}
