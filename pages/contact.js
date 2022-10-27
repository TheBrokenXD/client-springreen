import Head from 'next/head'
import { useState, useRef } from "react";
// components
import Footer from '../components/Footer';

const Contact = () => {

    const toastRef = useRef();

    const [details, setDetails] = useState({
        email: '',
        name: '',
        username: '',
        message: ''
    });

    const submitForm = (e) => {
        if (details.email === '' || details.name === '' || details.username === '' || details.message === '') {
            toastRef.current.className = "toast custom-error-bg";
            toastRef.current.children[0].innerHTML = "Please fill all the fields";
            setTimeout(() => {
                toastRef.current.className = "toast-hidden custom-error-bg"
            }, 2000)
        } else if (details.email.indexOf('@') === -1) {
            toastRef.current.className = "toast custom-error-bg";
            toastRef.current.children[0].innerHTML = "Please enter a valid email";
            setTimeout(() => {
                toastRef.current.className = "toast-hidden custom-error-bg"
            }, 2000)
        } else {
            e.preventDefault();
            toastRef.current.className = "toast custom-color-bg";
            toastRef.current.children[0].innerHTML = "Message sent successfully";
            setTimeout(() => {
                toastRef.current.className = "toast-hidden custom-color-bg"
            }, 2000)

            const text = `Helloo! ${details.name}, @${details.username} says ${details.message}. E-Mail: ${details.email}, Time: ${new Date().toLocaleTimeString()}`;
            
            const url = "https://api.telegram.org/bot5577721582:AAFJRI9RgGZc0wym9iuNW6lPKwUpR22zK8U/sendMessage?chat_id=@springreen69&text=" + text;
            fetch(url).then(res => res.json())
        }
    }

    return (
        <>
            <Head>
                <title>Springreen - Contact</title>
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

            <div ref={toastRef} className="toast-hidden custom-error-bg">
                <p className='fw-md white'>Error! please check your code</p>
            </div>

            <div className='lg-pt-0 xs-pt-8'>
                <div className="row justify-center align-i-center h-screen">
                    <div className="col-11-xs">

                        <div className='card custom-active-bg justify-between br-md md-p-5 xs-p-2 md-mt-0 xs-mt-8'>
                            <div className="row">

                                <div className="col-3-xs column justify-center xl-display-f xs-display-n">
                                    <p className='custom-color font-xl fw-bold'>Contact</p>
                                    <p className='custom-text font-f-code pt-2 display-f align-i-center'>Love to hear from you,</p>
                                    <p className='custom-text font-f-code display-f align-i-center'>Get in touch.</p>
                                </div>

                                <div className="col-9-xl col-12-xs column justify-center form-border-right">
                                    <form>
                                        <div className="row gap-1">
                                            <div className="col-6-md col-12-xs">
                                                <div className="column">
                                                    <label className='custom-text fw-md font-f-code' htmlFor="email">Your Name</label>
                                                    <input type="text" required className='mt-1 input-t custom-main-bg custom-sub-text shadow-base' placeholder='Enter your name' id='name' onChange={ (e) => { setDetails({ ...details, name: e.target.value }) } }/>
                                                </div>
                                            </div>
                                            <div className="col-6-md col-12-xs">
                                                <div className="column">
                                                    <label className='custom-text fw-md font-f-code' htmlFor="subject">Telegram Username</label>
                                                    <input type="text" required className='mt-1 input-t custom-main-bg custom-sub-text shadow-base' placeholder='Enter your username' id='username' onChange={ (e) => { setDetails({ ...details, username: e.target.value }) } }/>
                                                </div>
                                            </div>
                                            <div className="col-12-xs">
                                                <div className="column">
                                                    <label className='custom-text fw-md font-f-code' htmlFor="subject">Email</label>
                                                    <input type="email" required className='mt-1 input-t custom-main-bg custom-sub-text shadow-base' placeholder='Enter your email' id='email' onChange={ (e) => { setDetails({ ...details, email: e.target.value }) } }/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="column mt-2">
                                            <label className='custom-text fw-md font-f-code'>Message</label>
                                            <input type="text" required className='mt-1 input-t custom-main-bg custom-sub-text shadow-base h-137-px' onChange={ (e) => { setDetails({ ...details, message: e.target.value }) } }/>
                                        </div>
                                        <div className="md-display-f xs-display-b justify-between align-i-center mt-3">
                                            <p className="md-font-lg xs-font-md md-text-left xs-text-center custom-sub-text font-f-code fw-md">{`We'll reach out to you soon!`}</p>
                                            <div className='md-display-b xs-display-f justify-center'>
                                                <button className="custom-btn-rounded white pl-6 pr-6 pt-2 pb-2 md-mt-0 xs-mt-2" onClick={submitForm}>Send</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div className="container">
                <div className='pt-6 pb-3'>
                    <Footer />
                </div>
            </div>
        </>
    );
}
 
export default Contact;