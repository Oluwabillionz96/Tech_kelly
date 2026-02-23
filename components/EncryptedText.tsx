import { useEffect, useState } from "react";

interface EncryptedTextProps {
  text: string;
  className?: string; // For styling (e.g., gradient text)
  interval?: number; // Speed of the animation
}

const CYRILLIC_CHARS =
  "абвгдежзийклмнопрстуфхцчшщъыьэюяАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
const ENGLISH_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";

const ALL_CHARS = CYRILLIC_CHARS + ENGLISH_CHARS + NUMBERS;

export default function EncryptedText({
  text,
  className = "",
  interval = 50,
}: EncryptedTextProps) {
  const [displayText, setDisplayText] = useState("");

  /* 
    The animation works by iterating through the text.
    For each frame:
    - Characters before the 'iteration' index are solved (displayed correctly).
    - Characters at or after 'iteration' are randomized from a set of characters.
    - The 'iteration' value increases slowly (e.g., +1/3 per frame) to control speed.
  */
  useEffect(() => {
    let iteration = 0;

    const intervalId = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }

            // Preserve spaces to maintain word structure during animation
            if (char === " ") return " ";

            // Return a random character from the available sets
            // Mixing Cyrillic, English, and Numbers for a "matrix/hacker" feel

            return ALL_CHARS[Math.floor(Math.random() * ALL_CHARS.length)];
          })
          .join(""),
      );

      // Increment iteration.
      // 1/3 means it takes 3 ticks (frames) to solve one character,
      // giving a "scanning" effect rather than instant reveal.
      if (iteration < text.length) {
        iteration += 1 / 3;
      } else {
        // Once completed, clear interval and ensure final text is set perfectly
        clearInterval(intervalId);
        setDisplayText(text);
      }
    }, interval);

    return () => clearInterval(intervalId);
  }, [text, interval]);

  return (
    <span className={className} aria-label={text}>
      {displayText}
    </span>
  );
}
