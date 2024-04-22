import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

interface AnimationProps {
  opacity?: number;
  y?: number;
  ease?: string;
  duration?: number;
  transform?: string;
}
interface ScrollProps {
  scrub?: number;
}

interface IAnimateGsap {
  target: string;
  animationProps: AnimationProps;
  scrollProps: ScrollProps;
}

export const animateWithGsap = ({
  target,
  animationProps,
  scrollProps,
}: IAnimateGsap) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: "restart reverse restart reverse",
      start: "top 85%",
      ...scrollProps,
    },
  });
};

interface IAnimateGsapTimeline {
  timeline: gsap.core.Timeline; // Defina o tipo como gsap.core.Timeline
  rotationRef: React.MutableRefObject<any>; // Certifique-se de que a referência de rotação tenha o tipo correto
  rotationState: number;
  firstTarget: string;
  secondTarget: string;
  animationProps: AnimationProps;
}

export const animateWithGsapTimeline = ({
  timeline,
  rotationRef,
  rotationState,
  firstTarget,
  secondTarget,
  animationProps,
}: IAnimateGsapTimeline) => {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: "power2.inOut",
  });

  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );

  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );
};
