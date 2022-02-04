import React, { useState, useEffect } from 'react'
import { useLocation } from '@reach/router'

import { Navigation } from './Navigation'

import '../style.css'
import '../new-moon.css'
import '../light-theme.css'
import '../sepia-theme.css'

function setDarkTheme(setTheme) {
  localStorage.setItem('theme', 'dark')
  setTheme('dark')
  document.body.style.backgroundColor = '#252525'
}

function setLightTheme(setTheme) {
  localStorage.setItem('theme', 'light')
  setTheme('light')
  document.body.style.backgroundColor = 'white'
}

function setSepiaTheme(setTheme) {
  localStorage.setItem('theme', 'sepia')
  setTheme('sepia')
  document.body.style.backgroundColor = '#f1e2c0'
}

function getMainClass(theme, collapsed) {
  let classString = theme

  if (collapsed) {
    classString += ' collapsed'
  }

  return classString
}

export const Layout = ({ children }) => {
  const location = useLocation()
  const [theme, setTheme] = useState('dark')
  const [collapsed, setCollapsed] = useState(true)
  const slug = location.pathname

  const onUpdateTheme = (theme) => {
    if (theme === 'dark') {
      setSepiaTheme(setTheme)
    } else if (theme === 'light') {
      setDarkTheme(setTheme)
    } else if (theme === 'sepia') {
      setLightTheme(setTheme)
    }
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme === 'dark') setDarkTheme(setTheme)
    if (savedTheme === 'sepia') setSepiaTheme(setTheme)
    if (savedTheme === 'light') setLightTheme(setTheme)
  }, [])

  return (
    <div>
      <div className={getMainClass(theme, collapsed, slug)}>
        <Navigation
          setCollapsed={setCollapsed}
          onUpdateTheme={() => onUpdateTheme(theme)}
          theme={theme}
        />
        <main>{children}</main>
      </div>
    </div>
  )
}