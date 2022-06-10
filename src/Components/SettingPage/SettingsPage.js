import React from 'react'
import Footer from '../Footer'
import SettingsLeft from './SettingsLeft'
import './SettingsPageCSS/SettingsPage.css'
import SettingsRight from './SettingsRight'

const SettingsPage = () => {
  return (
    <div className='settingspage'>
    <div style={{ display: "flex", flexDirection: "row", alignItems: "flexStart", flexFlow: "flow", minHeight: "695px", }}>
      <SettingsLeft/>
      <SettingsRight/>
    </div>

    </div>
  )
}

export default SettingsPage