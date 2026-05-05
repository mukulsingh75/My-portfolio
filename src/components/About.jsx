import React, { useEffect } from 'react'
import { AiOutlineCloudDownload } from 'react-icons/ai'
import '../App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import resume from '../assets/mukulresume.pdf'


const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    })

    return (
        <div name="about" className='w-full h-auto bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-auto'>
                <div className='pb-8'>

                    <h2 className='text-4xl  font-bold inline border-b-4 border-gray-500'>About</h2>

                </div>

                <p data-aos="slide-up" data-aos-duration="500" className='text-xl mt-5 ease-in fade-in'>
                    I'm a Backend-Focused Full Stack Developer with 2+ years of professional experience building scalable, production-grade web applications. Currently at EitBiz Technologies, I architect high-performance RESTful APIs and cloud infrastructure using Node.js, Express.js, PostgreSQL, Redis, and AWS.

                    I began my journey as a B.Tech Computer Science & Engineering student at Ambalika Institute of Engineering and Technology in 2021. Throughout my academic career, I fearlessly ventured into various fields, including Java programming, web development, React, Firebase,  freelancing, and entrepreneurship. This diverse exploration helped me develop a comprehensive understanding of the full technology stack.
                </p>
                <br />
                <p data-aos="slide-up" data-aos-duration="500" className='text-xl mt-5 ease-in fade-in'>
                    My expertise lies in designing complex backend architectures, optimizing database performance with PostGIS geospatial queries and advanced indexing strategies, and implementing real-time communication systems using Socket.IO and Redis. I've successfully built platforms like Zembora (a ride & rescue platform with live tracking) and Munch Market (an Airbnb-style food marketplace), handling everything from dual-role user systems to real-time chat and push notifications.

                    I focus on shipping clean, scalable products end-to-end — from designing APIs to crafting responsive interfaces — while keeping pace with the latest trends and tools in the field.

                </p>
                <br />
                <p data-aos="fade-in" data-aos-duration="500" className='text-xl mt-5 ease-in  fade-in'>
                    When I'm not coding, I'm exploring new technologies, contributing to open-source projects, or working on innovative side projects that solve real-world problems.
                </p>
                <div data-aos="zoom-in" data-aos-duration="500" className='mb-20 fade-in flex mx-auto items-center justify-center hover:scale-105 duration-300 rounded bg-gradient-to-b from-cyan-500 to-blue-500 lg:w-1/5 md:w-1/5 w-2/4 h-10 text-center cursor-pointer mt-10 gap-2'>


                    <AiOutlineCloudDownload />
                    <a href={resume} download>Download CV</a>
                </div>
            </div>
        </div>
    )
}

export default About