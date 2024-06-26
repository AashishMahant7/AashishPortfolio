import React, { useState } from 'react'
import './style.scss'
import {
    DiReact,
    DiNodejs,
    DiMongodb,
    DiPython,
    DiGit,
    DiJava,
    DiHtml5,
    DiCss3,
    DiSass,
    DiMysql,
    DiDatabase,
    
} from "react-icons/di";
import {
    SiTailwindcss,
    SiRedis,
    SiFirebase,
    SiNextdotjs,
    SiExpress,
} from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb"
import { RiJavascriptFill } from "react-icons/ri";
import { FaGithubSquare } from "react-icons/fa";
import { SiVisualstudiocode, SiVercel  } from "react-icons/si";

import SkillMeter from './skillMeter/SkillMeter'
import Wrapper from '../wrapper/Wrapper';


function skillCard(logo, title, percent){
    return (
        <div className="skill pointers">
            <div className="skill-wrapper">
                <div className="name-logo">
                    {logo}
                    <p className="skill-title">
                        {title}
                    </p>
                </div>
                <div className="progress">
                    <SkillMeter percent={percent}/>
                </div>
            </div>
        </div>
    )
}
function toolCard(logo, title){
    return (
        <div className="tool pointers">
            <div className="tool-wrapper">
                <div className="name-logo">
                    {logo}
                    <p className="tool-title">
                        {title}
                    </p>
                </div>
            </div>
        </div>
    )
}

function Skills() {
    const [show, setShow] = useState(true)
    return (
        <Wrapper>
            <section className='skills' id='skills' name='skills'>
                <h2>My Skillset</h2>
                <div className="skill-tool">
                    <h3 className={`pointer pointers ${show?'active':''}`} onClick={()=>setShow(true)}>Skills I Have</h3>
                    <h3 className={`pointer pointers ${!show?'active':''}`} onClick={()=>setShow(false)}>Tools I Use</h3>
                </div>
                {show && <div className="skills-container">
                   {skillCard(<DiJava style={{color: 'var(--java)'}} />, ' Core Java', 70)}
                    {skillCard(<DiHtml5 style={{color: 'var(--html)'}} />, 'Html 5', 85)}
                    {skillCard(<DiCss3 style={{color: 'var(--css)'}} />, 'Css 3', 80)}
                    {skillCard(<RiJavascriptFill style={{color: 'var(--js)'}} />, 'JavaScript', 85)}
                    {skillCard(<DiReact style={{color: 'var(--react)'}} />, 'ReactJs', 80)} 
                    {skillCard(<DiNodejs style={{color: 'var(--node)'}} />, 'NodeJs', 70)}
                    {skillCard(<DiMongodb style={{color: 'var(--mongodb)'}} />, 'MongoDB', 70)}
                    {skillCard(<SiExpress style={{color: 'var(--express)'}} />, 'ExpressJs', 70)}
                    {skillCard(<SiTailwindcss style={{color: 'var(--tailwind)'}} />, 'Tailwind Css', 60)}
                    {skillCard(<TbBrandRedux style={{color: 'var(--redux)'}} />, 'ReduxJs', 70)}


        
                   
                   
                   
                    
                    
                </div>}
                {!show && <div className="tools-container">
                    {toolCard(<SiVisualstudiocode style={{color: 'var(--vscode)'}} />, 'VS Code')}
                    {toolCard(<DiGit style={{color: 'var(--git)'}} />, 'Git')}
                    {toolCard(<FaGithubSquare style={{color: 'var(--github)'}} />, 'GitHub')}
                    {toolCard(<SiVercel style={{color: 'var(--vercel)'}} />, 'Vercel')}
                </div>}
            </section>

        </Wrapper>
    )
}

export default Skills