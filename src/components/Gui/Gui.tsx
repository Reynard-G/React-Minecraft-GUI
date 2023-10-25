import React from "react";

export interface GuiProps {
  children: React.ReactNode;
}

const Gui: React.FC<GuiProps> = ({ children }) => {
  return <div className="minecraft-inventory">{children}</div>;
};

export default Gui;
