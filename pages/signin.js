import Head from 'next/head'
import { useState, useRef, useEffect } from "react";
import { useRouter } from 'next/router';
// firebase
import { useAuth } from '../context/AuthContext';

const Signin = () => {

    const toastRef = useRef();
    const router = useRouter();

    const { signIn } = useAuth()
    const [data, setData] = useState({
        email: '',
        password: '',
    })

    const handleSignin = async (e) => {
        e.preventDefault()

        if(data.email == '' || data.password == '') {
            toastRef.current.className = "toast custom-error-bg";
            toastRef.current.children[0].innerHTML = "Please fill all the fields"
            setTimeout(() => {
                toastRef.current.className = "toast-hidden custom-error-bg"
            }, 2000)
        } else {
            try {
                await signIn(data.email, data.password)
                router.push('/')
            } catch (err) {
                toastRef.current.className = "toast custom-error-bg";
                toastRef.current.children[0].innerHTML = "Invalid email or password"
                setTimeout(() => {
                    toastRef.current.className = "toast-hidden custom-error-bg"
                }, 2000)
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
                <title>Springreen - Sign in</title>
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

                <div className="row justify-center align-i-center h-screen lg-pt-2 xs-pt-8">
                    <div className="col-11-xs">
                        <div className="card custom-card-bg pt-4 pb-4 pl-6 pr-6">
                            <p className='custom-text font-f-code font-xl fw-md'>Sign In</p>
                            <form className='mt-4'>
                                <div>
                                    <label className='custom-sub-text fw-md' htmlFor="email">Email</label>
                                    <input type="email" required className="mt-1 input-t custom-main-bg custom-sub-text shadow-base" placeholder="Email" 
                                        id='email'
                                        label='email'
                                        value={data.email}
                                        onChange={e => setData({ ...data, email: e.target.value })}
                                    />
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
                                    <button className="custom-btn-rounded white pl-6 pr-6 pt-2 pb-2 md-mt-0 xs-mt-2" onClick={handleSignin}>Sign In</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
 
export default Signin;