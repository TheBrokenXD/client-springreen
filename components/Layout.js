import Navbar from "./Navbar";
import { useRef, useEffect, useState, useLayoutEffect } from "react";
import { Router, router, useRouter } from "next/dist/client/router";
// assets
import Transition from "../public/transition.json";
// animation
import Lottie from "lottie-react";
import { motion, AnimatePresence, transform } from "framer-motion";

const Layout = ({ children }) => {

  const router = useRouter();

  const lottieRefContainer = useRef(null);
  const lottieRef = useRef(null);

  const onComplete = () => {
    lottieRefContainer.current.className = "lottie-container hidden";
  }

  useEffect(() => {
    const animateOne = () => {
      lottieRefContainer.current.className = "lottie-container";
      lottieRef.current.playSegments([0, 15], false);
    }

    const animateTwo = () => {
      lottieRef.current.playSegments([15, 31], false);
      setTimeout(() => {
      }, 1000);
    }

    const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    if(width > 1350) {
      router.events.on("routeChangeStart", animateOne);
      router.events.on("routeChangeComplete", animateTwo);
    }

    return () => {
      router.events.off("routeChangeStart", animateOne);
      router.events.off("routeChangeComplete", animateTwo);
    }
  }, [router]);

    return (
      <>
        <Navbar />
        <AnimatePresence exitBeforeEnter>
          <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" exit="pageExit" transition={{ ease: [0.77, 0, 0.18, 1], duration: 0.5 }} variants={{
            pageInitial: { opacity: 0 },
            pageAnimate: { opacity: 1 },
            pageExit: { opacity: 0 },
          }}>
              { children }
          </motion.div>
        </AnimatePresence>
        <div ref={lottieRefContainer} className="lottie-container hidden">
          <Lottie lottieRef={lottieRef} animationData={Transition} loop={false} autoplay={false} onComplete={onComplete} className={"lottiee"} />
        </div>
      </>
    );
}
 
export default Layout;