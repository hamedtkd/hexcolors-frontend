import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// export default function HorizontalScroll() {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { portfolioData } from "./data";

//   useGSAP(() => {
//     const container = document.querySelector(".portfolio");
//     if (!container) return;
//     console.log(container?.scrollWidth - document.documentElement.clientWidth);
    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     pin: true,
    //     scrub: 1,
    //     trigger: container,
    //     end: () =>
    //       container?.scrollWidth - document.documentElement.clientWidth,
    //   },
    //   defaults: { ease: "none", duration: 1 },
    // });
//     tl.to(".parallax", { x: 300 })
//       .to(
//         ".panel",
//         {
//           x: () =>
//             -(container?.scrollWidth - document.documentElement.clientWidth),
//         },
//         0
//       )
//       .from(
//         ".secondAn",
//         {
//           opacity: 0,
//           scale: 0.5,
//           duration: 0.2,
//           stagger: {
//             amount: 0.8,
//           },
//         },
//         0
//       );

//     gsap.from(".firstAn", {
//       duration: 1,
//       opacity: 0,
//       scale: 0.5,
//       scrollTrigger: {
//         trigger: container,
//         start: "top 90%",
//         end: "bottom 10%",
//         toggleActions: "play none none reverse",
//       },
//     });
//   }, {});
//   gsap.registerPlugin(ScrollTrigger);

//   return (
//     <section className="section portfolio flex">
//       <h2 className="portfolio_title text-stroke parallax">Portfolio</h2>
//       <div className="panel">
//         <div className="panel_item">
//           <img
//             className="panel_img firstAn"
//             src="https://via.placeholder.com/800x600.jpg"
//           />
//         </div>
//       </div>

//       <div className="panel">
//         <div className="panel_item">
//           <img
//             className="panel_img firstAn"
//             src="https://via.placeholder.com/800x600.jpg"
//           />
//         </div>
//       </div>

//       <div className="panel">
//         <div className="panel_item">
//           <img
//             className="panel_img secondAn"
//             src="https://via.placeholder.com/800x600.jpg"
//           />
//         </div>
//       </div>

//       <div className="panel">
//         <div className="panel_item">
//           <img
//             className="panel_img secondAn"
//             src="https://via.placeholder.com/800x600.jpg"
//           />
//         </div>
//       </div>

//       <div className="panel">
//         <div className="panel_item">
//           <img
//             className="panel_img secondAn"
//             src="https://via.placeholder.com/800x600.jpg"
//           />
//         </div>
//       </div>

//       <div className="panel">
//         <div className="panel_item">
//           <img
//             className="panel_img secondAn"
//             src="https://via.placeholder.com/800x600.jpg"
//           />
//         </div>
//       </div>

//       <div className="panel">
//         <div className="panel_item">
//           <img
//             className="panel_img secondAn"
//             src="https://via.placeholder.com/800x600.jpg"
//           />
//         </div>
//       </div>

//       <div className="panel">
//         <div className="panel_item">
//           <img
//             className="panel_img secondAn"
//             src="https://via.placeholder.com/800x600.jpg"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

function HorizontalScroll({ containerRef }: { containerRef: any }) {
  const slider = useRef<HTMLDivElement>(null);

  const width = 1550;
  useGSAP(
    () => {
      if (width < 1024) return;
      const panels = gsap.utils.toArray(".panel");
    //       const tl = gsap.timeline({
    //   scrollTrigger: {
    //     pin: true,
    //     scrub: 1,
    //     trigger: slider.current ?? ".horizontal-slider-scrolling",
    //     end: () =>
    //               slider.current ? "+=" + (slider.current?.offsetWidth - 2500) : 3260,
    //   },
    //   defaults: { ease: "none", duration: 1 },
    // });
      gsap.to(panels, {
        // xPercent: -200 * (panels.length - panels.length * 0.61),

        // xPercent: -200 * (panels.length - 4.3),
        xPercent: -200 * (panels.length - 3.3),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current ?? ".horizontal-slider-scrolling",
          pin: true,
          scrub: 1,
          // snap: 1 / (panels.length - 1),
          start: "center center",
          end: () =>
            slider.current ? "+=" + (slider.current?.offsetWidth - 2500) : 3260,
          // markers: true,
        },
      });

      // gsap.from(".firstAn", {
      //   duration: 1,
      //   opacity: 0,
      //   scale: 0.5,
      //   scrollTrigger: {
      //     trigger: slider.current ?? ".horizontal-slider-scrolling",
      //     // start: "top 90%",
      //     // end: "bottom 10%",
      //     toggleActions: "play none none reverse",
      //   },
      // });
    },
    
    { scope: containerRef }
  );
  return (
    <>
      <div className="pt-20 container mx-auto relative overflow-hidden">
        <div className="hidden group-hover/portfoilo:block">
          {/* <Cursor onHover={isShowCursor}>
            {isShowCursor && (
              <span className="typo-xl text-center block animate-fade">
                View product
              </span>
            )}
          </Cursor> */}
        </div>
        <div
          ref={slider}
          className="horizontal-slider-scrolling overflow-auto hide-scroll-bar flex lg:min-w-[300vw]  lg:flex-nowrap  2xl:gap-x-24 lg:gap-x-12 gap-x-6 gap-y-12"
        >
          {portfolioData.map((card, key) => (
            <div
              key={key}
              className="min-w-[287px] max-w-[758px]"
            >
              <div className="panel   size-96">{card.description}</div>
            </div>
          ))}
          <div className="absolute bottom-0 left-[15%]"></div>
        </div>
      </div>
    </>
  );
}
export default React.memo(HorizontalScroll);
