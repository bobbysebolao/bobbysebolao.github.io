console.log("webmentions.js is working");
const thisUrl = window.location;
const postUrl = thisUrl.protocol + "//" + thisUrl.host + thisUrl.pathname
console.log("SKRAAA", postUrl);

fetch(`https://webmention.io/api/mentions.jf2?target=${postUrl}`)
.then(res => {
  console.log("The webmentions data: ", res)
})
