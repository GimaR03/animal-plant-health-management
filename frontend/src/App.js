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