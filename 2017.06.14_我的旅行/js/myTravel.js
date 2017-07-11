/**
 * Created by syk on 17/6/14.
 */
$(function () {
    setTimeout(function () {
        $.ajax({
            type: "POST",
            url: "http://www.sosona.cn:8080/trip/get3and1List.action",
            data: {
                "queryType" : "private",
                "userId" : "45",
                "targetId" : "99",
                "pageNo" : "1"
            },
            success: function(data){
                console.log('收到信息');
            }
        });
    },2);
});