import Link from "next/link";

const Card = ({ title, description, link }) => {
    return (
        <>
            <Link href={link}><div className='card custom-card-bg custom-notification-hover-bg p-3 pointer'>
                <div className="display-f align-i-center">
                    <p className='font-xl custom-color'>{title}</p>
                    <span className="material-symbols-outlined custom-color font-xl ml-4">north_east</span>
                </div>
                <p className='font-lg custom-text pt-2'>{description}</p>
            </div></Link>
        </>
    );
}
 
export default Card;