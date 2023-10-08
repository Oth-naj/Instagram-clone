import { Avatar } from '@mui/material'
import React from 'react'
import { FiMoreHorizontal } from 'react-icons/fi'
import { BsHeart } from 'react-icons/bs'
import { BsChat } from 'react-icons/bs'
import { BsSend } from 'react-icons/bs'
import { BsBookmark } from 'react-icons/bs'
import { BsEmojiSmile } from 'react-icons/bs'


export default function posts({user, image, comment}) {
    return (
        <div className='post border rounded mt-3'>
            <div className="post_header d-flex justify-content-between align-items-center my-1">
                <div className="post_header_side d-flex align-items-center">
                    <Avatar alt='imgname' src={image}/>
                    <h6 className='mx-2'> {user} </h6>
                </div>
                <i className='more_icon fs-5 px-3'> <FiMoreHorizontal /> </i>
            </div>
            <div className="post_image">
                <img className='w-100' src={image} alt="" />
            </div>
            <div className="post_footer d-flex justify-content-between align-items-center mb-3">
                <div className="footer_icons_left d-flex">
                    <i className='footer_icons fs-5'><BsHeart /></i>
                    <i className='footer_icons px-3 fs-5'><BsChat /></i>
                    <i className='footer_icons fs-5'><BsSend /></i>
                </div>
                    <i className='footer_icons px-3 fs-5'><BsBookmark /></i>
            </div>
            <h5> 17k Likes</h5>
            <h6>{user} <span className='text-body-tertiary'>{comment}</span></h6>
            <p className='text-body-tertiary'>Ver todos os 90 comentários <br />
                            Há 3 horas
            </p>

            <div className="post_footer_bottom d-flex justify-content-between align-items-center">
                <i className='footer_icons'><BsEmojiSmile /></i>
                <input className='border-0' type="text" placeholder='write something here' />
                <a className="btn text-primary" role="button" data-bs-toggle="button">Publish</a>
            </div>
        </div>
    )
}
