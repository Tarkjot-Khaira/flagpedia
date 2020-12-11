import React, { useState } from "react";
import "./styles.css";

const flagDictionary = {
  "🇮🇳": "India",
  "🇿🇦": "South Africa",
  "🇦🇺": "Australia",
  "🇨🇦": "Canada",
  "🇬🇧": "United Kingdom"
};

var flagsWeKnow = Object.keys(flagDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function flagInputHandler(event) {
    var userInput = event.target.value;
    var meaning = flagDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Sorry, we don't know it";
    }
    setMeaning(meaning);
  }

  function flagClickHandler(flag) {
    var meaning = flagDictionary[flag];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Flags</h1>
      <input
        style={{
          padding: "0.5rem 0.5rem",
          width: "50%",
          borderRadius: "0.5rem",
          marginBottom: "1rem"
        }}
        onChange={flagInputHandler}
      />

      <h2>{meaning}</h2>

      <h3> flags we know</h3>
      <hr />

      {flagsWeKnow.map(function (flag) {
        return (
          <span
            onClick={() => flagClickHandler(flag)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key="flag"
          >
            {flag}
          </span>
        );
      })}
    </div>
  );
}
