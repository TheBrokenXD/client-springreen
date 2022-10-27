import Head from 'next/head'
import { useState, useRef, useEffect } from "react";
import { useRouter } from 'next/router';
// firebase
import { useAuth } from '../context/AuthContext';
import { auth, db } from "../firebase/clientApp"
import { doc, setDoc } from 'firebase/firestore';

const Signup = () => {

    const toastRef = useRef();
    const router = useRouter();

    const { signUp } = useAuth()
    const [data, setData] = useState({
        email: '',
        username: '',
        password: ''
    })

    const handleSignup = async (e) => {
        e.preventDefault()

        if (data.email == '' || data.password == '') {
            toastRef.current.className = "toast custom-error-bg";
            toastRef.current.children[0].innerHTML = "Please fill all the fields"
            setTimeout(() => {
                toastRef.current.className = "toast-hidden custom-error-bg"
            }, 2000)
        } else if(data.email.indexOf('@') == -1 || data.email.indexOf('.') == -1){
            toastRef.current.className = "toast custom-error-bg";
            toastRef.current.children[0].innerHTML = "Please enter a valid email"
            setTimeout(() => {
                toastRef.current.className = "toast-hidden custom-error-bg"
            }, 2000)
        } else if(data.password.length < 6) {
            toastRef.current.className = "toast custom-error-bg";
            toastRef.current.children[0].innerHTML = "Password must be at least 6 characters"
            setTimeout(() => {
                toastRef.current.className = "toast-hidden custom-error-bg"
            }, 2000)
        } else {
            try {
                await signUp(data.email, data.password)
                toastRef.current.className = "toast custom-color-bg";
                toastRef.current.children[0].innerHTML = "Account created successfully"
                setTimeout(() => {
                    toastRef.current.className = "toast-hidden custom-color-bg"
                }, 2000)

                // convert date to proper format
                const time = auth.currentUser.metadata.creationTime;
                const convert = new Date(time);
                const dateWithDay = convert.toDateString();
                const dateSplit = dateWithDay.split(" ");
                const month = dateSplit[1];
                const dateNum = dateSplit[2];
                const year = dateSplit[3];
                const dateWithMonthAndYear = `${month} ${dateNum} ${year}`;

                const docRef = setDoc(doc(db, 'users', auth.currentUser.uid), {
                    username: data.username,
                    email: data.email,
                    uid: auth.currentUser.uid,
                    created: dateWithMonthAndYear,
                    investments: 0,
                    credits: 0,
                    api_activated: false
                }).catch((error) => {
                    console.log(error)
                })
                
                const text = `Hillow Hillow new user! Username: ${data.username}, Email: ${data.email}, Created at: ${dateWithMonthAndYear}`;
            
                const url = "https://api.telegram.org/bot5577721582:AAFJRI9RgGZc0wym9iuNW6lPKwUpR22zK8U/sendMessage?chat_id=@springreen69&text=" + text;
                fetch(url).then(res => res.json())
            } catch (err) {
                console.log(err.message)
            }
        }
    }

    const { user } = useAuth()

    useEffect(() => {
        if (user) {
          router.push('/users/dashboard')
        }
    }, [user, router])

    return (
        <>
            <Head>
                <title>Springreen - Sign Up</title>
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

            <div className="container">

                <div ref={toastRef} className="toast-hidden custom-error-bg">
                    <p className='fw-md white'>Error! please check your code</p>
                </div>

                <div className="row justify-center align-i-center h-screen">
                    <div className="col-11-xs lg-pt-2 xs-pt-8">
                        <div className="card custom-card-bg pt-4 pb-4 pl-6 pr-6">
                            <p className='custom-text font-f-code font-xl fw-md'>Sign Up</p>
                            <form className='mt-4'>
                                <div className='row gap-1'>
                                    <div className='col-6-lg col-12-xs'>
                                        <label className='custom-sub-text fw-md' htmlFor="email">Username</label>
                                        <input type="email" required className="mt-1 input-t custom-main-bg custom-sub-text shadow-base" placeholder="Username" 
                                            id='text'
                                            label='username'
                                            value={data.username}
                                            onChange={e => setData({ ...data, username: e.target.value })}
                                        />
                                    </div>
                                    <div className="col-6-lg col-12-xs">
                                        <label className='custom-sub-text fw-md' htmlFor="email">Email</label>
                                        <input type="email" required className="mt-1 input-t custom-main-bg custom-sub-text shadow-base" placeholder="Email" 
                                            id='email'
                                            label='email'
                                            value={data.email}
                                            onChange={e => setData({ ...data, email: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className='mt-2'>
                                    <label className='custom-sub-text fw-md' htmlFor="password">Password</label>
                                    <input type="password" required className="mt-1 input-t custom-main-bg custom-sub-text shadow-base" placeholder="Password" 
                                        id='password'
                                        label='password'
                                        value={data.password}
                                        onChange={e => setData({ ...data, password: e.target.value })}
                                    />
                                </div>

                                <div className='md-display-b xs-display-f justify-center mt-4'>
                                    <button className="custom-btn-rounded white pl-6 pr-6 pt-2 pb-2 md-mt-0 xs-mt-2" onClick={handleSignup}>Sign Up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
 
export default Signup;