import { Slider } from "antd";
import React, { useState } from "react";

type Props = {
  setN: (N: number) => void;
};

const GranularitySlider = ({ setN }: Props) => {
  const onChange = (newValue: number) => {
    setN(newValue);
  };

  return <Slider defaultValue={25} min={1} max={100} onChange={onChange} />;
};

export default GranularitySlider;
