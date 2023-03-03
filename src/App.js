import './App.css';
import React, { useState,useEffect } from 'react';
// import AdminHome from './user/adminhome/adminhome';
// import {Routes,Route, BrowserRouter} from 'react-router-dom';
import View from './user/adminhome/view/view';
function App() {
    const y=0;
    const [items,updated_items]=useState([]);
    useEffect(()=>{
      fetch('http://localhost:3002/api/v1/viewlist',{method:'GET',mode:'cors'})
      .then(Response => Response.json())
      .then(json=>{updated_items(json)});
      },[y])
      // console.log(items);
  return (
      <View
      items_list = {items}/>
      )
}

export default App;
