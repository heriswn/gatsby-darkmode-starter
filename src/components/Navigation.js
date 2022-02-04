import React from 'react'

import moon from '../images/moon.png'

export const Navigation = ({ onUpdateTheme, theme }) => {
  return (
    <header className="navigation">
      <div className="toolbar">
        <button onClick={onUpdateTheme} className="theme-switcher">
          <img src={moon} alt="Theme" />
          <span className="desktop-only">
            {theme === 'dark' && 'Dark'}
            {theme === 'light' && 'Light'}
            {theme === 'sepia' && 'Sepia'}
          </span>
        </button>
      </div>
    </header>
  )
}
