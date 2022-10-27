import Head from 'next/head'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
// components
import Profile from "../../components/Profile";
// firebase
import { useAuth } from '../../context/AuthContext';


const Dashboard = () => {

    const router = useRouter();
    const { user } = useAuth()

    useEffect(() => {
        if (!user) {
          router.push('/signin')
        }
    }, [user, router])

    return (
        <>
            <Head>
                <title>Springreen - Dashboard</title>
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

            <div className="container lg-pt-2 xs-pt-8">
                <div className="row align-i-center h-screen ml-3 mr-3">
                    <div className="col-12-xs card custom-card-bg min-h-70p max-h-80p overflow-y-scroll lg-pl-7 lg-pr-7 xs-pl-2 xs-pr-2">
                        <Profile />
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Dashboard;