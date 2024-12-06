
import React from 'react'

const PakingButton = ({ parkingname, totalslot, totalfloor, parkingtime }) => {
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <div className='d-flex flex-column justify-content-center align-items-start m-lg-5 px-4 border border-primary rounded-3 w-50' style={{ backgroundColor: '#E9FFFA', lineHeight: '3rem' }}>
        <div className='py-3'>
          <div>Parking Name: {parkingname}</div>
          <div>Total Slots Available: {totalslot}</div>
          <div>Total Floors: {totalfloor}</div>
          <div>Parking will be filled in: {parkingtime}</div>
        </div>
      </div>
    </div>
  )
}

export default PakingButton
