import React, { useState } from 'react'
import '../styling/Left.css'
import Posts from './posts/Posts'
import Slider from 'react-slick'

import Img1 from '../images/stories/1.jpeg'
import Img2 from '../images/stories/2.jpg'
import Img3 from '../images/stories/3.jpg'
import Img4 from '../images/stories/4.jpg'
import Img5 from '../images/stories/5.jpeg'
import Img6 from '../images/stories/6.jpeg'
import Img7 from '../images/stories/7.jpg'
import Img8 from '../images/stories/8.jpg'

import Feed1 from '../images/feeds/feed1.jpg'
import Feed2 from '../images/feeds/feed2.jpg'
import Feed3 from '../images/feeds/feed3.jpg'
import Feed4 from '../images/feeds/feed4.jpg'
import Feed5 from '../images/feeds/feed5.jpg'

export default function Left() {
    const stories = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
    };
    let users = [
        {
            image: Img1,
            title: "user.1"
        },
        {
            image: Img2,
            title: "user.2"
        },
        {
            image: Img3,
            title: "user.3"
        },
        {
            image: Img4,
            title: "user.4"
        },
        {
            image: Img5,
            title: "user.5"
        },
        {
            image: Img6,
            title: "user.6"
        },
        {
            image: Img7,
            title: "user.7"
        },
        {
            image: Img8,
            title: "user.8"
        }
    ]

    const [posts, setPosts] = useState([
        {
            user: "Chaimaa",
            image: Feed1,
            likes: 456,
            comment: "this is the first comment"
        },
        {
            user: "Abdelaziz",
            image: Feed2,
            likes: 789,
            comment: "this is the second comment"
        },
        {
            user: "Carlos",
            image: Feed3,
            likes: 321,
            comment: "this is the third comment"
        },
        {
            user: "Mohamed",
            image: Feed4,
            likes: 654,
            comment: "this is the fourth comment"
        },
        {
            user: "Othman",
            image: Feed5,
            likes: 987,
            comment: "this is the last comment"
        }
    ])
    return <div className='container'>
        <div className="row border rounded">
            <Slider {...stories}>

                {
                    users.map((item, key) => {
                        return <div className="col-md-4 border-0 p-3" key={key}>
                            <div className="card border-0 cursor-pointer">
                                <div className="card-img-top ">
                                    <img className='w-100 rounded-circle border ' src={item.image} />
                                    <h6>{item.title}</h6>
                                </div>

                            </div>
                        </div>
                    })
                }
            </Slider>
        </div>
        <div className="row mt-3">
            {
                posts.map(post => (
                    <Posts
                        user={post.user}
                        image={post.image}
                        like={post.likes}
                        comment={post.comment}
                    />
                ))
            }
        </div>
    </div>
}

