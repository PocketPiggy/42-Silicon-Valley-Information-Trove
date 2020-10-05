import React from "react";

export default ({ content }) => (
  <div>
    <h1>{content.title}</h1>
    <p>As a test, does this show up in source?</p>
    <br />
    <br />
    <br />
    <p>{content.p1}</p>
  </div>
);

export async function getStaticProps(content) {
  console.log(content);
  return {
    props: {
      content: {
        title: "42 Silicon Valley information",
        p1: "What about this one? I'm not sure, I'd like to think...no.",
      },
    },
  };
}
