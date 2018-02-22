$(document).ready(function(){
    $("button").click(function(){
        $("p").hide();
    });
});

$(document).ready(function() {
    // 请把你的代码写在这条注释以下

    $("#getMessage").on("click", function(){
        //$(".message").html("Here is the message");
        $.getJSON("/json/cats.json", function(json) {
            json.forEach(function(val) {
                var keys = Object.keys(val);
                html += "<div class = 'cat'>";
                keys.forEach(function(key) {
                    html += "<b>" + key + "</b>: " + val[key] + "<br>";
                });
                html += "</div><br>";
                //html += "<img src = '" + val.imageLink + "'>";
            });
        });
    });
});

