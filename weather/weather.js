

// function myFun(result){
//     var cityName = result.name;
//     alert("当前定位城市:"+cityName);
//
// }
// var myCity = new BMap.LocalCity();
// myCity.get(myFun);

//
// navigator.geolocation.getCurrentPosition(function(position) {
//     var longitude=position.coords.longitude;
//     var latitude=position.coords.latitude;
//     longitude=longitude.toFixed(4);
//     latitude=latitude.toFixed(4);
//     $.get("http://weixin.jirengu.com/weather/cityid?location="+String(longitude)+":"+String(latitude),test);
//
//     function test(data) {
//         alert(JSON.stringify(data))
//         var cityId=data.results[0].id;
//         $("#location").html(data.results[0].name);
//         $.get("https://weixin.jirengu.com/weather/now?cityid="+cityId, wea)
// function wea(temp) {
//     $("#temperature").html(temp.weather[0].now.temperature);
// }
//     }
//
// });
//'https://api.wunderground.com/api/686a817dcd0a4281/geolookup/conditions/q/' + position.coords.latitude + ',' + position.coords.longitude + '.json',

    navigator.geolocation.getCurrentPosition(function(position) {
        $.get('https://api.wunderground.com/api/686a817dcd0a4281/geolookup/conditions/q/' + position.coords.latitude + ',' + position.coords.longitude + '.json',test);

        function test(data) {
            alert(JSON.stringify(data));

            $("#location").html(data.location.city + ', ' + data.location.country_name);
            $("#temperature").html(data.current_observation.temp_c);


        }

    });



// {"results":
//     [{"id":"WTMKQ069CCJ7",
//         "name":"杭州",
//         "country":"CN",
//         "path":"杭州,杭州,浙江,中国","timezone":"Asia/Shanghai","timezone_offset":"+08:00"}]}


// {"status":"OK",
//     "weather":
//     [{"city_name":"杭州",
//         "city_id":"CHZJ000000",
//         "last_update":"2018-01-27T17:00:00+08:00",
//         "now":
//             {"text":"雨夹雪",
//                 "code":"20",
//                 "temperature":"0",
//                 "feels_like":"-2",
//                 "wind_direction":"东北",
//                 "wind_speed":"7.56",
//                 "wind_scale":"2",
//                 "humidity":"94","visibility":"2.80","pressure":"1019","pressure_rising":"未知","air_quality":{"city":{"aqi":"52","pm25":"36","pm10":"44","so2":"11","no2":"60","co":"0.850","o3":"13","last_update":"2018-01-27T15:00:00+08:00","quality":"良"},"stations":null},"alarms":[]},"today":{"sunrise":"06:54 AM","sunset":"05:31 PM","suggestion":{"dressing":{"brief":"寒冷","details":"天气寒冷，建议着厚羽绒服、毛皮大衣加厚毛衣等隆冬服装。年老体弱者尤其要注意保暖防冻。"},"uv":{"brief":"最弱","details":"属弱紫外线辐射天气，无需特别防护。若长期在户外，建议涂擦SPF在8-12之间的防晒护肤品。"},"car_washing":{"brief":"不宜","details":"不宜洗车，未来24小时内有雪，如果在此期间洗车，雪水和路上的泥水可能会再次弄脏您的爱车。"},"travel":{"brief":"一般","details":"风稍大，稍冷，有降雪，旅游指数一般，但做好保暖措施还是可以出去欣赏雪景的，出行请注意携带雨具。"},"flu":{"brief":"易发","details":"天冷风大且空气湿度大，易发生感冒，请注意适当增加衣服，加强自我防护避免感冒。"},"sport":{"brief":"较不宜","details":"有降雪，推荐您在室内进行低强度运动；若坚持户外运动，请选择合适运动并注意保暖。"},"restriction":{"brief":"周末不限行","details":""}}},"future":[{"date":"2018-01-27","high":"1","low":"-1","day":"周六","text":"中雪/雨夹雪","code1":"23","code2":"20","cop":"","wind":"风力4级"},{"date":"2018-01-28","high":"2","low":"-2","day":"周日","text":"雨夹雪/小雪","code1":"20","code2":"22","cop":"","wind":"风力3级"},{"date":"2018-01-29","high":"3","low":"-4","day":"周一","text":"多云/多云","code1":"4","code2":"4","cop":"","wind":"风力3级"},{"date":"2018-01-30","high":"4","low":"-2","day":"周二","text":"阴/雨夹雪","code1":"9","code2":"20","cop":"","wind":"风力2级"},{"date":"2018-01-31","high":"5","low":"-3","day":"周三","text":"小雪/多云","code1":"22","code2":"4","cop":"","wind":"风力2级"},{"date":"2018-02-01","high":"5","low":"-4","day":"周四","text":"晴/晴","code1":"0","code2":"1","cop":"","wind":"风力2级"},{"date":"2018-02-02","high":"7","low":"-2","day":"周五","text":"晴/晴","code1":"0","code2":"1","cop":"","wind":"风力2级"},{"date":"2018-02-03","high":"2","low":"-4","day":"周六","text":"多云/多云","code1":"4","code2":"4","cop":"","wind":"风力3级"},{"date":"2018-02-04","high":"4","low":"-3","day":"周日","text":"晴/多云","code1":"0","code2":"4","cop":"","wind":"风力2级"},{"date":"2018-02-05","high":"6","low":"-1","day":"周一","text":"多云/多云","code1":"4","code2":"4","cop":"","wind":"风力2级"}]}]}