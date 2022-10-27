import Head from 'next/head'
// components
import Card from '../components/Card';
import Footer from '../components/Footer';
// lottie
import Lottie from "lottie-react";
import Timeline from '../public/timeline.json'
import Link from 'next/link';

const About = () => {
    return (
        <>
            <Head>
                <title>Springreen - About</title>
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

            <div className='container xs-pl-4 xs-pr-4'>
                <div className="mt-150-px">
                    <p className='font-xl fw-bold custom-text lg-pt-0 xs-pt-4'>Who are we?</p>
                    <p className='font-lg mt-2 fw-md max-w-70p custom-text'>{`We are young and ambitious group of people computer professionals with an expericnce over five years. We have carried out assignments in web3 and blockchain technology etc.`}</p>
                </div>
                <div className='mt-8'>
                    <p className='font-lg custom-text text-right'>We are planning to extend our activities to de-centralise the quality of programmes and structure. Our services are highly competitive, of high quality, and will be on time. to make Springreen a household name among computer professionals and to serve the business community with appropriate apps and services. To be a high-quality, time-bound competitor with efficient after-services.</p>
                </div>
                <div className='mt-8'>
                    <p className='custom-color font-f-code text-center font-xl-2'>Meet the team!</p>
                    <p className='custom-sub-text font-f-code text-center font-lg pt-2'>Meet the backbones of SpringVGreen.</p>
                    <div className='mt-6 row gap-2'>
                        <div className="col-6-lg col-12-xs">
                            <div className='card custom-card-bg p-5'>
                                <p className='custom-color md-font-xl xs-font-lg fw-md text-center'>VijayaLakshmi Sreedharan</p>
                                <p className='custom-text pt-4 font-lg text-center'>Managing director</p>
                            </div>
                        </div>
                        <div className="col-6-lg col-12-xs">
                            <div className='card custom-card-bg p-5'>
                                <p className='custom-color md-font-xl xs-font-lg fw-md text-center'>Rohith Sreedharan</p>
                                <p className='custom-text pt-4 font-lg text-center'>CEO</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-8'>
                    <p className='font-f-code text-center custom-color font-xl-2'>{`wanna know what we do?`}</p>
                    <div className="row gap-2 mt-4">
                        <div className="col-6-lg col-12-xs">
                            <Card title={"View our brochure"} description={"Get to know us a little more by reading our brochure."} link={"/work/dummy"} />
                        </div>
                        <div className="col-6-lg col-12-xs">
                            <Card title={"Smooth & Powerful apps"} description={"Boost your business by having and advertising your own app."} link={"/blogs/webapp"} />
                        </div>
                        <div className="col-6-lg col-12-xs">
                            <Card title={"Swiftly swift apps"} description={"Cover all IOS devices with a swift app."} link={"/blogs/applications"} />
                        </div>
                        <div className="col-6-lg col-12-xs">
                            <Card title={"Mobile friendly apps"} description={"Make responsive apps without going through any hassle."} link={"/blogs/applications"} />
                        </div>  
                    </div>
                </div>

                <div className='mt-4'>
                    <p className='font-f-code text-center custom-color font-xl-2'>our vision.</p>
                    <p className='mt-4 font-lg custom-text text-center'>{`Our vision is to provide the best services to our customers and to make our services available to remote areas of the world. We are committed to providing the best, high-quality, effective database for you to secure your own data. We make your dreams and ideas come true by providing you with the best services.`}</p>
                </div>

                <div className="mt-4">
                    <p className='font-f-code text-center custom-color font-xl-2'>our mission.</p>
                    <p className='mt-4 font-lg custom-text text-center'>{`Springreen's mission is to provide accessible hosting, apps, coding, and Web3 to entrepreneurs, startups, and students dynamically and knowledgeably by training and making them entrepreneurs to make dreams come true.`}</p>
                </div>

                <div className='lg-display-f xs-display-n'>
                    <Lottie animationData={Timeline} loop={true} autoplay={true} />
                </div>

                <div className="lg-display-n xs-display-f justify-center">
                    <Link href={"/services"}><button className='custom-btn-rounded pl-5 pr-5 pt-2 pb-2 white mt-2'>Get started</button></Link>
                </div>

                <div className='pt-6 pb-3'>
                    <Footer />
                </div>
            </div>
        </>
    );
}
 
export default About;