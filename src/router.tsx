import type React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import GamesCatalogPage from "./pages/games";
import Header from "./components/Header";
import GamePage from "./pages/games/components/GamePage";
import Footer from "./components/Footer";

const Router: React.FC = () => {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/games" element={<GamesCatalogPage />} />
                <Route path="/games/:id" element={<GamePage />}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Router