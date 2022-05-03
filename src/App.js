import Table from "./components/Table";
import Search from "./components/search";
import { Routes, Route, useNavigate } from "react-router-dom";
import Layout from "./components/layout";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pages, setPages] = useState("");
  const [countriesPerPage] = useState(10);
  const navigate = useNavigate();
  const goFirstPage = () => navigate('/pages/1') 


  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setLoading(false);
        setData(data);
        return data;
      })
      .then((data) => {
        // находим количество страниц: делим массив  на количество элментов на странице
        const ctr = Math.ceil(data.length / countriesPerPage);
        setPages(ctr);
        goFirstPage();
        console.log('render')
      })
      .catch((error) => console.log(error));
  }, []);

 
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout pages={pages}/>}>
        
          <Route
            path="/pages/:id"
            element={<Table data={data} loading={loading} />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
