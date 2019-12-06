window.onload = function(){
    let mainContentDiv = document.body;
    let contentDiv = document.getElementById('content');
    var Router = function(name, routes){
    return{
    name:name,
    routes: routes
    }
    };
    
    var myFirstRouter = new Router('myFristRouter',[
    
    ]);
    
    for(l = 0; l < json["nav"].length;l++){
        var contentTranslate = json["nav"][l]["content"];
        if(window[json["nav"][l]["content"]] != null) contentTranslate= window[json["nav"][l]["content"]];
    myFirstRouter.routes.push({
        path:json["nav"][l]["link"],
        name:json["nav"][l]["name"],
        content: contentTranslate
        });

    }
    var currentPath = window.location.pathname;
    var http = new XMLHttpRequest();
    if(currentPath ===linkcheck+"/"){
        contentDiv.innerHTML=homePage;
        auth();
    }else {
        var route = myFirstRouter.routes.filter(function(r) {
            return r.path === linkcheck+currentPath;
        })[0];
        if(route){
            contentDiv.innerHTML=route.content;
        }else{
            mainContentDiv.innerHTML = "BAd Web";
        }
        
    }
        var navbar = document.getElementsByClassName("link");
            for (var s = 0; s < navbar.length; s++) {
              navbar[s].addEventListener("click", function() {
                    var current_nav = document.getElementsByClassName("active");
                    current_nav[0].className = current_nav[0].className.replace(" active", "");
                    this.className += " active";
                    var stringname = String(this.name);
                    var route = myFirstRouter.routes.filter(function(r) {
                        return r.path === linkcheck+stringname;
                    })[0];
                    if(stringname ===linkcheck+"/"){
                        contentDiv.innerHTML=homePage;
                            auth();
                    }else{
                        contentDiv.innerHTML = route.content;
                    }
                   
                    let state = { 'page_id': 1, 'user_id': 5 }
                    let titles = ''
                    let url = 'http://127.0.0.1:3000'+ linkcheck+stringname; 
                    history.pushState(state, titles, url)
                  });
            }
    }