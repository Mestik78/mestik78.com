const entryName = "2022.02.01"
const entryPath = "../entries/" + entryName + "/"

fetch(entryPath + "content.txt")
  .then(response => response.text())
  .then(text => {
    console.log(text)
      text = text.replace("./",entryPath)

      var md = new Remarkable();
      const htmlText = md.render(text)
      document.getElementById("main-container").innerHTML=htmlText
    })