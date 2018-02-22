 var json_boject = [{"title":"—Whitney Hess",
               "content":"It looks good, is the worst feedback you can get."
               },
    {
        "title":"—WuChao",
        "content":"美好的世界不是一蹴而就的，是经过一代又一代人的努力，一点一点完善的."
    },
    {
    "title" : "—yadi",
    "content": "Yadi loves Wuchao."
    },
 {
     "title" : "—长者",
     "content": "Too young, too simple, sometimes naive."
 },
    ];



$(document).ready(function(){
    $("#button").on("click", function(){
        //json_object = JSON.parse(json_str);
        var num;

        num = Math.floor(Math.random() * (4));
        console.log(num);
            $("#sentence").html(json_boject[num].content);
            $("#auther").html(json_boject[num].title);
            $("#twitter").attr("href", "https://twitter.com/intent/tweet?text="+json_boject[num].content+"&hashtags=quote&via="+json_boject[num].title);
        });

    });
