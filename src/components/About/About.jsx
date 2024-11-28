import React, { useEffect, useRef } from 'react';
import './About.css';

export default function About() {
    const sphereRef = useRef(null);
    const tagCloudRef = useRef(null); // Store TagCloud instance in a ref

    useEffect(() => {
        const initTagCloud = async () => {
            try {
                const TagCloud = (await import('TagCloud')).default;
                const currentSphereRef = sphereRef.current; // Store ref value
                
                const texts = [
                    'Python', 'Django', 'JavaScript',
                    'FastAPI', 'Flask', 'gRPC',
                    'PostgreSQL', 'AWS', 'MongoDB',
                    'GitHub', 'React', 'Docker',
                    'REST API', 'GraphQL', 'MySQL',
                    'Linux', 'Redis', 'Celery'
                ];

                const options = {
                    radius: 230,
                    maxSpeed: 'slow',
                    initSpeed: 'slow',
                    direction: 135,
                    keep: true
                };

                // Cleanup previous instance
                if (tagCloudRef.current) {
                    tagCloudRef.current.destroy();
                }

                // Clear container
                if (currentSphereRef) {
                    currentSphereRef.innerHTML = '';
                }

                // Create new instance
                tagCloudRef.current = TagCloud('.tagcloud', texts, options);

            } catch (error) {
                console.error("Error initializing TagCloud:", error);
            }
        };

        initTagCloud();

        // Cleanup function
        return () => {
            if (tagCloudRef.current) {
                tagCloudRef.current.destroy();
            }
            // Use stored ref value in cleanup
            const currentSphereRef = sphereRef.current;
            if (currentSphereRef) {
                currentSphereRef.innerHTML = '';
            }
        };
    }, []); // Empty dependency array

    return (
        <section className="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">Introduction</span>
            
            <div className="about__container">
                {/* Left side - Letter */}
                <div className="letter-container">
                    <div className="letter">
                        <p className="letter__greeting">Dear Visitor,</p>
                        
                        <p className="letter__content">
                            I'm Abhijith, a passionate software developer with a focus on 
                            creating innovative solutions. My journey in technology began 
                            with curiosity and has evolved into expertise in modern development 
                            practices.
                        </p>
                        
                        <p className="letter__content">
                            With 4 years of experience, I've specialized in building scalable 
                            applications using <strong>Python</strong>, <strong>Django</strong>, 
                            and <strong>FastAPI</strong>. My work involves creating efficient 
                            backend solutions and microservices architecture that make a real impact.
                        </p>
                        
                        <p className="letter__content">
                            I believe in continuous learning and staying updated with the latest 
                            technologies. When I'm not coding, you'll find me exploring new tech 
                            stacks and contributing to the developer community.
                        </p>
                        
                        <p className="letter__signature">
                            Best regards,<br/>
                            Abhijith C
                        </p>
                    </div>
                </div>

                {/* Right side - Sphere */}
                <div className="sphere-container">
                    <span ref={sphereRef} className="tagcloud"></span>
                </div>
            </div>
        </section>
    );
} 