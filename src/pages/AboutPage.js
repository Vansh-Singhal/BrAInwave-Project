import React from 'react';

const AboutPage = () => {
    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-100 to-white px-16">
            <div className="container mx-auto px-4 py-8">
                <Section title="About Eye Link" subtitle="Empowering students with disabilities through accessible exam assistance" />

                <Section title="Our Mission">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Eye Link is dedicated to empowering students with disabilities by providing reliable, accessible exam assistance. Our goal is to create a system where certified exam writers connect with students to provide support in their exam journey, removing barriers and promoting equal opportunities.
                        </p>
                    </div>
                </Section>

                <Section title="Our Story">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Eye Link was born from a deep understanding of the challenges faced by students with disabilities during exams. Current systems often lack certified exam writers, leading to inconsistencies in support quality. Eye Link addresses this issue by ensuring that only certified, trained writers are available, giving students a seamless and stress-free exam experience.
                        </p>
                    </div>
                </Section>

                <Section title="What We Do">
                    <p className="text-lg text-gray-700 mb-6">
                        Our platform bridges the gap between students who require assistance and certified exam writers through a range of innovative, AI-powered features designed with accessibility in mind:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Feature 
                            iconPath="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                            title="Certified Exam Writers" 
                            description="Only certified individuals can sign up as writers, with real-time AI verification of certifications for authenticity." 
                        />
                        <Feature 
                            iconPath="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" 
                            title="Rating and Feedback System" 
                            description="Both writers and students can rate their experiences to promote trust and maintain high standards of service." 
                        />
                        <Feature 
                            iconPath="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" 
                            title="AI-Powered Matching" 
                            description="Students can easily find writers who match their specific exam needs, from board exams to competitive exams like JEE and UPSC." 
                        />
                        <Feature 
                            iconPath="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" 
                            title="Accessible Technology" 
                            description="Through NLP voice recognition, students can effortlessly input their exam details, and the platform automatically matches them with an available writer." 
                        />
                    </div>
                </Section>

                <Section title="Our Impact">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <Feature 
                            iconPath="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" 
                            description="With over 5 million individuals with disabilities in India, Eye Link aims to reach thousands of students who currently lack reliable exam assistance. We're committed to helping students achieve their full potential by breaking down barriers to education and ensuring they receive the support they deserve."
                        />
                    </div>
                </Section>

                <Section title="Our Community">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <Feature 
                            iconPath="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" 
                            description="Eye Link is more than a platform; it's a community. Here, students and writers can share experiences, discuss exam preparations, and support one another on their journey."
                        />
                    </div>
                </Section>
            </div>
        </main>
    );
};

const Section = ({ title, subtitle, children }) => (
    <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-center">{title}</h2>
        {subtitle && <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto">{subtitle}</p>}
        {children}
    </section>
);

const Feature = ({ iconPath, title, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-800 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={iconPath} />
        </svg>
        <h3 className="text-xl font-semibold text-center mb-2">{title}</h3>
        <p className="text-center text-gray-600">{description}</p>
    </div>
);

export default AboutPage;
