"use client";

import { useEffect, useState } from "react";

export default function DarkModeToggle() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const root = document.documentElement;
        const storedTheme = localStorage.getItem("theme");

        if (storedTheme === "dark" || (!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
            root.classList.add("dark");
            setIsDark(true);
        } else {
            root.classList.remove("dark");
            setIsDark(false);
        }
    }, []);

    const toggleTheme = () => {
        const root = document.documentElement;

        if (isDark) {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDark(false);
        } else {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDark(true);
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className="text-sm px-3 py-1 rounded border hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
            {isDark ? "☀️ Modo claro" : "🌙 Modo oscuro"}
        </button>
    );
}
