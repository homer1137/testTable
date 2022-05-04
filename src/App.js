import Table from "./components/Table";
import { Routes, Route, useNavigate } from "react-router-dom";
import Layout from "./components/layout";
import { useEffect, useState } from "react";
import { fetchPosts } from "./store/postSlice";
import { useDispatch } from "react-redux";


function App() {
  
  
  const dispatch = useDispatch()
  
  
  const navigate = useNavigate();
const goFirstPage = () => navigate('/pages/1') 

// Запрос данных. 
  useEffect(() => {
    dispatch(fetchPosts());
    goFirstPage();
  }, []);


  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
        
          <Route
            path="/pages/:id"
            element={<Table />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
