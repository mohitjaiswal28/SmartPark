
import React from "react";
import Button from "../components/Button";
import Vector1 from "../assets/Vector/1.png";
import Vector2 from "../assets/Vector/2.png";
import Vector3 from "../assets/Vector/3.png";
import Footer from '../layouts/Footer';

export default function Home() {
  return (
    <section id="home">
      <img src={Vector1} alt="Vector1" className="Vector1" />
      <div className="container-fluid px-0">
        <div className="container">
          <div className="row mt-lg-4">
            <div className="col-lg-7 col-md-12">
              <h1 className="primary-text" style={{ marginTop: "3rem" }}>
                SmartPark: Where Parking Becomes Effortless and Driving Stress-Free
              </h1>
              <h3
                className="para-1 d-flex justify-content-center align-items-center"
                style={{ marginTop: "1rem" }}
              >
                Tired of the endless search for parking spots? SmartPark is here to change that. Our innovative platform provides real-time updates on available parking spaces, so you can find a spot quickly and get on with your day. Say goodbye to circling the block and hello to stress-free parking. With SmartPark, you can navigate the city with ease, knowing that parking is just a few taps away. Experience the convenience and peace of mind that comes with SmartPark!
              </h3>
              <a href="/login" className="mb-5">
                <Button label="Start" c="main-btn" type="start" />
              </a>
            </div>
            <div className="col-lg-5 col-md-12 d-flex justify-content-center align-items-center Graphics-1">
              <img
                src="https://img.freepik.com/free-photo/top-view-electric-cars-parking-lot_23-2148972403.jpg?size=626&ext=jpg&ga=GA1.1.1269040533.1710288000&semt=ais"
                alt="Graphical-1"
                height="300px"
                style={{ borderRadius: '1rem' }}
              />
            </div>
          </div>

          <img src={Vector3} alt="Vector3" className="Vector3" />
          <img src={Vector2} alt="Vector2" className="Vector2" />

        </div>
      </div>
      <Footer />
    </section>
  );
}
