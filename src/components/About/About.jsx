import React, { useEffect, useRef } from 'react';
import './About.css';

export default function About() {
    const sphereRef = useRef(null);

    useEffect(() => {
        const loadTagCloud = async () => {
            const TagCloud = (await import('TagCloud')).default;
            
            const container = '.tagcloud';
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
                maxSpeed: 'normal',
                initSpeed: 'fast',
                direction: 135,
                keep: true,
                useContainerInlineStyles: true,
                useItemInlineStyles: true
            };

            try {
                if (sphereRef.current) {
                    TagCloud(container, texts, options);
                }
            } catch (error) {
                console.error("Error initializing TagCloud:", error);
            }
        };

        loadTagCloud();

        return () => {
            const element = document.querySelector('.tagcloud');
            if (element) {
                element.innerHTML = '';
            }
        };
    }, []);

    return (
        <section className="about">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">My personal projects</span>
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