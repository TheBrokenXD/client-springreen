import Link from "next/link";
import Footer from "../../components/Footer";

const databases = () => {
    return (
        <>
            <div className="container">
                <div className="mt-8">
                    <p className="custom-text fw-md font-lg lg-pt-0 xs-pt-6">Our blog</p>
                    <p className="custom-color fw-md font-xl-4 pt-1">Databases</p>
                    <p className="custom-sub-text pt-1">Gigabyte of text and visual can be stored up to 50 gb for free.</p>
                
                    <div className="mt-6">
                        <div className="card custom-on-main-bg p-3">
                            <p className="text-center font-xl fw-bold custom-color">Why should you use our database?</p>

                            <div className="mt-4 text-center">
                                <p className="custom-text fw-md font-lg">We have 99.99% uptime on our servers.</p>
                                <p className="custom-text fw-md font-lg">We provide unlimited bandwidth for every request.</p>
                                <p className="custom-text fw-md font-lg">We have a 24/7 Support Team to help you.</p>
                                <p className="custom-text fw-md font-lg">We provide you with a very high-quality interactive dashboard to browse all your data.</p>
                                <p className="custom-text fw-md font-lg">All of the above mentioned are free forever.</p>
                            </div>
                        </div>
                        
                        <p className="font-lg fw-md custom-color mt-6">Orgainize the data without any special softwares.</p>
                        <ol className="mt-2">
                            <li><p className="custom-text font-lg">We provide you with a very high-quality interactive dashboard to browse all your data.</p></li>
                            <li><p className="custom-text font-lg">{`Using our AI we've got your back to sort your data and make it easy to browse.`}</p></li>
                            <li><p className="custom-text font-lg">High quality data storage and security.</p></li>
                            <li><p className="custom-text font-lg">{`We protect your privacy. we don't sell your data to anyone.`}</p></li>
                            <li><p className="custom-text font-lg">Unlike Heroku, we allow customization. To add your own successor to the data, add roles.</p></li>
                            <li><p className="custom-text font-lg">High quality sealed data, So no pipe leaks anywhere.</p></li>
                        </ol>

                        <p className="custom-color font-xl fw-md text-center mt-6">Your Data,</p>
                        <p className="custom-color font-xl fw-md text-center">Your Privacy.</p>
                        <div className="mt-4 text-center pb-2">
                            <p className="custom-text font-lg">We are committed to providing the best, high-quality, most effective database, to make it completely your own.</p>
                            <p className="custom-text font-lg">With an unlimited bandwidth, you can delete or transfer files from local or cloud storage.</p>
                            <p className="custom-text font-lg">You have complete control over your data and the permissions granted to your portal.</p>
                            <p className="custom-text font-lg">{`Your security is so tight that you may even ask for your own password every time [Fully Customzable Security] you access your data.`}</p>
                        </div>

                        <p className="custom-color font-lg fw-md text-right mt-4">Tools, Polices.</p>
                        <div className="mt-4 text-right">
                            <p className="custom-text font-lg">CLI Tools to make your life easy.</p>
                            <p className="custom-text font-lg">Developer knows the pain of not well documented.</p>
                            <p className="custom-text font-lg">The APIs are well documented and easy to use.</p>
                            <p className="custom-text font-lg">The Py Package is used to create high-quality Python code for your projects.</p>
                            <p className="custom-text font-lg">Monitored and Controlled data usage access over your dashboard.</p>
                            <p className="custom-text font-lg">Multi-OS support and native apps for seemless connections.</p>
                        </div>

                        <p className="custom-color font-xl fw-md text-center mt-4">Plans,</p>
                        <p className="custom-color font-xl fw-md text-center">Pricings.</p>

                        <div className="row gap-2 mt-4">
                            <div className="col-4-lg col-12-xs">
                                <div className="card custom-card-bg p-4">
                                    <p className="custom-text fw-md text-center font-xl">Free</p>
                                    <p className="custom-sub-text text-center mt-2">The free plan is for personal use, and you can host up to 10 projects, with a cluster size of 1GB and an additional free 3GB of database.</p>
                                    <ul>
                                        <li><p className="custom-text font-lg pt-4"><span className="fw-md">Projects:</span><span className="pl-2">10</span></p></li>
                                        <li><p className="custom-text font-lg pt-2"><span className="fw-md">Clutter Size:</span><span className="pl-2">1GB</span></p></li>
                                        <li><p className="custom-text font-lg pt-2"><span className="fw-md">Data Center Options:</span><span className="pl-2">IN, Pondicherry</span></p></li>
                                        <li><p className="custom-text font-lg pt-2"><span className="fw-md">Payment Methods:</span><span className="pl-2">Crypto, Cards, Net Banking, UPI</span></p></li>
                                        <li><p className="custom-text font-lg pt-2"><span className="fw-md">Free Trial:</span><span className="pl-2">What?</span></p></li>
                                        <li><p className="custom-text font-lg pt-2"><span className="fw-md">Money Back Guarantee:</span><span className="pl-2">What??</span></p></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-4-lg col-12-xs">
                                <div className="card custom-card-bg p-4">
                                    <p className="custom-text fw-md text-center font-xl">Standard</p>
                                    <p className="custom-sub-text text-center mt-2">The Standard Plan is for small businesses, and you can host up to 100 projects, with a cluster size of 10GB and an additional free 10GB of database.</p>
                                    <ul>
                                        <li><p className="custom-text font-lg pt-4"><span className="fw-md">Projects:</span><span className="pl-2">100</span></p></li>
                                        <li><p className="custom-text font-lg pt-2"><span className="fw-md">Clutter Size:</span><span className="pl-2">10GB</span></p></li>
                                        <li><p className="custom-text font-lg pt-2"><span className="fw-md">Data Center Options:</span><span className="pl-2">IN, Pondicherry</span></p></li>
                                        <li><p className="custom-text font-lg pt-2"><span className="fw-md">Payment Methods:</span><span className="pl-2">Crypto, Cards, Net Banking, UPI</span></p></li>
                                        <li><p className="custom-text font-lg pt-2"><span className="fw-md">Free Trial:</span><span className="pl-2">3 Days</span></p></li>
                                        <li><p className="custom-text font-lg pt-2"><span className="fw-md">Money Back Guarantee:</span><span className="pl-2">5 Days</span></p></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-4-lg col-12-xs">
                                <div className="card custom-card-bg p-4">
                                    <p className="custom-text fw-md text-center font-xl">Premium</p>
                                    <p className="custom-sub-text text-center mt-2">The Premium Plan is for large businesses, and you can host up to 1000 projects, with a cluster size of 100GB and an additional free 100GB of database.</p>
                                    <ul>
                                        <li><p className="custom-text font-lg pt-4"><span className="fw-md">Projects:</span><span className="pl-2">1000</span></p></li>
                                        <li><p className="custom-text font-lg pt-2"><span className="fw-md">Clutter Size:</span><span className="pl-2">100GB</span></p></li>
                                        <li><p className="custom-text font-lg pt-2"><span className="fw-md">Data Center Options:</span><span className="pl-2">IN, Pondicherry</span></p></li>
                                        <li><p className="custom-text font-lg pt-2"><span className="fw-md">Payment Methods:</span><span className="pl-2">Crypto, Cards, Net Banking, UPI</span></p></li>
                                        <li><p className="custom-text font-lg pt-2"><span className="fw-md">Free Trial:</span><span className="pl-2">5 Days</span></p></li>
                                        <li><p className="custom-text font-lg pt-2"><span className="fw-md">Money Back Guarantee:</span><span className="pl-2">7 Days</span></p></li>
                                    </ul>
                                </div>
                            </div>
                            <p className="custom-text font-lg text-center mt-2">{`Thanks to our new build release, comka AI, It auto allocates servers for general and premium users, So you don't have to worry about server overload.`}</p>
                        </div>

                        <p className="custom-color font-xl fw-md text-center mt-4">Student,</p>
                        <p className="custom-color font-xl fw-md text-center">Government Discounts.</p>
                        <div className="text-center mt-4">
                            <p className="custom-text font-lg">We are committed to providing the best high-quality, effective database for completely self-managing data.</p>
                            <p className="custom-text font-lg">We are committed to helping modern students in modern ways. You can get a premium plan for a 50% discount or a standard plan absolutely free.</p>
                            <Link href={"/contact"}><button className='custom-btn-rounded pl-5 pr-5 pt-2 pb-2 white mt-4'>Get verified as a student</button></Link>
                        </div>

                        <p className="custom-color font-xl fw-md text-center mt-4">Investing</p>
                        <div className="text-center mt-4">
                            <p className="custom-text font-lg">We are looking for investors to help us expand our services to the most remote parts of the world.</p>
                            <p className="custom-text font-lg">When you are investing with us, you get access to:</p>
                            <ul className="fw-md mt-4">
                                <li><p className="custom-sub-text font-lg">Our platinum tier plan for free.</p></li>
                                <li><p className="custom-sub-text font-lg">Early access to our new hosting platform.</p></li>
                                <li><p className="custom-sub-text font-lg">Unlimted storage.</p></li>
                                <li><p className="custom-sub-text font-lg">Unlimted data transfers.</p></li>
                                <li><p className="custom-sub-text font-lg">Premiium servers with 100% uptime.</p></li>
                                <li><p className="custom-sub-text font-lg">1 free security service software, 1 free data management software.</p></li>
                                <li><p className="custom-sub-text font-lg">2 website connection services.</p></li>
                                <li><p className="custom-sub-text font-lg">5 swags and hounor gift services and access to management meetings held.</p></li>
                                <li><p className="custom-sub-text font-lg">Shout out, Branding in our site.</p></li>
                                <li><p className="custom-sub-text font-lg">+ many more.</p></li>
                            </ul>
                            <Link href={"/users/invest"}><button className='custom-btn-rounded pl-5 pr-5 pt-2 pb-2 white mt-4'>Start investing with us</button></Link>
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
 
export default databases;