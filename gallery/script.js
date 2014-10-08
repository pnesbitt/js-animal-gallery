// Add your code here
$.getJSON("https://mks-frontend-gallery.herokuapp.com/", function(json) {
    for(var i in json) {
        var addHTMLImage = "<div class = 'large-4 small-6 columns";
        
        for(var j in json[i].animals) {
            addHTMLImage += " " + json[i].animals[j];
            
            if($("#" + json[i].animals[j]).length == 0) {
                $(".filters").append("<div class = 'filter-button individual button active' id = '" + json[i].animals[j] + "'>" + json[i].animals[j].charAt(0).toUpperCase() + json[i].animals[j].slice(1).toLowerCase() + "</div>");
            }
        }
        addHTMLImage += "'>\n\t<img src = '" +  json[i].url + "' />\n</div>";
        $(".gallery").append(addHTMLImage);
    } 
}).fail(function() {
    console.log("JSON NOT received.");
});

$(".filters").delegate(".filter-button", "click", function () {
    $(this).toggleClass("active");
    console.log($("." + this.id));
    $("." + this.id).toggle();
    alertify.log("Toggling " + $(this).text());
});
