import Head from 'next/head'
// components
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';

const services = () => {
    return (
        <>
            <Head>
                <title>Springreen - Services</title>
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
                <div className='mt-8 lg-pt-2 xs-pt-8'>
                    <p className='font-xl font-f-code fw-md custom-text'>Services</p>
                    <div className='row gap-2 mt-4'>
                        <div className="col-4-xl col-6-lg col-12-xs">
                            <ServiceCard link={"http://telegram.me/bots_universe"} title={"Telegram Bots"} description={"Automation is the thing everyone needs, thanks to telegram to provide free APIS. We offer bots to drive your way in Automation, Place Your Custom Order Here."} />
                        </div>
                        <div className="col-4-xl col-6-lg col-12-xs">
                            <ServiceCard link={"http://telegram.me/bots_universe"} title={"Smooth Websites"} description={"Eveyone Needs Modern Cofy Sites to Succed. Whether You're Freelancer or Student, You need a site."} />
                        </div>
                        <div className="col-4-xl col-6-lg col-12-xs">
                            <ServiceCard link={"http://telegram.me/bots_universe"} title={"Apps"} description={"Unlike Sites, Duo Bussiness Needs, Mobile Apps, Get Your First App done ASAP"} />
                        </div>
                        <div className="col-4-xl col-6-lg col-12-xs">
                            <ServiceCard link={"http://telegram.me/bots_universe"} title={"SaaS"} description={"Software as a service (or SaaS) is a way of delivering applications over the Internet—as a service. Instead of installing and maintaining software, you simply access it via the Our Portal, freeing yourself from complex software and hardware management."} />
                        </div>
                        <div className="col-4-xl col-6-lg col-12-xs">
                            <ServiceCard link={"http://telegram.me/bots_universe"} title={"CRM"} description={"Customer relationship management (CRM) is a technology for managing all your Data of relationships and interactions with customers and potential customers. The goal is simple: Improve business relationships. Our CRM system helps companies stay connected to customers, streamline processes, and improve profitability. and you get a chance of incresing 10x Your Production."} />
                        </div>
                        <div className="col-4-xl col-6-lg col-12-xs">
                            <ServiceCard link={"http://telegram.me/bots_universe"} title={"Custom Softwares"} description={"Custom software development is the process of designing, creating, deploying and maintaining software for a specific set of users, functions or organizations. In contrast to commercial off-the-shelf software (COTS), custom software development aims at a narrowly defined set of requirements. COTS targets a broad set of requirements, allowing it to be packaged and commercially marketed and distributed. We make this at the lowest as possible for you to sell higher more than you excepted."} />
                        </div>
                        <div className="col-4-xl col-6-lg col-12-xs">
                            <ServiceCard link={"http://telegram.me/bots_universe"} title={"Data Mining"} description={"Data mining is the process of sorting through large data sets to identify patterns and relationships that can help solve business problems through our unique data analysis tool. Data mining techniques and tools enable enterprises to predict future trends and make more-informed business decisions. if you want to run a succesfull bussiness, develop with us."} />
                        </div>
                        <div className="col-4-xl col-6-lg col-12-xs">
                            <ServiceCard link={"http://telegram.me/bots_universe"} title={"Web3"} description={"Centralization has helped onboard billions of people to the World Wide Web and created the stable, robust infrastructure on which it lives. At the same time, we offer a handful of centralized entities to behold  on large swathes of the World Wide Web, unilaterally deciding what should and should not be allowed. Web3 is the answer to this dilemma. Make your First Dapp with us."} />
                        </div>
                    </div>
                </div>

                <div className='pt-6 pb-3'>
                    <Footer />
                </div>
            </div>
        </>
    );
}
 
export default services;