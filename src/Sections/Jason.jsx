import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Jason = () => {
  useGSAP(() => {
    gsap.set(".jason", { marginTop: "-80vh" });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".jason",
          start: "top 90%",
          end: "10% center",
          scrub: 2,
        },
      })
      .to(".first-vd", { opacity: 0, duration: 1, ease: "power1.inOut" });

    gsap.to(
      ".jason .img-box",
      {
        scrollTrigger: {
          trigger: ".json",
          start: "top center",
          end: "80% center",
          scrub: 2,
        },
        y: -300,
        duration: 1,
        ease: "power1.inOut",
      },
      "<"
    );
  });
  return (
    <section className="jason">
      <div className="max-w-lg jason-content">
        <h1>Jason Duval</h1>
        <h2>Json want an easy life, but things just keep getting harder.</h2>
        <p>
          json grew up around grifters and crooks. After a stint in the army
          trying to shale off his troubled teens,he found him self in the Keys
          doing what he knows best, working for local drugs runners. it might be
          time to try something new.
        </p>

        <div className="jason-2">
          <img src="/images/jason-2.webp" alt="" />
        </div>
      </div>

      <div className="space-y-5 mt-96 img-box">
        <div className="jason-1">
          <img src="/images/jason-1.webp" alt="" />
        </div>
        <div className="jason-3">
          <img src="/images/jason-3.webp" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Jason;
