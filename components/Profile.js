import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
// store
import { collection, doc, onSnapshot, orderBy, query, QuerySnapshot, updateDoc } from "firebase/firestore";
import { db } from '../firebase/clientApp';
import Link from "next/link";

const Profile = () => {

    // access firestore
    const [data, setData] = useState([]);

    useEffect(() => {
        const collectionRef = collection(db, "users");

        const q = query(collectionRef, orderBy("uid"));

        const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
            setData(QuerySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.number })));
        });
        return unsubscribe;

    }, [])

    
    const [invest, setInvest] = useState([]);

    useEffect(() => {
        const collectionRef = collection(db, "investments");

        const q = query(collectionRef, orderBy("date", "asc"));
        
        const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
            setInvest(QuerySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.number })));
        });
        return unsubscribe;

    }, [])

    // access auth
    const { user } = useAuth()
    const currentUser = data.filter(data => user.uid === data.uid);

    return (
        <>
            {
                currentUser.map((user) => (
                    <div key={user.id}>
                        <div className="mt-4">
                            <p className="custom-text font-lg text-uppercase fw-bold">Profile</p>
                            <p className="custom-text lg-font-xl-5 md-font-xl-2 xs-font-xl fw-bold pt-1">{user.username}</p>
                            <p className="custom-text fw-md pt-1">Created on: {user.created}</p>
                        </div>

                        <div className="mt-6">
                            <p className="custom-text lg-font-xl xs-font-lg fw-bold">Your Investments</p>
                            <div className="custom-on-main-bg p-3 mt-3 lg-ml-3 lg-mr-3 xs-ml-0 xs-mr-0 shadow-base br-base">
                                <div className="lg-display-b xs-display-n">
                                    <div className="row gap-2">
                                        <div className="col-2-lg">
                                            <p className="lg-font-lg xs-font-md fw-md custom-text">S.No</p>
                                        </div>
                                        <div className="col-2-lg">
                                            <p className="lg-font-lg xs-font-md fw-md custom-text">Amount</p>
                                        </div>
                                        <div className="col-2-lg">
                                            <p className="lg-font-lg xs-font-md fw-md custom-text">Type</p>
                                        </div>
                                        <div className="col-2-lg">
                                            <p className="lg-font-lg xs-font-md fw-md custom-text">Value</p>
                                        </div>
                                        <div className="col-4-lg">
                                            <p className="lg-font-lg xs-font-md fw-md custom-text">Invested For</p>
                                        </div>
                                    </div>
                                    <div className="row gap-2 mt-2">
                                        {
                                            invest.map(inv => {
                                                return(
                                                    inv.uid === user.uid ? (
                                                        <>
                                                            <div className="col-2-lg">
                                                                <p className="lg-font-lg xs-font-md custom-text">{invest.indexOf(inv) + 1}</p>
                                                            </div>
                                                            <div className="col-2-lg">
                                                                <p className="lg-font-lg xs-font-md custom-text">${inv.amount}</p>
                                                            </div>
                                                            <div className="col-2-lg">
                                                                <p className="lg-font-lg xs-font-md custom-text">{inv.type}</p>
                                                            </div>
                                                            <div className="col-2-lg">
                                                                <p className="lg-font-lg xs-font-md custom-text">{inv.value}</p>
                                                            </div>
                                                            <div className="col-4-lg">
                                                                <p className="lg-font-lg xs-font-md custom-text">{inv.for}</p>
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <div>
                                                            <p className="font-lg fw-md custom-text">No Investments</p>
                                                        </div>
                                                    )
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="lg-display-n xs-display-f">
                                    <div className="row gap-2">
                                        <div className="col-12-xs">
                                            <p className="lg-font-lg xs-font-md fw-md custom-text">S.No</p>
                                        </div>
                                        <div className="col-12-xs">
                                            <p className="lg-font-lg xs-font-md fw-md custom-text">Amount</p>
                                        </div>
                                        <div className="col-12-xs">
                                            <p className="lg-font-lg xs-font-md fw-md custom-text">Type</p>
                                        </div>
                                        <div className="col-12-xs">
                                            <p className="lg-font-lg xs-font-md fw-md custom-text">Value</p>
                                        </div>
                                        <div className="col-12-xs">
                                            <p className="lg-font-lg xs-font-md fw-md custom-text">Invested For</p>
                                        </div>
                                    </div>
                                    <div className="row gap-2">
                                        {
                                            invest.map(inv => {
                                                return(
                                                    inv.uid === user.uid ? (
                                                        <>
                                                            <div className="col-12-xs">
                                                                <p className="lg-font-lg xs-font-md custom-text">{invest.indexOf(inv) + 1}</p>
                                                            </div>
                                                            <div className="col-12-xs">
                                                                <p className="lg-font-lg xs-font-md custom-text">${inv.amount}</p>
                                                            </div>
                                                            <div className="col-12-xs">
                                                                <p className="lg-font-lg xs-font-md custom-text">{inv.type}</p>
                                                            </div>
                                                            <div className="col-12-xs">
                                                                <p className="lg-font-lg xs-font-md custom-text">{inv.value}</p>
                                                            </div>
                                                            <div className="col-12-xs">
                                                                <p className="lg-font-lg xs-font-md custom-text">{inv.for}</p>
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <div>
                                                            <p className="font-lg fw-md custom-text">No Investments</p>
                                                        </div>
                                                    )
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="display-f justify-center">
                                <Link href={"/users/invest"}><button className='custom-btn-rounded pl-5 pr-5 pt-2 pb-2 white mt-4'>Invest!</button></Link>
                            </div>
                        </div>
                    </div>
            ))}
        </>
    );
}
 
export default Profile;