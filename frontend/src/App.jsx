import React from 'react'
import { Routes, Route } from "react-router-dom"
import Create from "./page/Create" 
import Delete from "./page/Delete"
import Edit from "./page/Edit"
import Home from "./page/Home"
import Show from "./page/Show"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/book/create" element={<Create />} /> 
      <Route path="/book/detail/:id" element={<Show />} />
      <Route path="/book/edit/:id" element={<Edit />} />
      <Route path="/book/delete/:id" element={<Delete />} />
    </Routes>
  )
}

export default App