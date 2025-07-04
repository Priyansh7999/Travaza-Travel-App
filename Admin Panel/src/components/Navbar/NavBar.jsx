import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { GoHome } from "react-icons/go";
import { FaCity } from "react-icons/fa";
import { GrAttraction } from "react-icons/gr";
import { LuPackageSearch } from "react-icons/lu";
import Calendar from 'react-calendar'
export default function Navbar() {
  const location = useLocation();  
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState('');

  useEffect(() => {
    const path = location.pathname.split('/')[1]; 
    if (path) {
      setActiveButton(path.charAt(0).toUpperCase() + path.slice(1)); 
    }
  }, [location]);

 
  const handleButtonClick = (label) => {
    setActiveButton(label);
    navigate(`/${label}`); 
  };
  const options=[
    {
      label: 'Home',
      path: '/Home',
      icon: <GoHome />,
    },
    {
      label: 'Cities',
      path: '/Cities',
      icon: <FaCity />,
    },
    {
      label: 'Attraction',
      path: '/Attraction',
      icon: <GrAttraction />,
    },
    {
      label: 'Packages',
      path: '/Packages',
      icon: <LuPackageSearch />,
    }

  ];
    const [value, setValue] = useState(new Date());


  return (
    <div className={styles.nav}>
      <div className={styles.logo} onClick={() => navigate('/Home')} >
        <h1><img width={30} src="https://codervent.com/maxton/demo/horizontal-menu/assets/images/logo-icon.png" alt="" />Travazo</h1>
        <p>Admin Panel</p>
      </div>
      <div className={styles.buttons}>
        {
          options.map((option,index) => (
            <button
            key={index}
            className={activeButton === option.label ? styles.activeButton : ''}
            onClick={() => handleButtonClick(option.label)}
          >
              {option.icon}
              {option.label}
            </button>
          ))
        }
      </div>
       <div className={styles.calendarContainer}>
      <Calendar
        className={styles.calendar}
        activeStartDate={value}
        onChange={setValue}
        value={value}
        tileClassName={({ date, view }) =>
          date.toDateString() === new Date().toDateString() ? styles.todayTile : null
        }
      />
    </div>
    </div>
  );
}
