import { useState } from "react";

const Mood = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    if (isDarkMode) {
        document.querySelector("body").setAttribute("data-theme", "dark");
    } else {
        document.querySelector("body").setAttribute("data-theme", "light");
    }

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div>
            <div className={`${isDarkMode ? 'dark' : ''} flex justify-center`}>
                <button
                    onClick={toggleTheme}
                    className="font-bold bg-slate-200 rounded px-3 py-2 shadow-xl"
                >
                    {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
            </div>
        </div>
    );
};

export default Mood;