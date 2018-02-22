$(document).ready(function() {
$("#search").click(function () {
    var api="https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=";
    var context=$("input").val();
    $.ajax(
        {
            url: api + context+"&origin=*",
            success: function (data) {
                //alert(JSON.stringify(data));
                pages = data.query.pages;
                var i =0;
                for(var key in pages){
                    i=i+1;
                    if(i>20) break;
                    var node=document.createElement("a");
                    var textnode=document.createTextNode(pages[key].title+pages[key].extract);
                    node.appendChild(textnode);
                    document.getElementById("searchResult").appendChild(node);
                    node.setAttribute("href","https://en.wikipedia.org/?"+"curid=pages[key].pageid");
                    node.setAttribute("target","_blank")
                }
                //$("#searchResult").append({title: query.title, body: v.extract, page: page + v.pageid});

            }
        });
});
});
