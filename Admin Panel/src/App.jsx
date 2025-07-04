import React, { useState } from 'react'
import styles from './App.module.css'
import NavBar from './components/Navbar/NavBar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './layout';
import Home from './components/Home/Home';
import Attraction from './components/Attractions/Attraction';
export default function App() {
  const [type, setType] = useState(null);
  return (
    <Router>
      <div className={styles.backgroundElements}>
              <div className={`${styles.floatingElement} ${styles.element1}`}></div>
              <div className={`${styles.floatingElement} ${styles.element2}`}></div>
              <div className={`${styles.floatingElement} ${styles.element3}`}></div>
            </div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="*" element={<h1>404 Not Found</h1>} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Attraction' element={<Attraction />} />
        </Route>
      </Routes>
    </Router>
  )
}
