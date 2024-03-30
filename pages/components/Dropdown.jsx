'use client'

import { useState } from 'react'
import BicolorCircle from './BicolorCircle'
import { THEME } from '../common/constants'
import { setTheme } from '../common/utils'

function Dropdown({ className = '' }) {
  const [dropdownVisible, setDropdownVisible] =
    useState(false)

  return (
    <div
      className={`flex flex-col z-1 ${className}`}
      tabIndex={0}
      onBlur={() => setDropdownVisible(false)}
    >
      <BicolorCircle
        from="brand-2"
        to="brand-1"
        className={dropdownVisible ? 'rotate-180' : ''}
        onClick={() => setDropdownVisible((prev) => !prev)}
      />
      {dropdownVisible && (
        <ul>
          <DropdownItem value="theme0" />
          <DropdownItem value="theme1" />
          <DropdownItem value="theme2" />
          <DropdownItem value="theme3" />
          <DropdownItem value="theme4" />
          <DropdownItem value="theme5" />
          <DropdownItem value="theme6" />
          <DropdownItem value="theme7" />
          <DropdownItem value="theme8" />
          <DropdownItem value="theme9" />
        </ul>
      )}
    </div>
  )
}

function DropdownItem({ value }) {
  const handleThemeChange = (newTheme) => {
    setTheme(newTheme)
    if (process.env === 'production') {
      document.cookie = `--yulei-theme=${newTheme}; domain=yulei.monster;`
    } else {
      document.cookie = `--yulei-theme=${newTheme};`
    }
  }

  return (
    <BicolorCircle
      from={THEME[value].brand2}
      to={THEME[value].brand1}
      onClick={() => handleThemeChange(value)}
    />
  )
}

export default Dropdown
