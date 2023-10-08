import { Avatar } from '@mui/material'
import React from 'react'
import '../styling/Right.css'



export default function Right() {


  return (

    <div className="suggestions mb-5">


      <div className="suggestion_name d-flex justify-content-between align-items-center mb-5">
        <div className="suggestion_left d-flex justify-content-between align-items-center">
          <span className='avatar'>
            <Avatar>JD</Avatar>
          </span>
          <div className="suggestions_info ms-2">
            <span className='username fw-bold'>John_Dow </span> <br />
            <span className='relation'>New to instagram</span>
          </div>
        </div>
        <button className='follow_btn btn border-none text-primary'>Confirm</button>
      </div>

      <div className="suggested_for_you d-flex justify-content-between align-items-center mb-3">
        <div className="left_side">
          <h5>Suggested For You</h5>
        </div>
        <div className="right_side">
          <h6>Show All</h6>
        </div>
      </div>

      <div className="suggestion_name d-flex justify-content-between align-items-center mb-3">
        <div className="suggestion_left d-flex justify-content-between align-items-center">
          <span className='avatar'>
            <Avatar>MZ</Avatar>
          </span>
          <div className="suggestions_info ms-2">
            <span className='username fw-bold'>Mark_Zukrberg </span> <br />
            <span className='relation'>New to instagram...</span>
          </div>
        </div>
        <button className='follow_btn btn border-none text-primary'>Follow</button>
      </div>

      <div className="suggestion_name d-flex justify-content-between align-items-center mb-3">
        <div className="suggestion_left d-flex justify-content-between align-items-center">
          <span className='avatar'>
            <Avatar>EM</Avatar>
          </span>
          <div className="suggestions_info ms-2">
            <span className='username fw-bold'>Elon_Musk </span> <br />
            <span className='relation'>New to instagram...</span>
          </div>
        </div>
        <button className='follow_btn btn border-none text-primary'>Follow</button>
      </div>

      <div className="suggestion_name d-flex justify-content-between align-items-center mb-3">
        <div className="suggestion_left d-flex justify-content-between align-items-center">
          <span className='avatar'>
            <Avatar>KB</Avatar>
          </span>
          <div className="suggestions_info ms-2">
            <span className='username fw-bold'>King_Bash </span> <br />
            <span className='relation'>New to instagram...</span>
          </div>
        </div>
        <button className='follow_btn btn border-none text-primary'>Follow</button>
      </div>

      <div className="suggestion_name d-flex justify-content-between align-items-center mb-3">
        <div className="suggestion_left d-flex justify-content-between align-items-center">
          <span className='avatar'>
            <Avatar>MC</Avatar>
          </span>
          <div className="suggestions_info ms-2">
            <span className='username fw-bold'>Mohamed_Chaoura </span> <br />
            <span className='relation'>New to instagram...</span>
          </div>
        </div>
        <button className='follow_btn btn border-none text-primary'>Follow</button>
      </div>

      <div className="suggestion_name d-flex justify-content-between align-items-center mb-3">
        <div className="suggestion_left d-flex justify-content-between align-items-center">
          <span className='avatar'>
            <Avatar>D</Avatar>
          </span>
          <div className="suggestions_info ms-2">
            <span className='username fw-bold'>Draganov_ </span><br />
            <span className='relation'>New to instagram...</span>
          </div>
        </div>
        <button className='follow_btn btn border-none text-primary'>Follow</button>
      </div>
    </div>
  )
}
