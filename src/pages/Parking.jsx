import React, { useEffect, useState } from 'react';
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import { FaCar, FaParking } from 'react-icons/fa';

const firebaseConfig = {
  apiKey: "AIzaSyB-XBJGt6OMVkQMOTYT-rvIc_j070SFDD8",
  authDomain: "majorproject2003.firebaseapp.com",
  databaseURL: "https://majorproject2003-default-rtdb.firebaseio.com",
  projectId: "majorproject2003",
  storageBucket: "majorproject2003.appspot.com",
  messagingSenderId: "738436191358",
  appId: "1:738436191358:web:c8b43c55f247dbb169b42f",
  measurementId: "G-JB2096D1LF"
};

const app = initializeApp(firebaseConfig);

const Parking = () => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const database = getDatabase(app);
    const dataRef = ref(database, '/');

    onValue(dataRef, (snapshot) => {
      const data = [];
      snapshot.forEach((childSnapshot) => {
        data.push(childSnapshot.val());
      });
      setDataList(data);
    });
  }, []);

  const styles = {
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6, 1fr)', // 6 cards per row
      gap: '20px',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh',
    },
    card: (status) => ({
      height: '200px', // Fixed height
      padding: '20px',
      backgroundColor: status === 'Car Space Occupied' ? '#FF4C4C' : '#4CAF50',
      color: 'white',
      textAlign: 'center',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      transform: 'scale(1)',
      transition: 'all 0.3s ease',
      marginTop: '250px',
    }),
    cardHover: {
      transform: 'scale(1.05)',
      boxShadow: '0 8px 12px rgba(0, 0, 0, 0.2)',
    },
    icon: {
      fontSize: '3rem',
      animation: 'bounce 1s infinite alternate',
    },
    text: {
      marginTop: '10px',
      fontSize: '1.2rem',
      fontWeight: 'bold',
    },
    keyframes: `
      @keyframes bounce {
        from {
          transform: translateY(0);
        }
        to {
          transform: translateY(-10px);
        }
      }
    `,
  };

  useEffect(() => {
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(styles.keyframes, styleSheet.cssRules.length);
  }, []);

  return (
    <section id="home" style={styles.container}>
      {dataList.map((item, index) => (
        <div>
          <div
            key={index}
            style={styles.card(item)}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = styles.cardHover.transform;
              e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = styles.card(item).transform;
              e.currentTarget.style.boxShadow = styles.card(item).boxShadow;
            }}
          >
            <div>
              {item === 'Car Space Occupied' ? (
                <FaCar style={styles.icon} />
              ) : (
                <FaParking style={styles.icon} />
              )}
            </div>
            <span>{item}</span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Parking;
