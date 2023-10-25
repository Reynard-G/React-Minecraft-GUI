import React, { useMemo } from "react";
import TextScrabler from "@lib/TextScrambler";
import { colorStyles, textStyles } from "../../constants/tooltip";
import "./Tooltip.css";

export interface TooltipProps {
  title: string;
  text: string[];
}

const isEmptyArray = (array: string[]) => {
  if (!Array.isArray(array)) {
    return false; // Not an array
  }

  if (array.length === 0) {
    return false; // Empty array
  }

  // Check if every element is empty
  return array.every((item) => item == null || item === "");
};

const Tooltip: React.FC<TooltipProps> = ({ title, text }) => {
  const lines = useMemo(() => text, [text]); // Use useMemo to memoize the 'lines' variable
  return (
    <div className="mctooltip">
      <div className="tooltip-title">{processText(title)}</div>
      {!isEmptyArray(lines) && (
        <div className="tooltip-description">
          {lines.map((line, lineIndex) => (
            <div key={lineIndex}>{processText(line)}</div>
          ))}
        </div>
      )}
    </div>
  );
};

function processText(text: string) {
  const parts: string[] = useMemo(() => {
    const parts = text.match(/&[A-Za-z0-9]?|[^&]+|^\s*$/g);
    return parts || [];
  }, [text]);
  
  if (parts.length > 1 && parts.indexOf("") !== -1) {
    parts.splice(parts.indexOf(""), 1);
  }

  let currentColor: string | null = null;
  let currentTextFormat: string | null = null;

  return parts.map((part, index) => {
    if (part === "&r") {
      currentColor = null;
      currentTextFormat = null;
    } else if (colorStyles[part]) {
      currentColor = colorStyles[part];
    } else if (textStyles[part]) {
      currentTextFormat = textStyles[part];
    } else if (part === "") {
      return <br key={index} />;
    }

    if (part.indexOf("&") === 0) return;

    const styleClasses = [currentColor, currentTextFormat].filter(Boolean);
    const shouldObfuscate = currentTextFormat === "text-obfuscated";

    return (
      <span
        key={index}
        className={styleClasses.join(" ")}
        dangerouslySetInnerHTML={shouldObfuscate ? undefined : { __html: part }}
      >
        {shouldObfuscate ? <TextScrabler text={part} /> : null}
      </span>
    );
  });
}

export default Tooltip;
