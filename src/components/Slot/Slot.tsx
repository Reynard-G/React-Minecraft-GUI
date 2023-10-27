import React, { useState, useEffect } from "react";
import Tooltip from "@components/Tooltip";
import Glint from "@components/Glint";

interface RecipeItem {
  name: string;
  lore?: string[];
  icon: string;
  enchanted?: boolean;
  amount: number;
}

interface TooltipPosition {
  top: number | null;
  left: number | null;
}

export interface SlotProps {
  item: RecipeItem;
  isOutput?: boolean;
}

const Slot: React.FC<SlotProps> = ({ item, isOutput }) => {
  const [tooltipPosition, setTooltipPosition] = useState<TooltipPosition>({
    top: null,
    left: null
  });

  useEffect(() => {
    const updateMousePosition = (e: { clientY: number; clientX: number; }) => {
      setTooltipPosition({ top: e.clientY, left: e.clientX });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  if (!item) return <td className={isOutput ? "slot" : ""} />;

  return (
    <td className={isOutput ? "slot" : ""}>
      {item.amount > 1 && <div className="amount">{item.amount}</div>}
      {item.enchanted && <Glint maskSrc={item.icon} />}
      <img alt="Item Icon" src={item.icon} width="32" height="32" />
      {tooltipPosition.top !== null && tooltipPosition.left !== null && (
        <div
          style={{
            position: "fixed",
            top: `${tooltipPosition.top}px`,
            left: `${tooltipPosition.left}px`,
            zIndex: 1000
          }}
        >
          <Tooltip title={item.name} text={item.lore} />
        </div>
      )}
    </td>
  );
};

export default Slot;
