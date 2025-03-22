import React from "react";
import "../styles/AboutPage.css";
import aboutData from "../data/about";

function formatJSON(jsonObject) {
  const formattedJSON = JSON.stringify(jsonObject, null, 3)
    .split("\n")
    .map((line) => {
      return `<div class="hover:bg-zinc-800 rounded-md p-1"><div class="lg:mr-56">${line
        .replace(/ /g, '<span class="space">·</span>')
        .replace(/"([^"]+)":/g, '<span class="key">"$1"</span>:')
        .replace(
          /"https?:\/\/[^\s"]+"/g,
          (match) =>
            `<a href=${match.slice(1, -1)} target="_blank" class="text-blue-500">${match}</a>`
        )
        .replace(/\b(true|false|null)\b/g, '<span class="bool-value">$1</span>')
        .replace(/([{}])/g, '<span class="curly-brackets">$1</span>')
        .replace(/([[\]])/g, '<span class="square-brackets">$1</span>')}</div></div>`;
    })
    .join("");

  return formattedJSON;
}

function AboutPage() {
  return (
    <div id="about" className="bg-zinc-900 text-white text-xl py-8 font-mono px-2 md:px-0">
      <div className="container mx-auto bg-zinc-800 rounded-md border-b-4 border-gold px-1 py-4">
        <h1 className="text-4xl font-bold border-b-2 pb-2 border-gold pl-2">
          about-me.json
        </h1>
        <pre
          className="p-4 pl-1 overflow-auto break-words whitespace-pre-wrap p-about mx-1 text-xs md:text-xl"
          dangerouslySetInnerHTML={{ __html: formatJSON(aboutData) }}
        ></pre>
      </div>
    </div>
  );
}

export default AboutPage;
