


function setSearchEngine(){
    let form = document.querySelector("form")
alert("alert")
console.log("setSearchEngine ran")
 //document.querySelector("input[name=engine]")
//  let engine =document.querySelector("input[name=engine]:checked")


// console.log(engine.value)

// let actions = {
// "google" : "https://www.google.com/search",
// "duckDuckGo" : "https://duckduckgo.com/",
// "bing" : "https://www.bing.com/search",
// "ask": " 	https://www.ask.com/web"
//     };
// console.log(actions.google)

//     if(engine.value==="google"){
//     form.setAttribute("action", "actions.google")
//     }else if (engine.value==="duckDuckGo"){
//       form.setAttribute("action", "actions.duckDuckGo")
//     }else if (engine.value==="bing"){
//       form.setAttribute("action", "actions.bing")
//     }else if (engine.value==="ask"){
//       form.setAttribute("action", "actions.ask")
//     }
  }
  window.addEventListener('load', function(){
   
//let button = document.querySelector("button")
  form.addEventListener("submit", setSearchEngine)

});