import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PakingButton from '../components/Parking/PakingButton';
import Vector1 from "../assets/Vector/1.png";
import parkingData from "../pages/parkingdata.json";

const LiveDemo = () => {
  const [parkingDetails, setParkingDetails] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setParkingDetails(parkingData);
  }, []);

  const filteredParkingDetails = parkingDetails.filter(parking =>
    parking.parkingname.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id='home'>
      <img src={Vector1} alt="Vector1" className="Vector1" />
      <h1 className='d-flex justify-content-center'>Search Parking here</h1>
      <div className='d-flex justify-content-center align-items-center m-5'>
        <input
          type="search"
          name=""
          id=""
          className='h-25 rounded-3 w-50 fs-6'
          placeholder="Search parking name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className='d-flex justify-content-center align-items-center m-lg-5'>
        {filteredParkingDetails.length > 0 ? (
          <table className='custom-table' style={{ backgroundColor: '#C5EBAA', border: '1px solid #c0f1e6' }}>
            <thead>
              <tr>
                <th>Parking Details</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
              {filteredParkingDetails.map((parking, index) => (
                <tr key={index}>
                  <td>
                    <PakingButton
                      parkingname={parking.parkingname}
                      totalslot={parking.totalslot}
                      totalfloor={parking.totalfloor}
                      parkingtime={parking.parkingtime}
                    />
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <Link to={parking.id}>
                      <button className='btn btn-primary'>View</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No parking found.</p>
        )}
      </div>
    </section>
  );
};

export default LiveDemo;
