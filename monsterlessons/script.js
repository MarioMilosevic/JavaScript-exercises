//  Replace Parameters in URL
// – Q1: Write a function to replace parameters in url
const initalUrl = "/posts/:postId/comments/:commentId";

function replaceParamsInUrl(url, optionsArr) {
  const words = url.split("/");
  console.log(words);
  for (let i = 0; i < optionsArr.length; i++) {
    const from = optionsArr[i].from;
    const to = optionsArr[i].to;
    const urlParamIndex = words.findIndex((word) => word.includes(from));
    words[urlParamIndex] = to;
  }
  const updatedWords = words.join("/");
  return updatedWords;
}

const resultUrl = replaceParamsInUrl(initalUrl, [
  { from: "postId", to: "1" },
  { from: "commentId", to: "3" },
]); // /posts/1/comments/3
