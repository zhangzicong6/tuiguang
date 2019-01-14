var express = require('express');
var router = express.Router();
var MPModel = require('../model/MiniProgram.js');
var mem = require('../util/mem.js');
var async = require('async');
var http=require('http');

router.get('/', function (req, res, next) {
    const content = '<div class="rich_media_content " id="js_content"><p><br></p><p><span style="font-size: 18px;">半夜，罗媛刚刚从睡梦中惊醒，她准备去上个厕所，却在路过导师欧兰房间门口的时候，忽然听见里面传来有些奇怪的声音。</span><br></p><section class="" style="max-width: 100%;box-sizing: border-box !important;word-wrap: break-word !important;"><section class="" style="max-width: 100%;box-sizing: border-box !important;word-wrap: break-word !important;"><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">“嗯……快点。”</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">“啊……”</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">听见这个声音的时候，罗媛满脸羞红，看着从门缝里散发出来的光芒，她带着一丝好奇的目光往门缝里看了一眼。</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">当她看见里面的情景之时，一下子捂着自己的嘴，眼睛瞪得老大，就连呼吸都有些不自然。</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">在欧兰的房间中，床上躺着一男一女，身上一丝不挂，两人正在做着那种事情。</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">可以清楚的看见，女人的身体不停晃动着。</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">可是，她的目光却落在了男人那东西上，让她看得眼睛都直了。</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;"><br></p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">比她男朋友的都大了一圈。</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">她和她的男朋友，都是研究生，因为各种原因，男朋友被公派出国进行交流生互换去了。</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">导师欧兰看她一个人，所以就好心让她住进家里，好辅导她。</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">此时，床上的场面却让她感觉身体有些发烫，似乎有一种奇怪的感觉在她的身体中蔓延。</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;"><br></p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">不自觉的伸手碰到自己那儿，她才感觉到那里已经有了反应，突然触及到那最为敏感的地带，让她浑身一阵颤抖，差点就忍不住叫出声来了。</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">她的眼睛依旧盯着里面的那一幅场面，她的手随着欧兰老公的动作，而上下起伏着。</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">十多分钟之后，罗媛突然看见导师的老公浑身颤抖，身体紧紧的贴着导师，而导师的身体也在一阵阵的抽搐。</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;"><br></p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">看到这里，罗媛不由得加快了自己手上的动作，几秒钟之后她也是浑身一阵颤抖……舒服的哼叫了一声。</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">当她意识到不妥的时候，她急急忙忙的上了楼，不敢让导师发现。</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">躺在床上，脑海中回想着刚才的画面，她的脸上一片通红。</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">一时间，她竟然又有了感觉。</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">连续两次之后，她才昏昏沉沉的睡了过去。</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;"><br></p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">第二天，她早早的就醒来了，可是家里却只有欧兰的老公。</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">“小罗，你醒了，你导师今天有事，暂时不能辅导你，她明天才能回来。”</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">罗媛盯着眼前的这个男人，这个男人就是她导师的老公张良。</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">而张良也是一名医学教授，今天正好轮到他休息，所以就没去上班。</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;"><br></p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">忽然想到昨天晚上的画面，罗媛的脸上多了几分腮红。</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">“站在那儿干嘛呢？过来吃早餐。”</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">张良招了招手，有些奇怪的看着罗媛，后者的脸上多了几分红晕。</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">“你的脸怎么这么红啊？是不是感冒了？”</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">“没有没有。”</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;"><br></p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">罗媛急忙否认，可是当她刚刚走到张良身边的时候，因为脚下穿着的是拖鞋，一个不小心就要摔倒。</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">眼看着快要摔在地上，她脸上多了几分惊慌，突然伸出手，一把抓住了什么东西，圆圆的。</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">可是，当她抬头一看的时候，才明白她抓的是什么……</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;"><br></p></section></section><section class="" style="max-width: 100%;box-sizing: border-box !important;word-wrap: break-word !important;"><section class="" style="max-width: 100%;box-sizing: border-box !important;word-wrap: break-word !important;"><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">“哎哟……”</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;"><br></p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">张良突然被抓住那玩意儿，整个人都忍不住痛呼了一声。</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;"><br></p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">而此时，罗媛也终于看清楚了，她急忙把手松开。</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;"><br></p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">从地上爬起来低着头，不敢去看张良的眼睛，一张脸红得通透。</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;"><br></p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">“教授，对……对不起。”</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;"><br></p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">张良伸手揉了揉那有些疼痛的地方，脸上的表情有些扭曲，突然间被这么拽着那个地方，那种痛苦不是一般人能够忍受的。</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;"><br></p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">“没事，你吃早餐吧。”</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;"><br></p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">张扬摇了摇头，眼睛却盯着对方。</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;"><br></p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">忽然发现眼前的这个女学生似乎还有那么几分好看，而且身上就穿着一套黑色的睡衣，朦朦胧胧间可以看见里面透露出来的雪白。</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;"><br></p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">特别是那一对饱满，比她老婆的都还要大上几分。</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;"><br></p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">一时间，他竟然有些看得呆了。</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;"><br></p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">罗媛自然也是察觉到了张良的目光，只是她没有开口，低着头，不敢说话。</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;"><br></p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">良久，张良才回过神来，假装咳嗽了一声，“吃东西吧。”</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;"><br></p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">当两个人吃过东西之后，罗媛主动要求收拾碗筷，张良没有拒绝，便独自坐在了沙发上。</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;"><br></p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">可是没多久， 张良忽然听见厨房里传来一声尖叫。</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;"><br></p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">急忙跑到厨房，才发现罗媛正站在原地，捂着手指，上面冒出了一层殷红的鲜血，地上是一个破了的碗。</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;"><br></p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">“教授，对不起，我把碗打破了。”</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;"><br></p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">罗媛感觉有些不好意思，刚刚在洗碗的时候，她竟然想到了别的事情，更想到了刚刚抓到的那个玩意。</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;"><br></p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">那东西还没反应时就这么吓人，那要是有了反应......</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;"><br></p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">“你看你这么不小心。”</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;"><br></p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">张良没有犹豫，直接抓着罗媛的手含在了嘴里。</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;"><br></p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">突如其来的动作，把罗媛吓了一跳。</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;"><br></p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">一时间，身体竟然有了反应。</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;"><br></p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">感受到那异样，她忍不住夹紧了双腿。</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;"><br></p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">过了一会，张良才松开。</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;"><br></p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">看着罗媛红着一张脸，他才发现自己有着失态。</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;"><br></p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">“咳咳，那什么，你先去休息吧，我来收拾”</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;"><br></p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">罗媛轻轻点了点头，离开了厨房。</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;"><br></p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">看着罗媛离开，张良的目光盯着那扭动的翘臀，黑色睡衣的包裹下，显得是那么诱人。</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;"><br></p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">要是……</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;"><br></p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">他忽然有一种征服对方的冲动，越想越兴奋，甚至裤子下都搭起来一个帐篷。</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;"><br></p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">急忙收拾好就离开了厨房，可是来到客厅，却没有发现罗媛的影子。</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;"><br></p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">张良愣了一下，随后朝着一个房间走去。</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;"><br></p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">刚到房间门口，忽然听见里面传来悉悉索索的声音。</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;"><br></p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">门并没有关严，他往里面看了一眼。</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;"><br></p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">房间里面，罗媛正在换衣服，身上的睡衣已经脱了下来，那美妙的身材就展现在眼前……</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;"><br></p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">张良喉结微微一动，呼吸都有些不顺畅了。</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;"><br></p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">本以为就这样结束了，可是没想到，罗媛竟然把罩解开了，那一对柔软瞬间就展现出来。</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;"><br></p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">然而，这还没有结束。</p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;"><br></p><p style="margin-bottom: 10px;max-width: 100%;min-height: 1em;line-height: 1.7em;font-size: 18px;box-sizing: border-box !important;word-wrap: break-word !important;">只见她缓缓坐在了床边，一只手在自己身上游走着，另一只手朝着短裤里面伸去……</p></section></section><p><br></p></div>';
    const novelInfo = {
      shareTitle: "完美关系",
      content: content,
      shenhe: false,

    }
    mem.get('miniprogram').then(function (value) {
        if(value){
            value = JSON.parse(value)
            res.send(value)
        }else {
            // var game_set = require('../conf/game_box.json');
            // async.parallel([
            //         function(callback){
            //             MPModel.find({"isBanner":true,isShow:true}).sort({index:-1}).exec(function(error,result){
            //                 callback(error,result);
            //             })
            //         },
            //         function(callback){
            //             MPModel.find({"isBanner":false,isShow:true}).sort({index:-1}).exec(function(error,result){
            //                 callback(error,result);
            //             })
            //         }
            //     ],function(err,results){
            //         console.log(err)
            //         // game_set.banners = results[0];
            //         // game_set.list = results[1];
            //         mem.set('miniprogram',JSON.stringify(game_set),10).then(function(){});
            //         res.send({data: game_set, content: content});
            // });
            mem.set('miniprogram',JSON.stringify(novelInfo),10).then(function(){});
            res.send({data: novelInfo});
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
