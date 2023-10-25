import { useState, useEffect } from "react";
import { obfuscatedText } from "@constants/obfuscatedText";

const scrambleText = (text: string) => {
  // Define a set of characters to use for obfuscation
  const obfuscationChars = obfuscatedText;

  return text
    .split("") // Split the text into individual characters
    .map((char) => {
      const listLength = obfuscationChars.length;
      // Randomly select an obfuscation character or keep the original character
      const index = Math.floor(Math.random() * listLength);
      return obfuscationChars[index];
    })
    .join(""); // Rejoin the characters into a string
};

const TextScrabler = ({ text }: { text: string }) => {
  const [scrambledText, setScrambledText] = useState(text);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setScrambledText(scrambleText(text));
    }, 70); // Adjust the interval duration as needed

    return () => {
      clearInterval(intervalId);
    };
  }, [text]);

  return scrambledText;
};

export default TextScrabler;
