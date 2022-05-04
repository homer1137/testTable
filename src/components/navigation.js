import React from "react";
import { NavigationStyle } from "../styles/Navigation";
import { useParams, Link, NavLink } from "react-router-dom";

export default function Navigation({ pages }) {
  // создание массива количества страниц

  let b = [];
  function massiv() {
    if (pages) {
      for (let izi = 1; izi <= pages; izi++) {
        b.push(izi);
      }
    }
  }
  massiv();

  // создание верстки для страниц. с показом активной странице. и возможностью перехода на нужную страницу

  const GetPages = () => {
    return b.map((item) => (
      <NavLink
        key={item}
        style={({ isActive }) => ({
          color: isActive ? "#7EBC3C" : "#474955",
          textDecoration: "none",
          padding: "4px",
          fontFamily: "Roboto",
          fontStyle: "italic",
          fontWeight: "700",
          fontSize: "18px",
          lineHeight: "137.69%",
          
        })}
        to={`/pages/${item}`}
      >
        {item}
      </NavLink>
    ));
  };

  const { id } = useParams();
  const pages2 = +pages;

  const previousPage = () => {
    if (+id > 1) return `/pages/${+id - 1}`;
    else return 1;
  };

  const previousPage2 = previousPage();

  function nextPage() {
    if (+id < pages2) return `/pages/${+id + 1}`;
    else return `/pages/${pages2}`;
  }
  const nextPage2 = nextPage();

  return (
    <NavigationStyle>
      <Link
        style={{ textDecoration: "none", color: "#474955" }}
        to={previousPage2}
      >
        Назад
      </Link>
      <div style={{weight: '104px'}}>
      <GetPages />
      </div>
      
      <Link style={{ textDecoration: "none", color: "#474955" }} to={nextPage2}>
        Далее
      </Link>
    </NavigationStyle>
  );
}
