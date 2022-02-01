const entryName = "2022.02.01"
const entryPath = "../entries/" + entryName + "/"

fetch(entryPath + "content.txt")
  .then(response => response.text())
  .then(text => {
    console.log(text)
      var md = new Remarkable();
      var htmlText = md.render(text)
      htmlText = htmlText.replaceAll("src=\"./","src=\""+entryPath)
      console.log(htmlText)
      document.getElementById("entry-container").innerHTML=htmlText
    })