import React from "react";
import Gui from "@components/Gui";
import Slot from "@components/Slot";
import Arrow from "../../assets/craftingtable-arrow.webp";
import "./CraftingTable.css";

export interface CraftingTableProps {
  recipe: {
    [key: string]: {
      name: string;
      lore: string[];
      icon: string;
      enchanted?: boolean;
      amount: number;
    };
  };
}

const CraftingTable: React.FC<CraftingTableProps> = ({ recipe }) => {
  const filteredRecipe = Object.fromEntries(
    Object.entries(recipe).filter(([key, value]) => {
      return value.name !== "" && value.icon !== "" && value.amount !== 0;
    })
  );

  if (!filteredRecipe.output || Object.keys(recipe).length === 0) {
    return <div className="error">Recipe is incomplete</div>;
  }

  const craftingGrid = [
    ["A1", "B1", "C1"],
    ["A2", "B2", "C2"],
    ["A3", "B3", "C3"]
  ];

  const output = filteredRecipe.output;

  return (
    <Gui>
      <table>
        <tbody>
          {craftingGrid.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((slot) => (
                <Slot item={filteredRecipe[slot]} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mcui-arrow">
        <img src={Arrow} alt="Arrow" />
        <br />
      </div>
      <table className="output">
        <tbody>
          <tr>
            <Slot item={output} isOutput={true} />
          </tr>
        </tbody>
      </table>
    </Gui>
  );
};

export default CraftingTable;
