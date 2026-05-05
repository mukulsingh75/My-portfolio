import React, { useEffect } from 'react'
import html from '../assets/experience/html.png'
import css from '../assets/experience/css.png'
import javascript from '../assets/experience/javascript.png'
import node from '../assets/experience/node.png'
import github from '../assets/experience/github.png'
import react from '../assets/experience/react.png'
import tailwind from '../assets/experience/tailwind.png'
import postgres from '../assets/experience/pgsql.webp'
import redis from '../assets/experience/redis.png'
import aws from '../assets/experience/aws.jpeg'
import express from '../assets/experience/expressjs.png'
import socketio from '../assets/experience/socket.png'
import typescript from '../assets/experience/ts.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Experience = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    const skillGroups = [
        {
            category: 'Backend',
            items: [
                { id: 1, scr: node, title: 'Node.js', style: 'shadow-green-500' },
                { id: 2, scr: express, title: 'Express.js', style: 'shadow-gray-400' },
                { id: 3, scr: socketio, title: 'Socket.IO', style: 'shadow-white' },
            ],
        },
        {
            category: 'Databases & Cloud',
            items: [
                { id: 4, scr: postgres, title: 'PostgreSQL', style: 'shadow-blue-400' },
                { id: 5, scr: redis, title: 'Redis', style: 'shadow-red-500' },
                { id: 6, scr: aws, title: 'AWS', style: 'shadow-orange-400' },
            ],
        },
        {
            category: 'Frontend',
            items: [
                { id: 7, scr: react, title: 'React', style: 'shadow-blue-600' },
                { id: 8, scr: javascript, title: 'JavaScript', style: 'shadow-yellow-500' },
                { id: 9, scr: typescript, title: 'TypeScript', style: 'shadow-blue-500' },
                { id: 10, scr: tailwind, title: 'Tailwind', style: 'shadow-sky-500' },
                { id: 11, scr: html, title: 'HTML', style: 'shadow-orange-500' },
                { id: 12, scr: css, title: 'CSS', style: 'shadow-blue-500' },
            ],
        },
        {
            category: 'Tools',
            items: [
                { id: 13, scr: github, title: 'Git & GitHub', style: 'shadow-red-800' },
            ],
        },
    ]

    return (
        <div name="skills" className="bg-gradient-to-b from-gray-800 to-black text-white w-full min-h-screen">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-400">Skills</p>
                    <p className="py-6">
                        These are the technologies I work with day-to-day to build scalable, production-grade applications.
                    </p>
                </div>

                {skillGroups.map(({ category, items }) => (
                    <div key={category} className="mb-10">
                        <h3
                            data-aos="fade-right"
                            data-aos-duration="500"
                            className="text-2xl font-semibold text-cyan-400 mb-6"
                        >
                            {category}
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 px-12 sm:px-0 text-center">
                            {items.map(({ id, scr, title, style }) => (
                                <div
                                    data-aos="zoom-in"
                                    data-aos-duration="500"
                                    key={id}
                                    className={`shadow-md hover:scale-105 duration-500 py-4 rounded-lg ${style}`}
                                >
                                    <img src={scr} alt={title} className="w-20 mx-auto" />
                                    <p className="mt-4">{title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience