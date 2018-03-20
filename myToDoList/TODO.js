
var toDoModule = (function () {
    //声明变量
    var task_list = [];//里面存的是一个一个item对象，对象有属性。
    var $taskList,$content,$submitBtn,$new,$taskIndex,$deleteIndex;
    //初始化jquery对象
    var initJq = function () {
        $taskList = $(".taskList");
        $content = $(".add-item");
        $submitBtn = $(".btn");
        $new = $(".new");
    };
    //页面初始化，从store中取出item，并渲染
    var initRender = function () {
        $(".new").html("");
        task_list = store.get("task_list");
        var taskHtml = "";
        // if(task_list!=null){
        //     console.log(" task_list "+task_list.length.toString());
        // }
        //把上一行代码取到的数组，页面中。
        if(task_list!=null){
            for (i=task_list.length-1; i>=0;i--){
                var oneItem = '<div class="taskList">'+
                    '<input class="check" type="checkbox"/>'+
                    '<span class="content">'+task_list[i].content+
                    '</span>'+
                    '<span class="fr">'+
                    '<span class="detail">详情</span>'+
                    '<span class="delete">删除</span>'+
                    '</span>'+
                    '</div>';
                taskHtml = taskHtml + oneItem;
            }
            $new.append(taskHtml);
        }
        listenDetail();
        listenDelete();
    };
    //添加功能实现
    var addItem = function () {
        var new_item = {};
        new_item.content = $content.val();
        if(task_list==null){
            task_list = [];
        }
        task_list.push(new_item);
        store.set("task_list",task_list);
        renderNewItem(new_item);//渲染新item方法.
        listenDetail();


    };
    var renderNewItem = function (new_item) {
        var newItem = '<div class="taskList">'+
            '<input class="check" type="checkbox"/>'+
            '<span class="content">'+new_item.content+
            '</span>'+
            '<span class="fr">'+
            '<span class="detail">详情</span>'+
            '<span class="delete">删除</span>'+
            '</span>'+
            '</div>';
        $(newItem).prependTo($new);
        $content.val('');
        listenDelete();


    };
    //添加任务按钮的监听事件,jQuery click事件语法：$().click(function);
    var listenButten = function () {
        $submitBtn.click(function () {
            addItem();
        })
    };
    //页面载入就执行的方法
    var listenDetail = function () {
        $(".detail").click(function () {
            $(".detailBox").show();
            $taskIndex = task_list.length - 1 - $(this).parent().parent().index();
            console.log($taskIndex);
            $(".detail_text").val(task_list[$taskIndex].content);
            $(".comment").val(task_list[$taskIndex].comment);
            $(".dateTime").val(task_list[$taskIndex].dateTime);
        });
    };
    var listenSubmit = function () {
        $(".detail_btn").click(function () {
            var newDataTaskDetail = {};
            newDataTaskDetail.content = $(".detail_text").val();
            newDataTaskDetail.comment = $(".comment").val();
            newDataTaskDetail.dateTime = $(".dateTime").val();
            task_list.splice($taskIndex,1,newDataTaskDetail);
            //task_list[$taskIndex] = newDataTaskDetail;//$.extend(task_list[$taskIndex],newDataTaskDetail);
            store.set("task_list",task_list);
            $(".detailBox").hide();
            initRender();
        })
    };
    var listenDelete = function (event) {
        $(".delete").click(function () {
            $deleteIndex = task_list.length - 1 - $(this).parent().parent().index();
            console.log("###### "+$deleteIndex);

            var r = confirm("确认删除？");
            if(r){
                task_list.splice($deleteIndex,1);
                $(this).parent().parent().remove();
                console.log($deleteIndex);
                store.set("task_list",task_list);
            }
            event.stopPropagation();
        });
    };
    var dateTime = function () {
        $(".dateTime").datepicker({autoHide:true});
    };

    var initModule = function () {
        //store.clear();
        initJq();
        initRender();
        listenButten();
        listenDetail();
        listenSubmit();
        listenDelete();
        dateTime();
    };
    return {
        initModule:initModule
    };
})();

$(function () {
    toDoModule.initModule();
});

//bug1. 没有判断task_list是否为null，因此报出length为undefined，解决：加个if判断，if(task_list!=null)再执行for循环。
//bug2. addItem加入了initModule中，因此，刷新一下，就出来一个空item，解决：删去了addItem，因为addItem只需在butten监听事件中调用就行。
//bug3. 在addItem方法中，task_list在页面刚开始为空，无法用push，因此，需加一个if判断，
//       if(task_list==null){
//       task_list = [];
//       }
//       task_list.push(new_item);