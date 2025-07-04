import React from 'react'
import NavBar from './components/Navbar/NavBar'
import styles from './App.module.css'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <div className={styles.leftContainer}>
        <NavBar />
      </div>
      <div className={styles.rightContainer}>
        <Outlet />
      </div>
    </>
  )
}
