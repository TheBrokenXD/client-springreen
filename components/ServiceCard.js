import { useEffect, useState, useRef } from "react";
import Link from 'next/link';

const ServiceCard = ({ link, title, description }) => {

    const modalRef = useRef(null);

    const descHandle = () => {
        modalRef.current.className = "modal";
    }
    const closeRef = () => {
        modalRef.current.className = "modal-hidden";
    }

    return (
        <>
            <div ref={modalRef} className="modal-hidden transition-base">
                <div className="modal-content card black-bg brand-card-bg-gradient">
                    <span className="float-right font-xl pointer custom-main" onClick={closeRef}>&times;</span>
                    <p className="font-xl fw-bold custom-main">Description</p>
                    <p className="custom-on-main pt-2">{description}</p>
                    <div className="display-f justify-end">
                        <Link href={link}><button className='custom-btn-rounded pl-5 pr-5 pt-2 pb-2 white mt-2' onClick={descHandle}>More Info</button></Link>
                    </div>
                </div>
            </div>
                <div className="card custom-card-bg p-4 pointer">
                    <p className='custom-text font-lg fw-md'>{title}</p>
                    <button className='custom-btn-rounded pl-5 pr-5 pt-2 pb-2 white mt-2' onClick={descHandle}>View Info</button>
                </div>
        </>
    );
}
 
export default ServiceCard;