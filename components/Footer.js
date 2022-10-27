import Link from "next/link";

const Footer = () => {
    return (
        <>
            <div className='row'>
                <div className="col-6-md col-12-xs">
                    <p className='custom-text font-xl'><a href="mailto:broken.contact.1211@gmail.com" className='custom-color transition-base custom-sub-text-hover display-f align-i-center md-justify-start xs-justify-center'><span className="pointer">Send an email</span><span className="material-symbols-outlined font-xl pl-2">north_east</span></a></p>
                </div>
                <div className="col-6-md col-12-xs md-text-left xs-text-center xs-mt-4 md-mt-0">
                    <div className="row ml-1 gap-1">
                        <div className="col-6-xs"><p className='font-lg'><a href='https://twitter.com/Springreenoff' target="_blank" rel="noreferrer" className='custom-color transition-base custom-text-hover'>Twitter</a></p></div>
                        <div className="col-6-xs"><p className='font-lg'><a href='https://www.instagram.com/springreenoff/' target="_blank" rel="noreferrer" className='custom-color transition-base custom-text-hover'>Instagram</a></p></div>
                        <div className="col-6-xs"><p className='font-lg'><a href='https://calendly.com/rohithaditya' target="_blank" rel="noreferrer" className='custom-color transition-base custom-text-hover'>Calendly</a></p></div>
                        <div className="col-6-xs"><p className='font-lg'><a href='https://github.com/sprin-g-reen' target="_blank" rel="noreferrer" className='custom-color transition-base custom-text-hover'>Github</a></p></div>
                    </div>
                </div>
            </div>
            <div>
                <p className="font-lg mt-3 text-center"><span>©</span><span className="pl-1">2022 SprinVgreen</span></p>
                <p className="font-lg pt-2 text-center"><Link href={"https://sprin-g-reen.github.io/trc-priv/trc.html"}><span className="custom-text pointer">Terms And Conditions</span></Link> | <Link href={"https://sprin-g-reen.github.io/trc-priv/priv.html"}><span className="custom-text pointer">Privacy Policy</span></Link> | <Link href={""}><span className="custom-text pointer">Legal</span></Link></p>
            </div>
        </>
    );
}
 
export default Footer;