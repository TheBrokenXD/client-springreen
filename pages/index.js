import Head from 'next/head'
import { useEffect, useRef, useState } from 'react';
// animation
import { motion, useAnimationControls } from 'framer-motion';
// components
import Card from '../components/Card';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {

    const pathRef = useRef(null);
    const pathRefTwo = useRef(null);

    const controls = useAnimationControls();

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [scrollY, setScrollY] = useState(0);

    const draw = {
        hidden: {
            opacity: 0,
            pathLength: 0,
            strokeWidth: 0,
        },
        visible: {
            opacity: 1,
            pathLength: 1,
            strokeWidth: 25,
            transition: {
                duration: 0.5,
                ease: [0.79, 0.14, 0.15, 0.86]
            }
        }
    }

    const screenSize = width * 2 + height * 2;

    const drawTwo = {
        complete: {
            pathLength: 1,
            pathOffset: width / screenSize,
            transition: {
                duration: 0.5,
                ease: [0.79, 0.14, 0.15, 0.86]
            }
        }
    }

    if(scrollY > 0) {
        controls.start({
            pathLength: (height / screenSize) - 0.02,
            pathOffset: (width / screenSize) + 0.01,
            transition: {
                duration: 0.5,
                ease: [0.79, 0.14, 0.15, 0.86]
            }
        })
    } else {
        controls.start({
            pathLength: 1,
            pathOffset: 0,
            transition: {
                duration: 0.5,
                ease: [0.79, 0.14, 0.15, 0.86]
            }
        })
    }

    useEffect(() => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);

        pathRefTwo.current.style.display = 'none';
        setTimeout(() => {
            pathRef.current.style.display = 'none';
            pathRefTwo.current.style.display = 'flex';
        }, 2000);

        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [width, height]);

    return (
        <>
            <Head>
                <title>Springreen - Home</title>
                <meta name="description" content="Springreen - A one-stop shop for all your bot needs." />
                <link rel="canonical" href="https://springreen.in/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Springreen" />
                <meta property="og:description" content="Springreen - A one-stop shop for all your bot needs." />
                <meta property="og:url" content="https://springreen.in/" />
                <meta property="og:site_name" content="Springreen" />
                <meta name="twitter:title" content="Springreen" />
                <meta name="twitter:description" content="Springreen - A one-stop shop for all your bot needs." />
                <meta name="twitter:url" content="https://springreen.in/" />
                <meta name="twitter:site" content="@Springreenoff" />
                <meta name="twitter:creator" content="@Springreenoff" />
            </Head>

            <div>
                <div className='path-container lg-display-f xs-display-n'>
                    <motion.svg width={width} height={height} initial="hidden" animate="visible">
                        <motion.rect ref={pathRef} width={width} height={height} className="path" fill="transparent" variants={draw} />
                    </motion.svg>
                </div>
                <div className="path-container lg-display-f xs-display-n">
                    <motion.svg width={width} height={height} initial="complete">
                        <motion.rect ref={pathRefTwo} width={width} height={height} className="path" fill="transparent" strokeWidth={25} strokeDashoffset="789px" variants={drawTwo} animate={controls} />
                    </motion.svg>
                </div>

                <div className='index-center'>
                    <div className='max-w-60p'>
                        <h1 className='lg-font-xl-2 md-font-xl xs-font-lg custom-text'>Time and Tide do not wait for anyone.</h1>
                        <h3 className='lg-font-lg xs-font-md custom-sub-text mt-2 max-w-80p'>Act Now, Make your dream project ideas come true.</h3>
                        <Link href={"/services"}><button className='custom-btn-rounded pl-5 pr-5 pt-2 pb-2 white mt-2'>Get started</button></Link>
                    </div>
                </div>

                <div className="container">

                    <div>
                        <h3 className='font-xl custom-text md-text-left xs-text-center'>Our products speak for themselves.</h3>
                        <h3 className='font-lg custom-sub-text md-pt-0 xs-pt-2 md-text-left xs-text-center'>Have a look at our products and services.</h3>
                        <div className='row gap-2 mt-2 md-pl-0 md-pr-0 xs-pl-2 xs-pr-2 justify-center'>
                            <div className="col-6-lg col-12-xs">
                                <Card title={"Databases"} description={"Gigabyte of text and visual can be stored up to 50 gb for free."} link={"/blogs/databases"} />
                            </div>
                            <div className="col-6-lg col-12-xs">
                                <Card title={"Webapp and Services"} description={"In this digital world you can't succeed without your own website."} link={"/blogs/webapp"} />
                            </div>
                            <div className="col-6-lg col-12-xs">
                                <Card title={"Mobile Applications"} description={"A lot of dealings/work can be achived with our mobile applications."} link={"/blogs/applications"} />
                            </div>
                            <div className="col-6-lg col-12-xs">
                                <Card title={"Server and Services"} description={"Using cloud computing we can provide you fast and efficient services."} link={"/blogs/hosting"} />
                            </div>
                        </div>
                    </div>

                    <div className='xl-mt-6 xs-mt-4'>
                        <ProjectCard type={"one"} title={"Work, we have done."} description={"Modesty keeps us from boasting about ourselves. You may check it out for yourself."} img={"https://images.unsplash.com/photo-1656872626633-35e27255ea25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"} />
                    </div>
                    <div className='xl-mt-6 xs-mt-4'>
                        <ProjectCard type={"two"} title={"Feedbacks, Appreciated."} description={"Your insightful input is very important to us. Feel free to contact us anytime."} img={"https://images.unsplash.com/photo-1656332530132-d3c12d1bb013?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1321&q=80"}  />
                    </div>

                    <div className='pt-6 pb-3'>
                        <Footer />
                    </div>

                </div>
            </div>
        </>
    )
}