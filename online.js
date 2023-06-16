(function () {
	'use strict';
	function myErrHandler() {return true;}
	window.onerror = myErrHandler;
	function Iptvskaz_n(object) {
		Lampa.Storage.set('account_email','sechenykh.alexandr@yandex.ru');
		var network=new Lampa.Reguest,scroll=new Lampa.Scroll({mask:!0,over:!0,step:250}),items=[],html=$("<div></div>"),body=$('<div class="iptvskaz_n category-full"></div>');cache=Lampa.Storage.cache("fav_skazchns",5e3,[]),body.append('<div style="display: none;" class="noti"></div>');var info=null,last=null,_this1=this,cache=Array.from(cache),cache_name=object.url,searched=!1,cors="";
		var catalogs = [{
        title: 'РћР±С‰РёРµ РєР°РЅР°Р»С‹',
        url: 'http://62.84.100.7/ch.json?email='
		},
				{
        title: 'РР·Р±СЂР°РЅРЅРѕРµ',
        url: 'http://62.84.100.7/ch.json?fav=1&email='
		}, {
			title: 'VIP Р¤РµРґРµСЂР°Р»СЊРЅС‹Рµ',
			url: 'http://62.84.100.7/tvpl.json?email=&gr=%D0%A4%D0%B5%D0%B4%D0%B5%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5'
			},{
			title: 'VIP РќРѕРІРѕСЃС‚Рё',
			url: 'http://62.84.100.7/tvpl.json?email=&gr=%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8'
			},{
			title: 'VIP Р¤РёР»СЊРјС‹',
			url: 'http://62.84.100.7/tvpl.json?email=&gr=%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D1%8B'
			},{
			title: 'VIP РљРёРЅРѕР·Р°Р»С‹',
			url: 'http://62.84.100.7/tvpl.json?email=&gr=%D0%9A%D0%B8%D0%BD%D0%BE%D0%B7%D0%B0%D0%BB%D1%8B'
			},{
			title: 'VIP UHD',
			url: 'http://62.84.100.7/tvpl.json?email=&gr=UHD'
			},{
			title: 'VIP Р”РµС‚СЃРєРёРµ',
			url: 'http://62.84.100.7/tvpl.json?email=&gr=%D0%94%D0%B5%D1%82%D1%81%D0%BA%D0%B8%D0%B5'
			},{
			title: 'VIP РЎРїРѕСЂС‚',
			url: 'http://62.84.100.7/tvpl.json?email=&gr=%D0%A1%D0%BF%D0%BE%D1%80%D1%82'
			},{
			title: 'VIP РњСѓР·С‹РєР°',
			url: 'http://62.84.100.7/tvpl.json?email=&gr=%D0%9C%D1%83%D0%B7%D1%8B%D0%BA%D0%B0'
			},{
			title: 'VIP РћР±СЂР°Р·РѕРІР°РЅРёРµ',
			url: 'http://62.84.100.7/tvpl.json?email=&gr=%D0%9E%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5'
			},{
			title: 'VIP РџСЂРёСЂРѕРґР°',
			url: 'http://62.84.100.7/tvpl.json?email=&gr=%D0%9F%D1%80%D0%B8%D1%80%D0%BE%D0%B4%D0%B0'
			},{
			title: 'VIP РџР»СЋСЃРѕРІС‹Рµ',
			url: 'http://62.84.100.7/tvpl.json?email=&gr=%D0%9F%D0%BB%D1%8E%D1%81%D0%BE%D0%B2%D1%8B%D0%B5'
			},{
			title: 'VIP РџСЂРѕС‡РµРµ',
			url: 'http://62.84.100.7/tvpl.json?email=&gr=%D0%9F%D1%80%D0%BE%D1%87%D0%B5%D0%B5'
			},		{
        title: 'РЎРєСЂС‹С‚С‹Рµ РІР°РјРё РєР°РЅР°Р»С‹',
      url: 'http://62.84.100.7/ch.json?nodisplay=1&email='
		}
		];	
					catalogs.push({title: 'РќРѕС‡РЅС‹Рµ', url: 'http://62.84.100.7/ch.json?gr=noo'});
		if(cache_name.includes("gr=noo")) Lampa.Noty.show('РР·РІРёРЅРёС‚Рµ, РЅРѕ РєР°Р¶РµС‚СЃСЏ Сѓ РІР°СЃ РЅРµС‚ РїРѕРґРїРёСЃРєРё.');
	this.create=function(){	
		Lampa.Storage.set('account_email','sechenykh.alexandr@yandex.ru');
	 var acc = '';
	 if (acc = '') acc = 'test';
	 var utils = {
        timeOffset: 0,
        timeOffsetSet: false,
        ua: navigator.userAgent,
        unixtime: function(){return Math.floor((new Date().getTime() + utils.timeOffset)/1000)},
        token: function() {return utils.sig(acc)},
        hash: Lampa.Utils.hash,
        hash36: function(s) {return (this.hash(s) * 1).toString(36)},
        sig: function (string) {var sigTime = utils.unixtime();return sigTime.toString(36) + ':' + utils.hash36((string || '') + sigTime + utils.ua);}
    };
 
    var getUrl = function(url, success, error) {
        if (!utils.timeOffsetSet) {
            var ts = new Date().getTime();
            
			network.silent(url + '&time=1',
                function (data) {
					Lampa.Storage.set('account_email','sechenykh.alexandr@yandex.ru');
                    var te = new Date().getTime();
                    utils.timeOffset = (data.serverTime < ts || data.serverTime > te) ? data.serverTime - te : 0;
                    utils.ua += data.scope || '';
                    utils.ua += data.ip || '';
                    utils.timeOffsetSet = true;
                    getUrl(url, success, error);
                },
                error
            );
        } else {
            network.silent(
                url + '&token=' + utils.token(),
                success,
                error
            );
        }
    }
	var t=this;return this.activity.loader(!0),getUrl(object.url,this.build.bind(this),(function(){var a=new Lampa.Empty;html.append(a.render()),t.start=a.start,t.activity.loader(!1),t.activity.toggle()})),this.render()},this.back=function(){if(searched){var t=Lampa.Arrays.clone(object);delete t.activity,Lampa.Activity.push(t),searched=!1}else Lampa.Activity.backward()};
		this.append = function (data) {
			Lampa.Storage.set('account_email','sechenykh.alexandr@yandex.ru');
			if(cache_name.includes("fav=1")){var ar=Lampa.Storage.get("fav_skazchns"),fav=[];Object.keys(ar).forEach((function(a){if(Lampa.Arrays.getKeys(cache[a]).length&&"notdispl"!=a){data&&data.forEach((function(t){t.tvtitle==cache[a]&&fav.push(t)}))}}))} else if(cache_name.includes("nodisplay=1")){var notdisplay=[];if(Lampa.Arrays.getKeys(cache).length){var _this3=this;data&&data.forEach((function(a){Lampa.Arrays.getValues(cache).filter((function(t){'not'+a.tvtitle==t&&notdisplay.push(a)}))}))}}else{
				if(Lampa.Arrays.getKeys(cache).length){_this3=this,fav=[];data&&data.forEach((function(a){Lampa.Arrays.getValues(cache).filter((function(t){a.tvtitle==t&&fav.push(a)}))}))}if(Lampa.Arrays.getKeys(cache).length){_this3=this;var notdispl=[];data&&data.forEach((function(a,t,e){Lampa.Arrays.getValues(cache).filter((function(e){'not'+a.tvtitle==e&&delete data[t]}))}))}}cache_name.includes("fav=1")&&fav?data=fav:cache_name.includes("nodisplay=1")&&notdisplay?data=notdisplay:fav&&(data=fav.concat(data),data=data.filter((function(a,t,e){return e.indexOf(a)===t})));
				
			data.forEach(function (element) {
			
				var card=Lampa.Template.get("card",{title:element.tvtitle,release_year:""});$(".info").css("height","4em"),card.addClass("card--collection"),element.tvshift||(element.tvshift=0),card.attr("tvid",element.tvid),card.find(".card__img").css({cursor:"pointer","background-color":"#353535a6"}),card.find(".card__icons").css({"justify-content":"right",top:"0.3em",right:"0.3em"}),card.find(".card__title").css({display:"none"}),card.find(".card__view").css({"margin-bottom":"0em"});var img=card.find(".card__img")[0];img.onload=function(){card.addClass("card--loaded")},img.onerror=function(e){},img.src=element.tvlogo,cache&&cache.indexOf(element.tvtitle)>-1&&!cache_name.includes("fav=1")&&_this1.addicon("book",card);
				var progr=function(){if(cache_name.includes("tvpl.json")||element.tvmedia.includes("mono"))var e=6,t=element.tvtitle;else t=element.tvid,console.log(t),e=5;$.get("http://62.84.100.7/"+e+".php?ids="+t.replace("+","__"),(function(e,t){$(".progr-text").html(e)}))};card.on("hover:focus",(function(){last=card[0],scroll.update(card,!0),info.find(".info__title").text(element.tvtitle);1==Lampa.Storage.get("epg")&&($(".progr").text(element.tvtitle),setTimeout(progr,600));info.find(".info__title-original").text(element.tvgroup)}));card.on("hover:hover",(function(){last=card[0],info.find(".info__title").text(element.tvtitle),1==Lampa.Storage.get("epg")&&($(".progr").text(element.tvtitle),setTimeout(progr,600));info.find(".info__title-original").text(element.tvgroup)}));card.on('hover:long', function () { if (!cache_name.includes('fav=1')) {var enabled=Lampa.Controller.enabled().name,menu=[{title:!cache||cache&&-1==cache.indexOf(element.tvtitle)?"Р”РѕР±Р°РІРёС‚СЊ РІ РёР·Р±СЂР°РЅРЅРѕРµ":"РЈРґР°Р»РёС‚СЊ РёР· РёР·Р±СЂР°РЅРЅРѕРіРѕ",fav:!0},{title:!cache||cache&&-1==cache.indexOf('not'+element.tvtitle)?"РЎРєСЂС‹С‚СЊ СЌС‚РѕС‚ РєР°РЅР°Р»":"РџРѕРєР°Р·Р°С‚СЊ РєР°РЅР°Р»",notdispl:!0},{title:1==Lampa.Storage.get("epg")?"Р’С‹РєР»СЋС‡РёС‚СЊ EPG":"Р’РєР»СЋС‡РёС‚СЊ EPG",epg:!0},{title:1==Lampa.Storage.get("noporn")?"РџРѕРєР°Р·Р°С‚СЊ 18+":"РЎРєСЂС‹С‚СЊ 18+",noporn:!0}];Lampa.Platform.is("webos")&&menu.push({title:Lampa.Lang.translate("player_lauch")+" - Webos",player:"webos"}),Lampa.Platform.is("android")&&menu.push({title:Lampa.Lang.translate("player_lauch")+" - Android",player:"android"});Lampa.Select.show({title:Lampa.Lang.translate("title_action"),items:menu,onBack:function e(){Lampa.Controller.toggle(enabled)},onSelect:function e(t){t.fav&&(_this1.favorite(element,card),Lampa.Controller.toggle(enabled)),t.notdispl&&(_this1.notdispl(element,card),Lampa.Controller.toggle(enabled)),t.player&&(Lampa.Player.runas(t.player),card.trigger("hover:enter"));t.noporn&&(1==Lampa.Storage.get("noporn")?(Lampa.Storage.set("noporn",0),catalogs.push({title: 'РќРѕС‡РЅС‹Рµ', url: 'http://62.84.100.7/ch.json?gr=18'})):(Lampa.Storage.set("noporn",1)));t.epg&&(1==Lampa.Storage.get("epg")?(Lampa.Storage.set("epg",0),html.find(".scroll").css("float","none").css("width","100%"),$("#progr1").remove()):(Lampa.Storage.set("epg",1),html.find(".scroll").css("float","left"),html.find(".scroll").css("width","70%"),html.find(".scroll").parent().append('<div id="progr1" style="float:right;padding: 1.2em 0;width: 30%;"><h2>РџСЂРѕРіСЂР°РјРјР° <span class="progr"></span></h2><span class="progr-text"></span>'))),Lampa.Controller.toggle(enabled);
				}});
				} else {
				var enabled=Lampa.Controller.enabled().name,menu=[];Lampa.Platform.is("webos")&&menu.push({title:Lampa.Lang.translate("player_lauch")+" - Webos",player:"webos"}),Lampa.Platform.is("android")&&menu.push({title:Lampa.Lang.translate("player_lauch")+" - Android",player:"android"});menu.push({title:1==Lampa.Storage.get("epg")?"Р’С‹РєР»СЋС‡РёС‚СЊ EPG":"Р’РєР»СЋС‡РёС‚СЊ EPG",epg:!0});menu.push({title:"РЈРґР°Р»РёС‚СЊ РІСЃС‘ РёР· РёР·Р±СЂР°РЅРЅРѕРіРѕ",favdel:!0});Lampa.Select.show({title:Lampa.Lang.translate("title_action"),items:menu,onBack:function(){Lampa.Controller.toggle(enabled)},onSelect:function(e){e.favdel&&(Lampa.Storage.set("fav_skazchns",[]),$(".card").remove()),Lampa.Controller.toggle(enabled),e.player&&(Lampa.Player.runas(e.player),card.trigger("hover:enter"));e.epg&&(1==Lampa.Storage.get("epg")?(Lampa.Storage.set("epg",0),html.find(".scroll").css("float","none").css("width","100%"),$("#progr1").remove()):(Lampa.Storage.set("epg",1),html.find(".scroll").css("float","left"),html.find(".scroll").css("width","70%"),html.find(".scroll").parent().append('<div id="progr1" style="float:right;padding: 1.2em 0;width: 30%;"><h2>РџСЂРѕРіСЂР°РјРјР° <span class="progr"></span></h2><span class="progr-text"></span>'))),Lampa.Controller.toggle(enabled);}})
				}});
				card.on('hover:enter', function () {
					var video={title:element.tvtitle,url:element.tvmedia};
					var playlist=[],i=1;data.forEach((function(a){playlist.push({title:a.tvtitle,url:a.tvmedia}),i++})),video['playlist']=playlist;
					Lampa.Player.play(video);$(".noti").html(element.tvid);
					//if(cache_name.includes("tvpl.json")||cache_name.includes("fav=1")&&cache_name.includes("tvpl.json")){
						var playlist=[],i=1;$.get("http://62.84.100.7/archive.json?email=&name="+encodeURI(element.tvtitle.replace("+","__"))+"&&ur="+encodeURI(element.tvmedia),(function(e,l){e.forEach((function(e){playlist.push({title:e.tvtitle,url:e.tvmedia}),i++}))})),Lampa.Player.playlist(playlist)
//						}else{
						//Lampa.Player.playlist(playlist);}	
				if (window.location.hostname!='lite.lampa.mx') {
					Lampa.Player.opened()&&($(".player-info__error").css("display","none"),0===Lampa.Player.render().find("#title_epg").length&&Lampa.Player.render().find(".player-info__name").append('<span id="title_epg"></span>'),parseone($(".noti").html()),"iptvskaz_n"==Lampa.Activity.active().component&&(Lampa.Keypad.listener.destroy(),Lampa.Keypad.listener.follow("keydown",(function(e){var a=e.code;
				Lampa.Player.opened()&&(428!==a&&34!==a||Lampa.PlayerPlaylist.prev(),427!==a&&33!==a||Lampa.PlayerPlaylist.next())}))));}
				});
				body.append(card);
				items.push(card);		
			});
		};
//		scrollUp = throttle(scroll.update, 500);
		if (window.location.hostname!='lite.lampa.mx') {
		var skset1 = setInterval(function () {if (Lampa.Player.opened() && Lampa.Activity.active().component=='iptvskaz_n') {parseone($('.noti').html());} else {
		parseEpg();
			}}, 60000);		
		}	
		 var parseone = function (str) {
	  if (cache_name.includes('tvpl.json')) var ur2 = 'http://62.84.100.7/4.php?tv='+cache_name.replace('&','__')+'&ids='+str.replace('+','plus')+'&email='; else
	  ur2 = 'http://62.84.100.7/2.php?ids='+str
	$.get(ur2,(function(e,t){""!=e&&Lampa.Player.render().find("#title_epg").text(" - РЎРµР№С‡Р°СЃ: "+e)}));
	  }
  
	var parseEpg=function(e){if(!$(".player-info__body")[0]){if(cache_name.includes("fav=1"))var a="&fav=1";else a="";if(cache_name.includes("tvpl.json"))var r="http://62.84.100.7/4.php?tv="+cache_name.replace("&","__")+"&email=";else r="http://62.84.100.7/3.php?email="+a;$.get(r,(function(e,a){e=JSON.parse(e);for(var r=0;r<e.length;r++)$(".card[tvid='"+e[r].id+"'] > .card__age").html(e[r].name),$(".card[tvid='"+e[r].id+"'] > .card__age").css({"background-image":"linear-gradient(90deg, rgb(54 54 54 / 50%) "+e[r].time+"%, rgb(0 0 0 / 0%) 0%)",padding:"7px",border:"1px #3e3e3e dotted","margin-top":"3px","border-radius":"7px",overflow:"hidden","max-height":"56px"})}))}};
this.addicon=function(c,a){a.find(".card__icons-inner").append('<div class="card__icon icon--'+c+'"></div>')},this.favorite=function(c,a){!cache||cache&&-1==cache.indexOf(c.tvtitle)?cache?cache.push(c.tvtitle):cache=[c.tvtitle]:(Lampa.Arrays.remove(cache,c.tvtitle),Lampa.Storage.set("fav_skazchns",cache)),a.find(".card__icons").remove(),cache.indexOf(c.tvtitle)>-1&&this.addicon("book",a),Lampa.Storage.set("fav_skazchns",cache),searched=!0,this.back()},this.notdispl=function(c,a){!cache||cache&&-1==cache.indexOf('not'+c.tvtitle)?cache?cache.push('not'+c.tvtitle):cache=['not'+c.tvtitle]:(Lampa.Arrays.remove(cache,'not'+c.tvtitle),Lampa.Storage.set("fav_skazchns",cache)),Lampa.Storage.set("fav_skazchns",cache),searched=!0,this.back()};
		this.build = function(data) {
			Lampa.Storage.set('account_email','sechenykh.alexandr@yandex.ru');
			var _this2=this;if(1!=Lampa.Storage.get("epg")||cache_name.includes("nodisplay=1"))ep1="16.6",ep2="24.6";else var ep1="19.6",ep2="32.6";
			Lampa.Template.add('button_category', "<style>@media screen and (max-width: 2560px) {.iptvskaz_n .card--collection {width: "+ep1+"1%!important;}}@media screen and (max-width: 800px) {.iptvskaz_n .card--collection {width: "+ep2+"%!important;}}@media screen and (max-width: 500px) {.iptvskaz_n .card--collection {width: 33.3%!important;}}</style><div class=\"full-start__button selector view--category\"><svg style=\"enable-background:new 0 0 512 512;\" version=\"1.1\" viewBox=\"0 0 24 24\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><g id=\"info\"/><g id=\"icons\"><g id=\"menu\"><path d=\"M20,10H4c-1.1,0-2,0.9-2,2c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2C22,10.9,21.1,10,20,10z\" fill=\"currentColor\"/><path d=\"M4,8h12c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2H4C2.9,4,2,4.9,2,6C2,7.1,2.9,8,4,8z\" fill=\"currentColor\"/><path d=\"M16,16H4c-1.1,0-2,0.9-2,2c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2C18,16.9,17.1,16,16,16z\" fill=\"currentColor\"/></g></g></svg><span>Р Р°Р·РґРµР»С‹</span>\n    </div>");
						Lampa.Template.add('button_category3', "<div style=\"float: left;\" class=\"full-start__button selector select__fav\"><span>РР·Р±СЂР°РЅРЅРѕРµ</span>\n    </div>");
			Lampa.Template.add('button_podp', "<style>@media screen and (max-width: 2560px) {.iptvskaz_n .card--collection {width: "+ep1+"1%!important;}}@media screen and (max-width: 800px) {.iptvskaz_n .card--collection {width: "+ep2+"%!important;}}@media screen and (max-width: 500px) {.iptvskaz_n .card--collection {width: 33.3%!important;}}</style><div style=\"float: left;\" class=\"full-start__button selector view--podp\"><svg viewBox=\"0 0 159 152\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M56.6429 44.8644L79.5 7.49816L102.357 44.8644C103.883 47.3582 106.338 49.1423 109.181 49.8224L151.782 60.0141L123.308 93.2993C121.407 95.5208 120.47 98.4074 120.701 101.322L124.173 144.987L83.7176 128.192C81.0176 127.071 77.9824 127.071 75.2824 128.192L34.8273 144.987L38.2988 101.322C38.5305 98.4074 37.5925 95.5208 35.6921 93.2993L7.21802 60.0141L49.8186 49.8224C52.6618 49.1423 55.1174 47.3582 56.6429 44.8644ZM33.3175 145.613C33.318 145.613 33.3185 145.613 33.3191 145.613L33.3175 145.613Z\" stroke=\"currentColor\" fill=\"\" stroke-width=\"11\"></path></svg><span>РџРѕРґРїРёСЃРєР°</span>\n    </div>");
			$(".background__two.visible").css("opacity","0"),$(".background__one.visible").css("opacity","0");
						Lampa.Template.add('info_radio', '<div class="info layer--width"><div class="info__left"><span style="font-size:2em" class="info__title"></span>  <span style="font-size:0.8em"></span><div class="info__create"></div></div><div style="margin-top: -15px;display: flex !important;" class="info__right">  <div id="stantion_filtr"></div></div></div>');
			var btn=Lampa.Template.get("button_category"),btn3=Lampa.Template.get("button_category3"),btn2=Lampa.Template.get("button_podp");info=Lampa.Template.get("info_radio"),info.find("#stantion_filtr").append(btn2),info.find("#stantion_filtr").append(btn3),info.find("#stantion_filtr").append(btn),info.find(".view--category").on("hover:enter hover:click",(function(){_this2.selectGroup()})),info.find(".view--podp").on("hover:enter hover:click",(function(){_this2.selectGroup2()})),info.find(".select__fav").on("hover:enter hover:click",(function(){Lampa.Activity.push({url:"http://62.84.100.7/ch.json?fav=1&email=",title:"РР·Р±СЂР°РЅРЅРѕРµ",component:"iptvskaz_n",page:1})}));
			
			info.find(".select__poisk").on("hover:enter hover:click",(function(){
				
				Lampa.Input.edit({
    value: "",
    title: "Р’РІРµРґРёС‚Рµ РЅР°Р·РІР°РЅРёРµ РєР°РЅР°Р»Р°",
    free: !0,
    nosave: !0
}, function(t) {
	Lampa.Storage.set('account_email','sechenykh.alexandr@yandex.ru');
		Lampa.Activity.push({
        url: "http://62.84.100.7/ch.json?search="+t+"&email=",
        title: "РџРѕРёСЃРє",
        component: "iptvskaz_n",
        page: 1
		});
	}
);
				
				}));
			
			scroll.render().addClass("layer--wheight").data("mheight",info),html.append(info.append()),html.append(scroll.render());
			1!=Lampa.Storage.get("epg")||cache_name.includes("nodisplay=1")||(html.find(".scroll").css("float","left"),html.find(".scroll").css("width","70%"),html.find(".scroll").parent().append('<div id="progr1" style="float:right;padding: 1.2em 0;width: 30%;"><h2>РџСЂРѕРіСЂР°РјРјР° <span class="progr"></span></h2><span class="progr-text"></span>'));
			this.append(data),scroll.append(body),this.activity.loader(!1),this.activity.toggle(),parseEpg();
		this.selectGroup=function(){Lampa.Select.show({title:"РџР»РµР№Р»РёСЃС‚",items:catalogs,onSelect:function(t){Lampa.Activity.push({url:t.url,title:t.tvmedia,component:"iptvskaz_n",page:1})},onBack:function(){Lampa.Controller.toggle("content"),parseEpg();}})};
		}
		this.selectGroup2 = function () {
					  var modal = $('<div><div class="broadcast__text" style="text-align:left">РџРѕРґРїРёСЃРєР° РЅР° РєР°РЅР°Р»С‹<br><br>Р’С‹ РЅРµ Р°РІС‚РѕСЂРёР·РѕРІР°РЅС‹ РІ Р›Р°РјРїРµ. Р”Р»СЏ Р°РєС‚РёРІР°С†РёРё РїРѕРґРїРёСЃРєРё РІРІРµРґРёС‚Рµ Р»РѕРіРёРЅ Рё РїР°СЂРѕР»СЊ СЃР°Р№С‚Р° cub.watch РІ РќР°СЃС‚СЂРѕР№РєРё - РђРєРєР°СѓРЅС‚.<br><br/>РџРѕРґРґРµСЂР¶Р°С‚СЊ РїСЂРѕРµРєС‚ РјРѕР¶РЅРѕ РїРµСЂРµРІРѕРґРѕРј<br/>РІ СЃРёСЃС‚РµРјРµ Р±С‹СЃС‚СЂС‹С… РїР»РµС‚РµР¶РµР№ +7(922)146-33-71 РљРёРІРё Р±Р°РЅРє.<br/>РњС‹ СЃС‚Р°СЂР°РµРјСЃСЏ РґР»СЏ РІР°СЃ :)</div></div>');
			var enabled=Lampa.Controller.enabled().name;Lampa.Modal.open({title:"",html:modal,size:"medium",mask:!0,onBack:function(){Lampa.Modal.close(),Lampa.Controller.toggle(enabled)},onSelect:function(){Lampa.Controller.toggle(enabled);}});
		};
		this.start=function(){var o=this;Lampa.Controller.add("content",{toggle:function(){Lampa.Controller.collectionSet(scroll.render()),Lampa.Controller.collectionFocus(last||!1,scroll.render())},left:function(){Navigator.canmove("left")?Navigator.move("left"):Lampa.Controller.toggle("menu")},right:function(){Navigator.canmove("right")?Navigator.move("right"):o.selectGroup()},up:function(){Navigator.canmove("up")?Navigator.move("up"):info.find(".view--category").hasClass("focus")?Lampa.Controller.toggle("head"):info.find(".view--category").hasClass("focus")||(Lampa.Controller.collectionSet(info),Navigator.move("right"))},down:function(){Navigator.canmove("down")?Navigator.move("down"):info.find(".view--category").hasClass("focus")&&Lampa.Controller.toggle("content")},back:function(){Lampa.Activity.backward()}}),Lampa.Controller.toggle("content")};
		this.pause = function() {if (Lampa.Activity.active().component=='iptvskaz_n') {clearInterval(skset1);skset1=null;}};
		this.stop=function(){},this.render=function(){return html},this.destroy=function(){scroll.destroy(),info&&info.remove(),html.remove(),body.remove(),network=null,items=null,html=null,body=null,info=null};
	}
	function iptv_skaz() {
		var starts;
		Lampa.Storage.set('account_email','sechenykh.alexandr@yandex.ru');
		window.plugin_iptvskaz_n_ready = true; Lampa.Component.add('iptvskaz_n', Iptvskaz_n);
		Lampa.Listener.follow('app', function(r) {
			if (r.type == 'ready') {
				var icos = '<svg width="16px" height="16px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" color="#fff" fill="currentColor" stroke="currentColor" class="bi bi-tv"><path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM13.991 3l.024.001a1.46 1.46 0 0 1 .538.143.757.757 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.464 1.464 0 0 1-.143.538.758.758 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.464 1.464 0 0 1-.538-.143.758.758 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.46 1.46 0 0 1 .143-.538.758.758 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3h11.991zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z"/></svg>';
				var menu_itemss = $('<li class="menu__item selector focus" data-action="iptvskaz_n"><div class="menu__ico">' + icos + '</div><div class="menu__text">РўР’ by skaz</div></li>');
				menu_itemss.on('hover:enter', function() {
					Lampa.Activity.push({
						url: 'http://62.84.100.7/ch.json?email=',						title: 'РўР’ by skaz',
						component: 'iptvskaz_n',
						page: 1
					});
				});
				$('.menu .menu__list').eq(0).append(menu_itemss);
			}
		});
		
			
	}
	if (!window.plugin_iptvskaz_n_ready) iptv_skaz();
	if (!window.plugin_iptv2_ready && window.location.hostname!='lampa.surge.sh' && window.location.hostname!='lite.lampa.mx') $.getScript('http://skaztv.online/tv2.js?email=');
   })();