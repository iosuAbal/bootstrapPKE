async function ekarriWebOrria(){
    let orria = await fetch("http://ikasten.io:3000/https://aenui.org/actas/indice_e.html")
    .then(response => response.text())
    .then(text => {
      const parser = new DOMParser();
      const htmlDocument = parser.parseFromString(text, "text/html");
      return htmlDocument.documentElement.querySelector("body");
    })
    console.log(orria)
    //document.write(orria.innerHTML)
    /*fetch("http://ikasten.io:3000/https://aenui.org/actas/indice_e.html")
  .then(response => response.text())
  .then(r => {
      r=r.replace('(src=")', 'src="https://aenui.org/actas/')
      r=r.replace('href="','href="https://aenui.org/actas/')
      document.getElementsByTagName("html")[0].innerHTML=r
  })*/
    let head = document.head.innerHTML
    console.log(head)
    let e = document.getElementById("idLista")
    console.log(e)
    let hasiera = '<div class="container-fluid"><div class="row-fluid">'
    let tamaina = '<div class="col-10">'
    let tamainaAmaiera = '</div>'
    let amaiera = '</div></div>'
    console.log(hasiera + " " + amaiera)

    document.body.innerHTML = document.body.innerHTML + hasiera + tamaina +  orria.innerHTML + tamainaAmaiera + amaiera


    let title = document.querySelector("#idLista > div > a")
    console.log(title)

/*
    let lista = document.querySelectorAll("a:nth-child(2)")
    console.log(lista)
    lista.forEach(e=> e = '<div class="col align-self-center">' + e + '</div>')
*/
}

window.onload=ekarriWebOrria;