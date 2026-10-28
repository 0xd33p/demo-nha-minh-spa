(function(){
  // Giờ Đà Nẵng (UTC+7)
  var now=new Date(Date.now()+(7*60+new Date().getTimezoneOffset())*60000);
  var h=now.getHours()+now.getMinutes()/60, d=now.getDay();
  var open=h>=8.5&&h<21.5;
  var o=document.getElementById('open-now'), s=document.getElementById('open-sub');
  if(o){o.textContent=open?'Đang mở cửa':'Đã đóng cửa';o.classList.add(open?'is-open':'is-closed');s.textContent=open?'Đóng cửa lúc 21:30':'Mở lại lúc 08:30';}
  var row=document.querySelector('.hours tr[data-d="'+d+'"]'); if(row) row.classList.add('today');
  var els=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{rootMargin:'0px 0px -8% 0px'});
    els.forEach(function(el){io.observe(el);});
  } else els.forEach(function(el){el.classList.add('in');});
  var nav=document.querySelector('.nav');
  var onS=function(){nav.classList.toggle('scrolled',window.scrollY>30);};
  window.addEventListener('scroll',onS,{passive:true});onS();
  var lb=document.getElementById('lb'),li=lb.querySelector('img');
  document.querySelectorAll('.g').forEach(function(g){
    g.addEventListener('click',function(){li.src=g.dataset.full;li.alt=g.querySelector('img').alt;lb.hidden=false;document.body.style.overflow='hidden';});
  });
  function close(){lb.hidden=true;li.src='';document.body.style.overflow='';}
  lb.addEventListener('click',function(e){if(e.target!==li)close();});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!lb.hidden)close();});
})();
