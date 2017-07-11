/**
 * Created by syk on 17/6/29.
 */
module.exports = function (req,res) {
    var body = req.body;
    console.log(req.body);
    res.send(JSON.stringify(req.body));
    // if (!req.session) {
    //     if (body.account == 'syk' && body.password == '123') {
    //         req.session.user = {
    //             account : req.body.account,
    //             password: req.body.password
    //         };
    //         res.send({
    //             code:0,
    //             data:'登录成功'
    //         });
    //     }else {
    //         res.send({
    //             code:0,
    //             data:'登录失败'
    //         });
    //     }
    // }else {
    //     console.log(req.session.user);
    // }

};