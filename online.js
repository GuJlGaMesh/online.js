(function () {
  'use strict';

  Lampa.Storage.set('account_email','sechenykh.alexandr@yandex.ru');

  Lampa.Listener.follow('app',(e)=>{
    if(e.type == 'ready'){
  setTimeout(function(){
    $("[data-action=anime]").eq(0).remove();
  },10); 
    }
});

})();