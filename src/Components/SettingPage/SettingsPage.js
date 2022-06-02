import React from 'react'
import Footer from '../Footer'
import SettingsLeft from './SettingsLeft'
import './SettingsPageCSS/SettingsPage.css'
import SettingsRight from './SettingsRight'

const SettingsPage = () => {
  return (
    <div>
    <div style={{ display: "flex", flexDirection: "row", alignItems: "flexStart", flexFlow: "flow", minHeight: "695px" }}>
      <SettingsLeft/>
      <SettingsRight/>
    </div>
    <Footer/>

    </div>
  )
}

export default SettingsPage