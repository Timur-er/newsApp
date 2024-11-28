import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NewsList from "../pages/NewsList";
import ArticlePage from "../pages/ArticlePage";

const AppRoutes: React.FC = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:category" element={<NewsList />} />
            <Route path="/article/:id" element={<ArticlePage />} />
        </Routes>
    </BrowserRouter>
);

export default AppRoutes;
