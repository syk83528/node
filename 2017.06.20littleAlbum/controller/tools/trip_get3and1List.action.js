/**
 * Created by syk on 17/6/27.
 */
var request = require('request');

module.exports = function (req,res) {
    var param = {
        queryType : "private",
        userId : "45",
        targetId : "594",
        pageNo : "1"
    };
    // request.post('http://www.sosona.com:8443/trip/get3and1List.action', function(err,httpResponse,body){
    //         console.log(JSON.parse(body));
    //         body = JSON.parse(body);
    //         data = body.data;
    //         res.send({
    //             code:0,
    //             data:data
    //         });
    //     }).form({body:JSON.stringify(param)});
    request.post({
        url: 'https://www.sosona.com:8443/trip/get3and1List.action',
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(param)
    }, function(error, response, body) {
        console.log(JSON.parse(body));
        body = JSON.parse(body);
        data = body.data;
        res.send({
            code:0,
            data:data
        })
    });
    // request.post({uri:'https://www.sosona.com:8443/trip/get3and1List.action'},{body:JSON.stringify(param)},(err,response,body)=>{
    //     console.log(JSON.parse(body));
    //     body = JSON.parse(body);
    //     data = body.data;
    //     res.send({
    //         code:0,
    //         data:data
    //     })
    // });
};