import React from "react";
import { StyledTable } from "../styles/TableStyle";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Search from "./search";
import Navigation from "./navigation";

export default function Table({ data, loading }) {
  const { id } = useParams();
  const [filteredPosts, setFilteredPosts] = useState(data);
  const [pages, setPages] = useState("");
  const countriesPerPage = 10;
  const navigate = useNavigate();
  const goFirstPage = () => navigate("/pages/1");
  const [titleFilter, setTitleFilter] = useState(false);
  const [search, setSearch] = useState("");
  const [bodyFilter, setBodyFilter] = useState(false);
  const [numberFilter, setNumberFilter] = useState(false);

  useEffect(() => {
    handleSearch(search, titleFilter);
  }, [search, data, titleFilter, bodyFilter, numberFilter]);

  useEffect(() => {
    const ctr = Math.ceil(filteredPosts.length / countriesPerPage);
    setPages(ctr);
  }, [filteredPosts]);

  //фильтрация данных по запросу

  const handleSearch = (search, titleFilter) => {
    let data2 = [...data];

    // Фильтр по названию
    if (titleFilter) {
      setBodyFilter(false);
      setNumberFilter(false);
      data2 = data2.sort(function (a, b) {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
    }
    // Фильтр по "телу"
    if (bodyFilter) {
      setTitleFilter(false);
      setNumberFilter(false);
      data2 = data2.sort(function (a, b) {
        if (a.body < b.body) {
          return -1;
        }
        if (a.body > b.body) {
          return 1;
        }
        return 0;
      });
    }

    // Фильтр по номеру

    if (numberFilter) {
      setTitleFilter(false);
      setBodyFilter(false);
      data2 = data2.sort(function (a, b) {
        if (a.id < b.id) {
          return -1;
        }
        if (a.id > b.id) {
          return 1;
        }
        return 0;
      });
    }


    if (search) {
      data2 = data2.filter((item) => {
        return (
          item.body.toLowerCase().includes(search.toLowerCase()) ||
          item.title.toLowerCase().includes(search.toLowerCase())
        );
      });
    }

    goFirstPage();
    setFilteredPosts(data2);
  };

  // Обработка данных запроса
  const ShowData = () => {
    if (loading === true) {
      return (
        <tr>
          <td></td>
          <td>Данные загружаются</td>
          <td>Данные загружаются</td>
        </tr>
      );
    }
    if (!filteredPosts.length) {
      return (
        <tr>
          <td></td>
          <td>Нет совпадений</td>
          <td>Нет совпадений</td>
        </tr>
      );
    }
    // отрисовка данных исходя из номера страницы
    return filteredPosts.slice((id - 1) * 10, id * 10).map((item) => {
      return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.title}</td>
          <td>{item.body}</td>
        </tr>
      );
    });
  };

  return (
    <>
      <Search search={search} setSearch={setSearch} />
      <StyledTable>
        <thead>
          <tr>
            <td>
            <button onClick={() => setNumberFilter(!numberFilter)}>ID</button>
            </td>
            <td>
              <button onClick={() => setTitleFilter(!titleFilter)}>
                Заголовок
              </button>
            </td>
            <td>
              <button onClick={() => setBodyFilter(!bodyFilter)}>
                Описание
              </button>
            </td>
          </tr>
        </thead>
        <tbody>
          <ShowData />
        </tbody>
      </StyledTable>
      <Navigation pages={pages} />
    </>
  );
}
