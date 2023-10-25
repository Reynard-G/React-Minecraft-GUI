import React from "react";

export interface GridProps {
  children: React.ReactNode;
  gridSize: "3x3" | "2x2";
}

const Grid: React.FC<GridProps> = ({ children, gridSize }) => {
  const craftingGrid3x3 = [
    ["A1", "B1", "C1"],
    ["A2", "B2", "C2"],
    ["A3", "B3", "C3"]
  ];
  const craftingGrid2x2 = [
    ["A1", "B1"],
    ["A2", "B2"]
  ];

  const gridToRender = gridSize === "3x3" ? craftingGrid3x3 : craftingGrid2x2;

  return (
    <table>
      <tbody>
        {gridToRender.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map(() => children)}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Grid;
