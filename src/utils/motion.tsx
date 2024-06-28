import { Variants } from "framer-motion";

export const cardVariantsl: Variants = {
    offscreen: {
      x: -200,
    },
    onscreen: {
      x: 50,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 2,
      }
    }
  };
export const cardVariantsr: Variants = {
    offscreen: {
      x: 200,
    },
    onscreen: {
      x: 0,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 2,
      }
    }
  };

  export const cardVariantsecond: Variants = {
    offscreen: {
      x: -200,
    },
    onscreen: {
      x: 0,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 2,
      }
    }
  };
  