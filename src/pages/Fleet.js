import React, { useState, useContext } from "react";
import { fleet } from "../boats/boats";
import rightArrow from "../icons/rightArrow.svg";
import Reveal from "../components/Reveal";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import { Portfolio } from "../context";

export default function Fleet() {
  const { motionMenu } = useContext(Portfolio);
  const history = useHistory();
  const [load, setLoad] = useState(false);
  const ease = [0.65, 0.05, 0.36, 1];

  const hoverVariants = {
    parent: {
      initial: { opacity: 1 },
      animate: { opacity: 1 },
      hover: { opacity: 1 },
      tap: { opacity: 1 },
    },
    overlay: {
      initial: {
        y: "100%",
        transition: { duration: 0.8, ease: ease },
      },
      animate: { y: "80%", transition: { duration: 0.6, ease: ease } },
      hover: {
        y: "0%",
        transition: { duration: 0.8, ease: ease },
      },
      tap: {
        y: "0%",
        transition: { duration: 0.8, ease: ease },
      },
      exit: {
        y: "100%",
        transition: { duration: 0.6, ease: ease },
      },
    },
    title: {
      initial: { paddingTop: 0, transition: { duration: 0.8, ease: ease } },
      animate: { paddingTop: 0, transition: { duration: 0.8, ease: ease } },
      hover: { paddingTop: 40, transition: { duration: 0.8, ease: ease } },
      tap: { paddingTop: 40, transition: { duration: 0.8, ease: ease } },
    },
    text: {
      initial: { skewY: 5, scaleY: 0 },
      animate: { skewY: 5, scaleY: 0 },
      hover: (i) => ({
        skewY: 0,
        scaleY: 1,
        transition: { duration: 0.4, delay: 0.4 + 0.2 * i, ease: ease },
      }),
    },
  };
  function handleClick(e) {
    const link = e.target.getAttribute("name").toLowerCase();
    history.push(`/fleet/${link}`);
  }
  function handleTap(e) {
    const link = e.target.getAttribute("name").toLowerCase();
    history.push(`/fleet/${link}`);
  }

  return (
    <motion.main id="fleet" className="grid" style={{ y: motionMenu }}>
      <section className="text-content">
        <Reveal delay={0.5}>
          <h2>Fleet</h2>
        </Reveal>
        <Reveal delay={0.5}>
          <p>
            A unique blue cruise experience on the magnificent bays and Greek
            islands of the Aegean and Mediterranean Sea
          </p>
        </Reveal>
        <Reveal delay={0.5}>
          <p>
            A unique blue cruise experience on the magnificent bays and Greek
            islands of the Aegean and Mediterranean Sea a unique blue cruise
            experience on the magnificent bays and Greek islands of the Aegean
            and Mediterranean Sea
          </p>
        </Reveal>
      </section>
      <section className="visual-content">
        {fleet.map((item, index) => (
          <div key={index} className="yacht-card">
            <img src={item.coverImage} />
            <Reveal direction={-1} delay={1.5} complete={setLoad}>
              <div className="overlay"></div>
            </Reveal>
            <motion.div
              className="yacht-features"
              name={item.name}
              initial="initial"
              animate={load ? "animate" : "initial"}
              exit="exit"
              whileHover="hover"
              onTap={(e) => handleTap(e)}
              variants={hoverVariants.parent}
            >
              <motion.div
                className="feature-container"
                variants={hoverVariants.overlay}
              >
                <motion.h1
                  className="container-title"
                  variants={hoverVariants.title}
                >
                  {item.name}
                </motion.h1>
                <motion.h3 variants={hoverVariants.text} custom={0}>
                  {item.subTitle}
                </motion.h3>
                <motion.p
                  name={item.name}
                  onClick={(e) => handleClick(e)}
                  variants={hoverVariants.text}
                  custom={1}
                >
                  View this boat{" "}
                  <span>
                    <img src={rightArrow} alt="rightArrow" />
                  </span>
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        ))}
      </section>
    </motion.main>
  );
}