import React from 'react'
import './style.scss'
import ProjectCard from './projectCard/ProjectCard'
import Wrapper from '../wrapper/Wrapper'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import yt from '../../assets/yt.png';
import blog from '../../assets/blog.png';
import ecommerce from '../../assets/ecommerce.png'
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";

function Projects() {
    const projects = [
        {
            title: 'WanderLust',
            description: 'The Wanderlust project is a website made with Node.js and Express.js. It helps people find and book places to stay for their trips. We use Cloudinary to manage pictures smoothly. The site looks nice and is easy to use, just like Airbnnb  ',
            image: blog,
            repo_link: 'https://github.com/AashishMahant7/wanderlust',
            live_link: 'https://wanderlust-projectt.onrender.com/listings'
        },
        {
            title: 'Shopping Cart',
            description: 'The shopping cart project is a dynamic web application developed using React.js, Redux, and Tailwind CSS. It serves as a virtual storefront where users can browse through a catalog of products, add items to their cart, and proceed to checkout seamlessly.',
            image: ecommerce,
            repo_link: 'https://github.com/AashishMahant7/ShoppingCart',
            live_link: 'https://reactecommerc.netlify.app/'
        },
       
        {
            title: 'YouTube Clone',
            description: 'YouTube Clone with JavaScript, utilizing APIs to replicate key functionalities of the popular video-sharing platform, including video playback, search.',
            image: yt,
            repo_link: 'https://github.com/AashishMahant7/youtubejss',
            live_link: 'https://aashishmahant7.github.io/youtubejss/'

        },
    ]

    const settings = {
        dots: true,
        customPaging: (index) => (
            <button className='pointers'>
                <div></div>
            </button>
        ),
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <HiArrowSmLeft className='slick-arrow pointers' />,
        nextArrow: <HiArrowSmRight  className='slick-arrow pointers' />
    };

    return (
        <Wrapper>
            <section className='projects' id='projects' name='projects'>
                <h2>Explore My Latest Work</h2>
                <Slider {...settings}>
                    {
                        projects.map((project, i) => (
                            <ProjectCard project={project} />
                        ))
                    }
                </Slider>
            </section>
        </Wrapper>
    )
}

export default Projects