import Lottie from "lottie-react";

import animationData from "../../data/success_lottie.json";

export const Success = () => {
  return (
    <Lottie
      animationData={animationData}
      loop={false}
      autoplay={true}
      height={375}
      width={375}
    />
  );
};
