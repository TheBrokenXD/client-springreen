import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
// lottie
import Lottie from "lottie-react";
import NavBurger from '../public/navburger.json'
// user system
import { useAuth } from '../context/AuthContext';

const Navbar = () => {

    const router = useRouter();

    const lottieRef = useRef();
    const lottieData = useRef();

    const homeRef = useRef();
    const workRef = useRef();
    const contactRef = useRef();

    useEffect(() => {
        const url = 'router.asPath';
    })

    const handleClick = () => {
        if(lottieData.current.className == "sidebar") {
            lottieData.current.className = 'sidebar-toggled';
            lottieRef.current.setDirection(1);
            lottieRef.current.playSegments(1, 21, true);
        } else {
            lottieData.current.className = "sidebar";
            lottieRef.current.setDirection(-1);
            lottieRef.current.play();
        }
    }
    
    const closeFunc = () => {
        lottieData.current.className = "sidebar";
        lottieRef.current.setDirection(-1);
        lottieRef.current.play();
    }

    const { user, logout } = useAuth()

    return (
        <>
            <div className="nav">
                <div className="nav-content">
                    <Link href="/"><span className='font-xl fw-md custom-color unselectable pointer'>springreen.</span></Link>
                    <ul className='display-f align-i-center gap-2'>
                        <li className='lg-display-b xs-display-n'><Link href="/"><a className='font-lg custom-text unselectable'><span className={router.pathname == "/" ? "transition-base custom-color-hover active" : "transition-base custom-color-hover"}>Home</span></a></Link></li>
                        <li className='lg-display-b xs-display-n'><Link href="/about"><a className='font-lg custom-text unselectable'><span className={router.pathname == "/about" ? "transition-base custom-color-hover active" : "transition-base custom-color-hover"}>About</span></a></Link></li>
                        <li className='lg-display-b xs-display-n'><Link href="/contact"><a className='font-lg custom-text unselectable'><span className={router.pathname == "/contact" ? "transition-base custom-color-hover active" : "transition-base custom-color-hover"}>Contact</span></a></Link></li>
                        <li>
                            <div className="nav-burger">
                                <div className="lottie" onClick={handleClick} >
                                    <Lottie lottieRef={lottieRef} animationData={NavBurger} loop={false} autoplay={false} />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <ul className='lg-display-n xs-display-f justify-around align-i-center gap-2'>
                    <li><Link href="/about"><a className='font-lg custom-text unselectable'><span className={router.pathname == "/about" ? "transition-base custom-color-hover active" : "transition-base custom-color-hover"}>About</span></a></Link></li>
                    <li><Link href="/contact"><a className='font-lg custom-text unselectable'><span className={router.pathname == "/contact" ? "transition-base custom-color-hover active" : "transition-base custom-color-hover"}>Contact</span></a></Link></li>
                </ul>

                <div ref={lottieData} className="sidebar">
                    <ul>
                        <li><Link href="/"><a className='lg-font-xl xs-font-lg custom-color unselectable' onClick={closeFunc}><span ref={homeRef} className="transition-base">Home</span></a></Link></li>
                        <li>
                            {user ? (
                                <div className="custom-li">
                                    <div><li><Link href="/users/dashboard"><a className='lg-font-xl xs-font-lg custom-color unselectable' onClick={closeFunc}><span ref={homeRef} className="transition-base">Dashboard</span></a></Link></li></div>
                                    <div><li><Link href="/signin"><a className='lg-font-xl xs-font-lg custom-color unselectable'  onClick={() => {
                                        logout()
                                        router.push('/signin')
                                        closeFunc()
                                    }}><span ref={homeRef} className="transition-base">Sign Out</span></a></Link></li></div>
                                </div>
                            ) : (
                                <div className="custom-li">
                                    <div><li><Link href="/signin"><a className='lg-font-xl xs-font-lg custom-color unselectable' onClick={closeFunc}><span ref={homeRef} className="transition-base">Sign In</span></a></Link></li></div>
                                    <div><li><Link href="/signup"><a className='lg-font-xl xs-font-lg custom-color unselectable' onClick={closeFunc}><span ref={homeRef} className="transition-base">Sign Up</span></a></Link></li></div>
                                </div>
                            )}
                        </li>
                        <li><Link href="/services"><a className='lg-font-xl xs-font-lg custom-color unselectable' onClick={closeFunc}><span ref={contactRef} className="transition-base">Services</span></a></Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;