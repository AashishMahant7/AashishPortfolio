import React from 'react'
import './style.scss'
import download from '../../assets/download.png'
import resumeFile from '../../assets/AashishMahant.pdf'
import Wrapper from '../wrapper/Wrapper'
import Social from '../social/Social'
import TypedText from '../TypedText'
import logo from '../../assets/logo.png'

function Home() {
    return (
        <Wrapper>
            <section className='home' id='home' name='home'>
                <div className="left">
                    <div className="intro">
                        <h2>Hello, It's Me</h2>
                        <h1>Aashish Mahant</h1>
                        <h2>And I'm a <TypedText /></h2>
                    </div>
                    <p className="summary">
                    As an aspiring frontend developer well-versed in JavaScript, HTML, CSS, and React, I'm proficient in Redux for advanced state management. Furthermore, I'm keen on utilizing  Tailwind CSS to enhance styling efficiency. Dedicated to continuous improvement, I aim to deliver exceptional user experiences that exceed client expectations.
                    </p>

                    <Social />

                    <a href={resumeFile} className="resume pointers" download={'AashishMahant.pdf'}>Resume</a>
                </div>

                <div className="right">
                    <div className="img-box">
                        <img src={logo} alt="" />
                    </div>
                </div>
            </section>
        </Wrapper>
    )
}

export default Home