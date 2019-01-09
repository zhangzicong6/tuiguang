var express = require('express');
var router = express.Router();
var MPModel = require('../model/MiniProgram.js');
var mem = require('../util/mem.js');
var async = require('async');
var http=require('http');

router.get('/', function (req, res, next) {
    const content = '<p style="margin-bottom: 6px;max-width: 100%;min-height: 1em;line-height: 1.7em;box-sizing: border-box !important;word-wrap: break-word !important;"><span style="max-width: 100%;text-indent: 24px;box-sizing: border-box !important;word-wrap: break-word !important;">“嗯嗯……啊……快，快给我……”</span></p><p style="margin-bottom: 6px;max-width: 100%;min-height: 1em;line-height: 1.7em;box-sizing: border-box !important;word-wrap: break-word !important;"><span style="max-width: 100%;text-indent: 24px;box-sizing: border-box !important;word-wrap: break-word !important;">程伟强吃过晚饭，就打算到陈大彪家帮嫂子追帐，陈大彪可是村里的地痞无赖，前些日子以帮忙买种子的借口，骗了他嫂子两千块钱，可刚走到他家院子里，就听到里面传出来一阵诱人的女声。</span></p><p style="margin-bottom: 6px;max-width: 100%;min-height: 1em;line-height: 1.7em;box-sizing: border-box !important;word-wrap: break-word !important;"><span style="max-width: 100%;text-indent: 24px;box-sizing: border-box !important;word-wrap: break-word !important;">难道陈大彪和他媳妇正在干那事儿？</span></p><p style="margin-bottom: 6px;max-width: 100%;min-height: 1em;line-height: 1.7em;box-sizing: border-box !important;word-wrap: break-word !important;"><span style="max-width: 100%;text-indent: 24px;box-sizing: border-box !important;word-wrap: break-word !important;">好奇之下，陈伟强来到窗子前，透过缝隙，朝里面一看，热血嗡的一下，就涌上了脑门。</span></p><p style="margin-bottom: 6px;max-width: 100%;min-height: 1em;line-height: 1.7em;box-sizing: border-box !important;word-wrap: break-word !important;"><span style="max-width: 100%;text-indent: 24px;box-sizing: border-box !important;word-wrap: break-word !important;">太好看了。</span></p><p style="margin-bottom: 6px;max-width: 100%;min-height: 1em;line-height: 1.7em;box-sizing: border-box !important;word-wrap: break-word !important;"><span style="max-width: 100%;text-indent: 24px;box-sizing: border-box !important;word-wrap: break-word !important;">房间里，陈大彪的女人王小翠躺在那里，一只手揉着上面，一只手伸在裙子下面，一脸羞红，她喉咙里还发出阵阵闷哼。</span></p><p style="margin-bottom: 6px;max-width: 100%;min-height: 1em;line-height: 1.7em;box-sizing: border-box !important;word-wrap: break-word !important;"><span style="max-width: 100%;text-indent: 24px;box-sizing: border-box !important;word-wrap: break-word !important;">“嗯哼……要……要来了……”</span></p><p style="margin-bottom: 6px;max-width: 100%;min-height: 1em;line-height: 1.7em;box-sizing: border-box !important;word-wrap: break-word !important;"><span style="max-width: 100%;text-indent: 24px;box-sizing: border-box !important;word-wrap: break-word !important;">这骚货，这才刚天黑，就开始自我安慰了，难道陈大彪满足不了她？想到这儿，程伟强嘴角露出一丝嘲笑。</span></p><p style="margin-bottom: 6px;max-width: 100%;min-height: 1em;line-height: 1.7em;box-sizing: border-box !important;word-wrap: break-word !important;"><span style="max-width: 100%;text-indent: 24px;box-sizing: border-box !important;word-wrap: break-word !important;">要是让别人看到，估计会惊得合不拢嘴，毕竟在所有人眼中，他是一个傻子。</span></p><p style="margin-bottom: 6px;max-width: 100%;min-height: 1em;line-height: 1.7em;box-sizing: border-box !important;word-wrap: break-word !important;"><span style="max-width: 100%;text-indent: 24px;box-sizing: border-box !important;word-wrap: break-word !important;">前些年他发高烧烧坏了脑子，不过昨天不小心摔了一跤，他已经恢复了智商，但这事儿他没告诉任何人，包括嫂子，因为他得继续装傻，有很多事情，需要他去做，别人认为他傻，就不会防范他。</span></p><p style="margin-bottom: 6px;max-width: 100%;min-height: 1em;line-height: 1.7em;box-sizing: border-box !important;word-wrap: break-word !important;"><span style="max-width: 100%;text-indent: 24px;box-sizing: border-box !important;word-wrap: break-word !important;">看着王小翠那漂亮的脸蛋，那不停扭动的身躯，程伟强也立马有了反应。他把手伸到下面，想要调整一下角度，却一不小心，把窗台上的不锈钢盆碰到了地上，发出了一声脆响。</span></p><p style="margin-bottom: 6px;max-width: 100%;min-height: 1em;line-height: 1.7em;box-sizing: border-box !important;word-wrap: break-word !important;"><span style="max-width: 100%;text-indent: 24px;box-sizing: border-box !important;word-wrap: break-word !important;">“谁？”刚刚有了感觉的王小翠，听到外边的动静，吓得赶紧坐了起来，迅速跑到了门口。</span></p><p style="margin-bottom: 6px;max-width: 100%;min-height: 1em;line-height: 1.7em;box-sizing: border-box !important;word-wrap: break-word !important;"><span style="max-width: 100%;text-indent: 24px;box-sizing: border-box !important;word-wrap: break-word !important;">当她打开门，看到站在窗前的人时，才松了口气。</span></p><p style="margin-bottom: 6px;max-width: 100%;min-height: 1em;line-height: 1.7em;box-sizing: border-box !important;word-wrap: break-word !important;"><span style="max-width: 100%;text-indent: 24px;box-sizing: border-box !important;word-wrap: break-word !important;">原来是程伟强这傻子，她疑惑的看了程伟强一眼，无意间瞥到他下面的反应，一下子捂住了嘴巴。</span></p><p style="margin-bottom: 6px;max-width: 100%;min-height: 1em;line-height: 1.7em;box-sizing: border-box !important;word-wrap: break-word !important;"><span style="max-width: 100%;text-indent: 24px;box-sizing: border-box !important;word-wrap: break-word !important;">这么雄厚的本钱，比自家那死鬼的规模可大多了，可惜他是个傻子，不然这要是放到自己里面……</span></p><p style="margin-bottom: 6px;max-width: 100%;min-height: 1em;line-height: 1.7em;box-sizing: border-box !important;word-wrap: break-word !important;"><span style="max-width: 100%;text-indent: 24px;box-sizing: border-box !important;word-wrap: break-word !important;">想到这里，王小翠双腿忍不住夹了夹。</span></p><p style="margin-bottom: 6px;max-width: 100%;min-height: 1em;line-height: 1.7em;box-sizing: border-box !important;word-wrap: break-word !important;"><span style="max-width: 100%;text-indent: 24px;box-sizing: border-box !important;word-wrap: break-word !important;">她强忍着浑身的燥热，皱了皱眉，“傻子，你来我家干什么？”</span></p><p style="margin-bottom: 6px;max-width: 100%;min-height: 1em;line-height: 1.7em;box-sizing: border-box !important;word-wrap: break-word !important;"><span style="max-width: 100%;text-indent: 24px;box-sizing: border-box !important;word-wrap: break-word !important;">程伟强傻笑不止，“嘿嘿，嫂子，我找你想要……”</span></p><p style="margin-bottom: 6px;max-width: 100%;min-height: 1em;line-height: 1.7em;box-sizing: border-box !important;word-wrap: break-word !important;"><span style="max-width: 100%;text-indent: 24px;box-sizing: border-box !important;word-wrap: break-word !important;">王小翠再次瞥了一眼程伟强下面，心里噗通跳个不停，程伟强虽然是个傻子，但好歹是个男人啊，并且还这么强壮。陈大彪那杀千刀的，都好长时间没碰她了，就算碰她，也就三两下就完事儿，她压根就满足不了，不然她也不会自我安慰。</span></p><p style="margin-bottom: 6px;max-width: 100%;min-height: 1em;line-height: 1.7em;box-sizing: border-box !important;word-wrap: break-word !important;"><span style="max-width: 100%;text-indent: 24px;box-sizing: border-box !important;word-wrap: break-word !important;">突然，一个大胆的想法从王小翠脑海里滋生。</span></p><p style="margin-bottom: 6px;max-width: 100%;min-height: 1em;line-height: 1.7em;box-sizing: border-box !important;word-wrap: break-word !important;"><span style="max-width: 100%;text-indent: 24px;box-sizing: border-box !important;word-wrap: break-word !important;">“你想要啊，那跟我进来。”</span></p><p style="margin-bottom: 6px;max-width: 100%;min-height: 1em;line-height: 1.7em;box-sizing: border-box !important;word-wrap: break-word !important;"><span style="max-width: 100%;text-indent: 24px;box-sizing: border-box !important;word-wrap: break-word !important;">程伟强那个钱字还没说出口，就被打断了。</span></p><p style="margin-bottom: 6px;max-width: 100%;min-height: 1em;line-height: 1.7em;box-sizing: border-box !important;word-wrap: break-word !important;"><span style="max-width: 100%;text-indent: 24px;box-sizing: border-box !important;word-wrap: break-word !important;">难道这婆娘想勾引自己？好，老子倒要看看你耍什么花招。</span></p><p style="margin-bottom: 6px;max-width: 100%;min-height: 1em;line-height: 1.7em;box-sizing: border-box !important;word-wrap: break-word !important;"><span style="max-width: 100%;text-indent: 24px;box-sizing: border-box !important;word-wrap: break-word !important;">程伟强暗自冷笑，表面上，他还是傻呵呵的跟王小翠进了屋。</span></p><p style="margin-bottom: 6px;max-width: 100%;min-height: 1em;line-height: 1.7em;box-sizing: border-box !important;word-wrap: break-word !important;"><span style="max-width: 100%;text-indent: 24px;box-sizing: border-box !important;word-wrap: break-word !important;">王小翠反手把门给销上，然后走到床边坐了下来，她看着程伟强那处，感觉自己浑身都麻了。</span></p><p style="margin-bottom: 6px;max-width: 100%;min-height: 1em;line-height: 1.7em;box-sizing: border-box !important;word-wrap: break-word !important;"><span style="max-width: 100%;text-indent: 24px;box-sizing: border-box !important;word-wrap: break-word !important;">要怎么才能上手感受下呢？</span></p><p style="margin-bottom: 6px;max-width: 100%;min-height: 1em;line-height: 1.7em;box-sizing: border-box !important;word-wrap: break-word !important;"><span style="max-width: 100%;text-indent: 24px;box-sizing: border-box !important;word-wrap: break-word !important;">王小翠眼珠一转，有了主意。</span></p><p style="margin-bottom: 6px;max-width: 100%;min-height: 1em;line-height: 1.7em;box-sizing: border-box !important;word-wrap: break-word !important;"><span style="max-width: 100%;text-indent: 24px;box-sizing: border-box !important;word-wrap: break-word !important;">她指了指程伟强的下面，吃惊的说道：“程伟强，你下面怎么揣着棍子？”</span></p><p style="margin-bottom: 6px;max-width: 100%;min-height: 1em;line-height: 1.7em;box-sizing: border-box !important;word-wrap: break-word !important;"><span style="max-width: 100%;text-indent: 24px;box-sizing: border-box !important;word-wrap: break-word !important;">“嫂子，嫂子，我不打你，我没揣棍子啊！”程伟强急得摆摆手，装作很焦急的样子。</span></p><p style="margin-bottom: 6px;max-width: 100%;min-height: 1em;line-height: 1.7em;box-sizing: border-box !important;word-wrap: break-word !important;"><span style="max-width: 100%;text-indent: 24px;box-sizing: border-box !important;word-wrap: break-word !important;">“我不信，那里被撑起来那么高，肯定有棍子。”王小翠说着，来到程伟强面前，蹲下身去。</span></p><p style="margin-bottom: 6px;max-width: 100%;min-height: 1em;line-height: 1.7em;box-sizing: border-box !important;word-wrap: break-word !important;"><span style="max-width: 100%;text-indent: 24px;box-sizing: border-box !important;word-wrap: break-word !important;">程伟强低头一看，正好看到王小翠那两团雪白，还有中间那一片幽深。</span></p><p style="margin-bottom: 6px;max-width: 100%;min-height: 1em;line-height: 1.7em;box-sizing: border-box !important;word-wrap: break-word !important;"><span style="max-width: 100%;text-indent: 24px;box-sizing: border-box !important;word-wrap: break-word !important;">“还说没有揣棍子，这是什么。”</span></p><p style="margin-bottom: 6px;max-width: 100%;min-height: 1em;line-height: 1.7em;box-sizing: border-box !important;word-wrap: break-word !important;"><span style="max-width: 100%;text-indent: 24px;box-sizing: border-box !important;word-wrap: break-word !important;">王小翠娇哼一声，摸了上去。</span></p>'
    mem.get('miniprogram').then(function (value) {
        if(value){
            value = JSON.parse(value)
            res.send(value)
        }else {
            var game_set = require('../conf/game_box.json');
            async.parallel([
                    function(callback){
                        MPModel.find({"isBanner":true,isShow:true}).sort({index:-1}).exec(function(error,result){
                            callback(error,result);
                        })
                    },
                    function(callback){
                        MPModel.find({"isBanner":false,isShow:true}).sort({index:-1}).exec(function(error,result){
                            callback(error,result);
                        })
                    }
                ],function(err,results){
                    console.log(err)
                    game_set.banners = results[0];
                    game_set.list = results[1];
                    mem.set('miniprogram',JSON.stringify(game_set),10).then(function(){});
                    res.send({data: game_set, content: content});
            });
        }
    }).catch(function (err) {
        console.log(err);
    });
});

router.get('/kouling',function(req,res,next){
    // var cb = 'jsonp'+parseInt(Math.random()*10000)
    // var url = 'http://ajax.aiwen520.com./jd/getkl?qd=47&callback='+cb
    // http.get(url,function(rq,rs){
    //     var body='';
    //     rq.on('data',function(data){
    //         body+=data;
    //     });
    //     rq.on('end',function(){
    //         var index= body.indexOf('(');
    //         body = body.substr(index+1,body.length-(index+2));
    //         var res_data = JSON.parse(body);
    //         res.send(res_data)
    //     });
    // })
})



module.exports = router;
