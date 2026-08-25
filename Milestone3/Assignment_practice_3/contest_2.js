function extractBodyContent(htmlString) {
  let start = htmlString.indexOf("<body>") + 6;
  let end = htmlString.indexOf('</body>')

  return htmlString.substring(start, end)
}
let htmlString = `<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Welcome!</h1>
    <p>This is my new React app.</p>
  </body>
</html>`;
console.log(extractBodyContent(htmlString));
