import React, { useEffect, useState } from "react";
import Navbar from '../UHNavbar/UHNavbar';
import Footer from '../UHFooter/UHFooter';
import { useTheme } from "../UHContext/UHThemeContext";
import ChatBot from '../UHChatbot/UHChatbot';

// Hero images (update paths or use URLs)
import hero1 from "../Images/AboutUs1.jpg";
import hero2 from "../Images/AboutUs2.jpg";
import hero3 from "../Images/AboutUs3.jpg";
import hero4 from "../Images/AboutUs4.jpg";

// Team member images
import ceoImg from "../Images/ceoAboutUs.jpg";
import ctoImg from "../Images/CtoAboutUs.webp";
import pmImg from "../Images/projectManagerAboutUs.jpeg";

onst AboutUs = () => {
  const { darkMode } = useTheme();

  // Reveal on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting) {
            el.classList.add("opacity-100", "translate-y-0", "scale-100");
            el.classList.remove("opacity-0", "translate-y-10", "scale-95");
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
