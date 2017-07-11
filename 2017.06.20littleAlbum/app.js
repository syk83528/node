/**
 * Created by syk on 17/6/20.
 */
// var routers = require('./controller/router');
var express = require('express'),
    path = require('path'),
    session = require('express-session');
var app = express();


var config = require('./config/config'),
    routeConfig = require('./config/routeConfig'),
    routeRequrestApi = require('./config/routeRequrestApi'),
    routeViewsApi = require('./config/routeViewsApi');

//设置模板
app.set("view engine",'ejs');
//设置render查找的ejs目录
app.set('views', path.join(__dirname, "public"));
//设置静态页面
// app.use(express.static("public"));
app.use(express.static(config.staticPath));
//===================== cookie parser =====================
var cookieParser = require('cookie-parser');
app.use(cookieParser());
//===================== session !!! 必须在cookieParser的后面 =====================
app.set('trust proxy', 1);// trust first proxy
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: true }
}));
//===================== body parser =====================
var bodyParser = require('body-parser');
// application/json
app.use(bodyParser.json());
// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));//使用body-parse,req.body自动转为对象
//设置页面路由
app.use('/',routeConfig(routeViewsApi));
//设置api数据处理路由
app.use('/api',routeConfig(routeRequrestApi));
//最后设置一个出错页面
app.use((err,req,res,next)=>{
    // if (!err) {
    //     return next();
    // }
    // if (err) throw err;
   res.status(404).send('err');
});

app.listen(3000,(err)=>{
    if (err) {
        throw err;
    }
    console.log('启动服务器成功,监听3000');
});