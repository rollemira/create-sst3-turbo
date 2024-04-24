import React from "react";
import LottieView from "lottie-react-native";

import * as successAnimation from "../../data/success_lottie.json";

export const Success = () => {
  return (
    <LottieView
      source={successAnimation}
      loop={false}
      autoPlay={true}
      style={{ height: 375, width: 375 }}
    />
  );
};
