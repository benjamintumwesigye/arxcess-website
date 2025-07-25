import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { motion } from "framer-motion";

const cardMotion = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 2.7, ease: "easeOut" },
    viewport: { once: true, amount: 0.2 }
};

const TechStack = () => {
    return (
        <section
            className="min-h-screen bg-gradient-to-b to-black p-8 relative overflow-hidden"
            style={{ 
                backgroundImage: 'url(/hero-5.webp), linear-gradient(to bottom, #270b3d, #000)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'overlay'
            }}
        >
            {/* More concentrated, intense radial purple glow overlay */}
            <div className="pointer-events-none absolute left-1/2 top-0 z-0 h-[350px] w-[500px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-400/70 via-purple-700/10 to-transparent"></div>
            {/* Subtle star/dot background */}
            <div className="pointer-events-none absolute inset-0 z-0 bg-[url('/stars.svg')] opacity-40"></div>
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <h1 className="text-5xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-purple-400 drop-shadow-[0_2px_24px_rgba(168,85,247,0.5)] text-left">
                    Fueling your progress with <br /> leading edge technology
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
                    {/* Backend Card */}
                    <motion.div {...cardMotion}>
                        <Card className="bg-blue-900/40 backdrop-blur-xl border border-blue-500/40 text-white rounded-2xl shadow-lg">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <span className="text-2xl">⚙️</span> Backend
                                </CardTitle>
                                <CardDescription className="text-gray-300">
                                    Specializes in delivering robust and scalable backend solutions tailored to your business needs.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex gap-2">
                                    <span className="px-3 py-1 rounded-full bg-gray-800/80 border border-gray-400 text-white text-sm font-semibold flex items-center gap-1">
                                        {/* <svg width="16" height="16" fill="currentColor" className="inline-block"><circle cx="8" cy="8" r="8" fill="red" /></svg> */}
                                        <img width={16} height={16} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
                                        Java
                                    </span>
                                    <span className="px-3 py-1 rounded-full bg-gray-800/80 border border-gray-400 text-white text-sm font-semibold flex items-center gap-1">
                                        <img width={16} height={16} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/quarkus/quarkus-original.svg" />
                                        Quarkus
                                    </span>
                                    <span className="px-3 py-1 rounded-full bg-blue-700/80 border border-blue-300 text-white text-sm font-semibold flex items-center gap-1">
                                        <img width={16} height={16} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
                                        Python
                                    </span>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Frontend Card */}
                    <motion.div {...cardMotion}>
                        <Card className="bg-purple-900/40 backdrop-blur-xl border border-purple-500/40 text-white rounded-2xl shadow-lg">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <span className="text-2xl">🎨</span> Frontend
                                </CardTitle>
                                <CardDescription className="text-gray-300">
                                    Provides high-quality frontend development services that focus on creating fast, responsive, and user-friendly interfaces.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex gap-2 flex-wrap">
                                    <span className="px-3 py-1 rounded-full bg-gray-800/80 border border-gray-400 text-white text-sm font-semibold flex items-center gap-1">
                                        <img width={16} height={16} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
                                        TypeScript
                                    </span>
                                    <span className="px-3 py-1 rounded-full bg-gray-800/80 border border-gray-400 text-white text-sm font-semibold flex items-center gap-1">
                                        <img width={16} height={16} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" />
                                        Angular
                                    </span>
                                    <span className="px-3 py-1 rounded-full bg-blue-700/80 border border-blue-300 text-white text-sm font-semibold flex items-center gap-1">
                                        <img width={16} height={16} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                                        React
                                    </span>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Mobile Card */}
                    <motion.div {...cardMotion}>
                        <Card className="bg-yellow-900/40 backdrop-blur-xl border border-yellow-600/40 text-white rounded-2xl shadow-lg">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <span className="text-2xl">📱</span> Mobile
                                </CardTitle>
                                <CardDescription className="text-gray-300">
                                    Offers expert mobile app development services for both iOS and Android platforms.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex gap-2 flex-wrap">
                                    <span className="px-3 py-1 rounded-full bg-blue-700/80 border border-blue-300 text-white text-sm font-semibold flex items-center gap-1">
                                        <img width={16} height={16} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg" />
                                        Android
                                    </span>
                                    <span className="px-3 py-1 rounded-full bg-orange-700/80 border border-orange-300 text-white text-sm font-semibold flex items-center gap-1">
                                        <img width={16} height={16} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" />
                                        Flutter
                                    </span>
                                    <span className="px-3 py-1 rounded-full bg-yellow-700/80 border border-yellow-300 text-white text-sm font-semibold flex items-center gap-1">
                                        <img width={16} height={16} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" /> React Native
                                    </span>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-6 gap-6">
                    {/* Database Card */}
                    <motion.div {...cardMotion}>
                        <Card className="md:col-span-2 lg:col-span-2 bg-purple-950/40 backdrop-blur-xl border border-purple-800/40 text-white rounded-2xl shadow-lg">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <span className="text-2xl">🗄️</span> Database
                                </CardTitle>
                                <CardDescription className="text-gray-300">
                                    Provides reliable and scalable database solutions to support your application's performance and data integrity.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex gap-2 flex-wrap">
                                    <span className="px-3 py-1 rounded-full bg-black-700/80 border border-yellow-300 text-white text-sm font-semibold flex items-center gap-1">
                                        <img width={16} height={16} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" />
                                        MySQL</span>
                                    <span className="px-3 py-1 rounded-full bg-blue-900/80 border border-blue-300 text-white text-sm font-semibold flex items-center gap-1">
                                        <img width={16} height={16} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" />
                                        SQL</span>
                                    <span className="px-3 py-1 rounded-full bg-green-700/80 border border-green-300 text-white text-sm font-semibold flex items-center gap-1">
                                        <img width={16} height={16} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" />
                                        SqLite</span>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Cloud Card */}
                    <motion.div {...cardMotion}>
                        <Card className="md:col-span-4 lg:col-span-4 bg-teal-900/40 backdrop-blur-xl border border-teal-500/40 text-white rounded-2xl shadow-lg">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <span className="text-2xl">☁️</span> Cloud
                                </CardTitle>
                                <CardDescription className="text-gray-300">
                                    Delivers secure and scalable cloud solutions to help businesses operate efficiently and grow with confidence.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex gap-2 flex-wrap">
                                    <span className="px-3 py-1 rounded-full bg-gray-800/80 border border-gray-400 text-white text-sm font-semibold flex items-center gap-1">
                                        <img width={16} height={16} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" />
                                        Azure</span>
                                    <span className="px-3 py-1 rounded-full bg-gray-800/80 border border-gray-400 text-white text-sm font-semibold flex items-center gap-1">
                                        <img width={16} height={16} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" />
                                        AWS</span>
                                    <span className="px-3 py-1 rounded-full bg-orange-900/80 border border-orange-300 text-white text-sm font-semibold flex items-center gap-1">
                                        <img width={16} height={16} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg" />
                                        Oracle</span>
                                    <span className="px-3 py-1 rounded-full bg-orange-900/80 border border-orange-300 text-white text-sm font-semibold flex items-center gap-1">
                                        <img width={16} height={16} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/digitalocean/digitalocean-original.svg" />
                                        Digital Ocean</span>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;