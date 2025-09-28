import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

// ----------------- Scroll -----------------
import ScrollToTop from "./Components/UserHome/ScrollToTop/ScrollToTop.jsx";


// ----------------- Context Providers -----------------
import { AuthProvider } from "./Components/UserHome/UHContext/UHAuthContext.jsx";
import { CartProvider } from "./Components/UserHome/UHContext/UHCartContext.jsx";
import { ThemeProvider as UserThemeProvider } from "./Components/UserHome/UHContext/UHThemeContext.jsx";
import { LanguageProvider } from "./Components/AnimalManagement/contexts/LanguageContext.js";
import { LoaderProvider } from "./Components/AnimalManagement/contexts/LoaderContext.js";
import { ThemeProvider as AnimalThemeProvider } from "./Components/AnimalManagement/contexts/ThemeContext.js";
import { UserProvider } from "./Components/AnimalManagement/contexts/UserContext.js";
import { IThemeProvider } from "./Components/InventoryManagement/Icontexts/IThemeContext.jsx";
import { IThemeProvider } from "./Components/InventoryManagement/Icontexts/IThemeContext.jsx";
import { ThemeProvider as PThemeProvider } from "./Components/PlantManagement/context/ThemeContext.jsx";
import { LanguageProvider as PLanguageProvider } from "./Components/PlantManagement/context/LanguageContext.jsx";





































