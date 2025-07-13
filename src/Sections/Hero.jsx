import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { useMaskSettings } from "../../constants";
import ComingSoon from "./ComingSoon";

const Hero = () => {
  const { initialMaskPos, initialMaskSize, maskSize } = useMaskSettings();

  useGSAP(() => {
    gsap.set(".mask-wrapper", {
      maskPosition: initialMaskPos,
      maskSize: initialMaskSize,
    });

    gsap.set(".mask-logo", { marginTop: "-100vh", opacity: 0 });

    gsap.set(".entrance-message", { marginTop: "0vh" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        scrub: 2.5,
        end: "+=200%",
        pin: true,
      },
    });

    tl.to(".fade-out", { opacity: 0, ease: "power1.inOut" })
      .to(".scale-out", { scale: 1, ease: "power1.inOut" })
      .to(".mask-wrapper", { maskSize, ease: "power1.inOut" }, "<")
      .to(".mask-wrapper", { opacity: 0 })
      .to(
        ".overlay-logo",
        {
          opacity: 1,
          onComplete: () => {
            gsap.to(".overlay-logo", { opacity: 0 });
          },
        },
        "<"
      )
      .to(
        ".entrance-message",
        {
          duration: 1,
          ease: "power1.inOut",
          maskImage:
            "radial-gradient(circle at 50% 0vh, black 50%, transparent 100%)",
        },
        "<"
      );

    // Additional subtle animations
    // Pulsing effect for play button
    gsap.to(".play-img", {
      scale: 1.05,
      duration: 1.5,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
      delay: 1,
    });

    // Subtle rotation for trailer logo
    gsap.to(".trailer-logo", {
      rotation: 1,
      duration: 3,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
      delay: 2,
    });

    // Hover animations for play button
    const playButton = document.querySelector(".play-img");
    if (playButton) {
      playButton.addEventListener("mouseenter", () => {
        gsap.to(playButton, {
          scale: 1.2,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      playButton.addEventListener("mouseleave", () => {
        gsap.to(playButton, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    }
  });

  return (
    <section className="hero-section">
      <div className="size-full mask-wrapper">
        <img
          src="/images/hero-bg.webp"
          alt="background"
          className="scale-out"
        />
        <img
          src="/images/hero-text.webp"
          alt="hero-logo"
          className="title-logo fade-out"
        />
        <img
          src="/images/watch-trailer.png"
          alt="trailer"
          className="trailer-logo fade-out"
        />
        <div className="play-img fade-out cursor-pointer">
          <img src="/images/play.png" alt="play" className="w-7 ml-1" />
        </div>
      </div>

      <div>
        <img
          src="/images/big-hero-text.svg"
          alt="logo"
          className="size-full object-cover mask-logo"
        />
      </div>

      <div className="fake-logo-wrapper">
        <img src="/images/big-hero-text.svg" className="overlay-logo" />
      </div>

      <ComingSoon />
    </section>
  );
};

export default Hero;
