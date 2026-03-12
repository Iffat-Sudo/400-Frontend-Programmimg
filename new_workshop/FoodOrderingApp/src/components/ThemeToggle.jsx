import React from 'react';

function ThemeToggle({toggleTheme}) {
    return (
       
            <button className="btn btn-secondary mb-3" 
            onClick={toggleTheme}>
                Toggle Theme
            </button>
       
    );
};

export default ThemeToggle;