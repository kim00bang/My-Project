import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Book from './Book'
import Local from './Local'
import Music from './Music'
import HomeBook from './HomeBook'

const RouterPage = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/book" element={<Book/>}/>
            <Route path='/local' element={<Local/>}/>
            <Route path='/music' element={<Music/>}/>
            <Route path='/book/list' element={<HomeBook/>}/>
        </Routes>
    );
}

export default RouterPage;