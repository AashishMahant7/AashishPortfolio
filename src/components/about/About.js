import React from 'react'
import './style.scss'
import Wrapper from '../wrapper/Wrapper'
import EducationCard from './educationCard/EducationCard'

function About() {
    let educations = [
        {
            degree: 'Bachelor of Technology (Computer Science & Engineering)',
            institute: 'RD Engineering College',
            duration: '07/2019 – 06/2023',
            gradeType: 'SGPA',
            grade: 7.4
        },
        {
            degree: 'Higher Secondary (CBSE)',
            institute: 'KGDSSVM',
            duration: '05/2018 – 05/2019',
            gradeType: 'Percentage',
            grade: 72
        },
        {
            degree: 'Secondary (CBSE)',
            institute: 'KGDSSVM',
            duration: '01/2016 – 05/2017',
            gradeType: 'CGPA',
            grade: 8.4
        }
    ];
    
    return (
        <Wrapper>
            <section className='about' id='about' name='about'>
                <h2>Get to Know Me</h2>
                <div className="container">
                    <div className="intro">
                        <h3>Introduction</h3>
                        <q>
                        I'm Aashish Mahant. I'm from Ghaziabad, uttar pradesh. I graduated with a BTech in Computer Science from RD Engineering College in 2023.
                        <br />
                        <br />
                        I'm currently deeply engrossed in honing my frontend development skills, with ReactJS, HTML, CSS, JavaScript and Tailwind CSS as my primary focus. My journey into web development also encompasses Node.js and Express.js, allowing me to build robust and scalable applications. Through personal projects and hands-on practice, 
                        I continuously strive to elevate my expertise, particularly in crafting seamless user experiences using Redux, JavaScript and Tailwind CSS
                        <br />
                        <br />
                        In addition to my frontend skills, I have a solid foundation in Core Java.
                        <br />
                        <br />
                        Now, I'm eagerly seeking entry-level opportunities as a frontend developer to apply my expertise and contribute to impactful projects.
                        </q>
                    </div>
                    <div className="education">
                        <h3>Educations</h3>
                        <div className="ed-container">
                            {
                                educations.map((educatiion, index) => (
                                    <EducationCard ed={educatiion} key={index} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </Wrapper>
    )
}

export default About