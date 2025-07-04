import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';

export default function Home() {
    const [counts, setCounts] = useState({});

    useEffect(() => {
        const fetchCounts = async () => {
            try {
                const res = await fetch('http://localhost:5000/dashboard-counts');
                const data = await res.json();
                setCounts(data);
            } catch (err) {
                console.error('Failed to fetch dashboard counts', err);
            }
        };
        fetchCounts();
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <h2 className={styles.title}>Hello, Priyansh</h2>
                <p className={styles.subtitle}> Welcome to the Trip Planner Admin Panel 🚀</p>
            </div>
            <div className={styles.container}>
                <div className={styles.cards}>
                    <p>Total Users</p>
                    <h2>{counts.totalUsers}</h2>
                </div>
                <div className={styles.cards}>
                    <p>Total Cities</p>
                    <h2>{counts.totalCities}</h2>
                </div>
                <div className={styles.cards}>
                    <p>Total Places</p>
                    <h2>{counts.totalPlaces}</h2>
                </div>
            </div>
        </div>
    );
}
