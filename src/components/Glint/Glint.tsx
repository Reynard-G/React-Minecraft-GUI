import React from "react";
import GlintGif from "@assets/glint-160x160.gif";

export interface GlintProps {
  maskSrc: string;
}

const Glint: React.FC<GlintProps> = ({ maskSrc }) => {
  return (
    <img
      alt="Glint"
      src={GlintGif}
      width="32"
      height="32"
      className="enchanted"
      style={{
        WebkitMaskImage: `url(${maskSrc})`,
        maskImage: `url(${maskSrc})`,
        WebkitMaskSize: `32px 32px`,
        maskSize: `32px 32px`
      }}
    />
  );
};

export default Glint;