import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../Pages'
import Hedaer from '../Componenets/Hedaer'

const Router = () => {
    return (
        <BrowserRouter>
            <Hedaer />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router