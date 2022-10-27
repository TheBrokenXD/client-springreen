import Head from 'next/head'
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import Link from "next/link";
// firebase
import { useAuth } from "../../context/AuthContext"; 
// stripe
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements } from '@stripe/react-stripe-js';

const Invest = () => {

    const router = useRouter();
    const { user } = useAuth()

    // const [publishableKey, setPublishableKey] = useState(null);

    // useEffect(() => {
    //     // check if the user is logged in
    //     if (!user) {
    //       router.push('/signin')
    //     }

    //     // fetch keys from stripe api
    //     fetch('/api/keys', {
    //         method: 'GET',
    //         headers: {'Content-Type': 'application/json'},
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             setPublishableKey(data.publishableKey)
    //         })
    // }, [user, router])

    // if(!publishableKey) {
    //     return 'Loading...'
    // }

    // const stripe = loadStripe(publishableKey);

    return (
        <>
            <Head>
                <title>Springreen - Invest</title>
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
                <div className="row align-i-center h-screen pl-3 pr-3 lg-pt-2 xs-pt-8">
                    <div className="col-12-xs card custom-card-bg min-h-70p max-h-80p overflow-y-scroll lg-pl-7 lg-pr-7 xs-pl-2 xs-pr-2">
                        <p className="custom-text lg-font-xl xs-font-lg fw-md mt-4">Invest on us & earn credits</p>
                        <form>
                            <div className="column align-i-center mt-4">
                                <label className='font-lg custom-text fw-md'>Amount </label>
                                <input type="text" required className="input-t custom-main-bg custom-sub-text shadow-base ml-2 mt-2" placeholder='Minimum of 3000rs' onChange={ (e) => { setData({ ...data, amount: e.target.value }) } } />
                            </div>
                            <div className="display-f justify-center">
                                <Link href={"#"}><button className='custom-btn-rounded pl-5 pr-5 pt-2 pb-2 white mt-4'>Invest!</button></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Invest;