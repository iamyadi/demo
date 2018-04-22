$(document).ready(function () {

    var channels = ["ESL_SC2", "OgamingSC2", "cretetion",
        "freecodecamp", "storbeck", "habathcx"]
function getChannelsInfo() {
    channels.forEach(function (channel) {
        function makeURL(channel) {
            return 'https://wind-bow.gomix.me/twitch-api/streams/' + channel + '?callback=?';
        }
        $.getJSON(makeURL(channel),function (data) {
            var status;
            if(data.stream === null || data.stream === undefined){
                status = 'offline';
            }else{
                status = "online"
            };
            $.getJSON(makeURL(channel),function () {
                var logo = data.logo != null ? data.logo:"https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F",
                    linkName = 'https://www.twitch.tv/'+channel;
                // debugger
                var item = '<li class=\"person '+status+'\">'+
                    '<div class="divOne"><span><img src='+logo+
                    'alt="上海鲜花港 - 郁金香" /></span>'+
                    '<span class="name">'+
                    '<a href='+linkName+' target=_blank>'+channel+'</a >'+
                    '</span>'+
                    '<span class="status">'+status+'</span></div>'+
                    '</li>';
                $('.content').append(item)
                }

            );
        })

    })
}

getChannelsInfo();
    $('.allChannel').click(
        function () {
            console.log("allChannel");
            $('li').show()
        }
    );
    $('.onlineChannel').click(
        function () {
            console.log("onlineChannel");
            $('li').show();
            $('.offline').hide();
            // $('li').hide("person offline");
        }
    );
    $('.offlineChannel').click(
        function () {
            console.log("offlineChannel");
            $('li').show();
            $('.online').hide()
            // $('li').hide("person online");
        }
    );

});