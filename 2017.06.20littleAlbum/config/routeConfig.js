/**
 * Created by syk on 17/6/21.
 */
var express = require('express');
module.exports = function(apis) {
    var router = express.Router();

    for (var i = 0;i<apis.length;i++) {
        router[apis[i].method](apis[i].path,apis[i].controller);
        // if (apis[i].method == 'get'){
        //     router.use(apis[i].path,(err,req,res,next)=>{
        //         if (err) {
        //             throw err;
        //         }
        //         res.render(apis[i].controller);
        //     });
        // }else {
        //
        // }

    }

    return router;
};