/**
 * Created by zhe-he.
 */
const fs = require('fs');
const express=require('express');
const bodyParser=require('body-parser');
const multerLib=require('multer');
const cookieParser=require('cookie-parser');
const cookieSession=require('cookie-session');
const consolidate=require('consolidate');
var multer=multerLib({dest:'upload'});

var app=express();
app.listen(8888);

//使用中间件
app.use(bodyParser.urlencoded({extended:false}));
app.use(multer.any());
app.use(cookieParser());
app.use(cookieSession({
    name:'test-session',
    keys:['dev','test'],
    maxAge:20*60*1000
}));

//接口
/*app.use('/',function (req,res){
	// get post file cookie session
	console.log(req.query,req.body,req.files,req.cookies,req.session);
});*/


//静态资源
app.use(express.static(__dirname));

//404
app.use(function(req,res){
	fs.readdir(__dirname+req.url, function (err,data){
		if (err) {
			res.status(404).send('<h1>大大大……大王，不好啦！找不到当前页面</h1>');
		}else{
			var str = '';
			var str2 = '恭迎大王大驾光临！';
			var i=0;
			if(req.url!='/'){
				str += `<li><b>恭 </b><a href="../">恭送大王</a></li>`;
				i=1;
			};
			data.forEach(function (name,index){
				str += `<li><b>${str2.charAt(index+i)||'　'} </b><a href="${req.url+name}">${name}</a></li>`;
			});
			res.send(str);
		};
	});
});