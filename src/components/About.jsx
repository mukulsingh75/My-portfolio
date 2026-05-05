import React, { useEffect } from 'react'
import { AiOutlineCloudDownload } from 'react-icons/ai'
import AOS from 'aos'
import 'aos/dist/aos.css'
import resume from '../assets/mukulresume.pdf'

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    return (
        <div name="about" className="w-full h-auto bg-gradient-to-b from-gray-800 to-black text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-auto">
                <div className="pb-8">
                    <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">
                        About
                    </h2>
                </div>

                <p
                    data-aos="slide-up"
                    data-aos-duration="500"
                    className="text-xl mt-5"
                >
                    I'm a Backend-focused Full Stack Developer with 2+ years of experience building
                    scalable, production-grade web applications. Currently at{' '}
                    <span className="font-semibold text-cyan-400">EitBiz Technologies</span>, I design
                    high-performance RESTful APIs and cloud infrastructure using Node.js, Express,
                    PostgreSQL, Redis, and AWS.
                </p>

                <p
                    data-aos="slide-up"
                    data-aos-duration="500"
                    className="text-xl mt-5"
                >
                    My core strength lies in architecting complex backend systems — optimizing database
                    performance with PostGIS geospatial queries and advanced indexing, and building
                    real-time communication layers with Socket.IO and Redis. I care about clean code,
                    thoughtful API design, and shipping products that scale.
                </p>

                <p
                    data-aos="slide-up"
                    data-aos-duration="500"
                    className="text-xl mt-5"
                >
                    Some of the platforms I've built include{' '}
                    <span className="font-semibold text-cyan-400">Zembora</span>, a ride & rescue
                    platform with live location tracking, and{' '}
                    <span className="font-semibold text-cyan-400">Munch Market</span>, an Airbnb-style
                    food marketplace — both involving dual-role user systems, real-time chat, and push
                    notifications. I enjoy taking products end-to-end, from API design to a polished
                    frontend experience.
                </p>

                <a
                    href={resume}
                    download
                    data-aos="zoom-in"
                    data-aos-duration="500"
                    className="mb-20 mt-10 mx-auto flex items-center justify-center gap-2 rounded
                bg-gradient-to-b from-cyan-500 to-blue-500 hover:scale-105 duration-300
                w-2/4 md:w-1/5 lg:w-1/5 h-10 cursor-pointer font-medium"
                >
                    <AiOutlineCloudDownload size={20} />
                    Download CV
                </a>
            </div>
        </div >
    )
}

export default About