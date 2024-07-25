import React, { useState, useEffect } from "react";

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example"
};

const SpellCheckApp = () => {
  const [inputText, setInputText] = useState("");
  const [suggestion, setSuggestion] = useState("");

  useEffect(() => {
    const words = inputText.split(" ");
    const firstIncorrectWord = words.find(word => customDictionary[word.toLowerCase()]);

    if (firstIncorrectWord) {
      setSuggestion(`Did you mean: ${customDictionary[firstIncorrectWord.toLowerCase()]}?`);
    } else {
      setSuggestion("");
    }
  }, [inputText]);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <textarea
        value={inputText}
        onChange={handleChange}
        placeholder="Type your text here..."
      />
      {suggestion && <p>{suggestion}</p>}
    </div>
  );
};

export default SpellCheckApp;
