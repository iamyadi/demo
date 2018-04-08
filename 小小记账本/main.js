var data = [];
var $inputMessage,$inputMoney,$dateTime,$add;

var initJ = function () {
    $inputMessage = $(".inputMessage");
    $inputMoney = $(".inputMoney");
    $dateTime = $(".dateTime");
    $add = $(".btn");
};
initJ();
var listenBtn = function () {
    $add.click = function () {
        let dataInit = {};
        dataInit.message = $inputMessage.val();
        dataInit.money = $inputMoney.val();
        dataInit.time = $dateTime.val();
        data.push(dataInit);
        store.set("data", data);
        data = store.get("data");
        if (data == null) {
            data = []
        }
    };
};
listenBtn();
console.log(data.toString());
$(".dateTime").datepicker({autoHide:true})

// new Vue({
//     el:'#tableDetail',
//     datas: data,
// })




// components: {
//     'dataRow':{
//         props: ['message','money','time'],
//             template:"<tr><td>{{message}}</td>"+
//         "<td>{{money}}</td>"+
//         "<td>{{time}}</td>"+
//         "<td><button>Delete</button></td></tr>",
//     }
//
// },


// <div id="app">
//     父组件：
// <input v-model="val"><br/>
//     子组件：
// <test v-bind:test-Val="val"></test>
//     </div>
//     <script>
// var vm = new Vue({
//     el: '#app',
//     data: {
//         val: 1
//     },
//     components: {
//         "test": {
//             props: ['testVal'],
//             template: "<input v-model='testVal'/>"
//         }
//     }
// });
// </script>