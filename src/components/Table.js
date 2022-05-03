import React from "react";
import { StyledTable } from "../styles/TableStyle";
import {useParams} from 'react-router-dom'
import { useState, useEffect } from "react";

export default function Table({data, loading}) {
    const { id } = useParams();
    

  const Hello = () => {
    if (loading===true) {
      return (
        <tr>
          <td></td>
          <td>Данные загружаются</td>
          <td>Данные загружаются</td>
        </tr>
      );
    }

    return data.slice((id-1)*10, id*10).map((item) => {
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
      <StyledTable>
        <thead>
          <tr>
            <td>ID</td>
            <td>Заголовок</td>
            <td>Описание</td>
          </tr>
        </thead>
        <tbody>
          <Hello />
        </tbody>
      </StyledTable>
    </>
  );
}
