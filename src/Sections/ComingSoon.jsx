import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const ComingSoon = () => {
  useGSAP(() => {
    // Entrance animations for ComingSoon elements
    gsap.fromTo(
      ".entrance-logo",
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.5 }
    );

    gsap.fromTo(
      ".gradient-title",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 1 }
    );

    gsap.fromTo(
      ".platform-logos",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 1.5 }
    );

    // Subtle floating animation for the logo
    gsap.to(".entrance-logo", {
      y: -10,
      duration: 2,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
      delay: 2,
    });

    // Hover animations for platform logos
    const platformLogos = document.querySelectorAll(".platform-logo");
    platformLogos.forEach((logo) => {
      logo.addEventListener("mouseenter", () => {
        gsap.to(logo, {
          scale: 1.1,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      logo.addEventListener("mouseleave", () => {
        gsap.to(logo, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });
  });

  return (
    <section className="entrance-message">
      <div className="h-full col-center gap-10">
        <img src="/images/logo.webp" alt="logo" className="entrance-logo" />

        <div className="text-wrapper">
          <h3 className="gradient-title">
            Coming <br /> May 26th <br /> 2026
          </h3>
        </div>

        <div className="flex-center gap-10 platform-logos">
          <img
            src="/images/ps-logo.svg"
            className="md:w-32 w-20 platform-logo cursor-pointer"
          />
          <img
            src="/images/x-logo.svg"
            className="md:w-52 w-40 platform-logo cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
