/*-----------------------------------------------------------------------------------*/
/* Responsive menus */
/*-----------------------------------------------------------------------------------*/
(function(a){var b=0;a.fn.mobileMenu=function(c){function m(a){if(f()&&!g(a)){l(a)}else if(f()&&g(a)){j(a)}else if(!f()&&g(a)){k(a)}}function l(b){if(e(b)){var c='<select id="mobileMenu_'+b.attr("id")+'" class="mobileMenu">';c+='<option value="">'+d.topOptionText+"</option>";b.find("li").each(function(){var b="";var e=a(this).parents("ul, ol").length;for(i=1;i<e;i++){b+=d.indentString}var f=a(this).find("a:first-child").attr("href");var g=b+a(this).clone().children("ul, ol").remove().end().text();c+='<option value="'+f+'">'+g+"</option>"});c+="</select>";b.parent().append(c);a("#mobileMenu_"+b.attr("id")).change(function(){h(a(this))});j(b)}else{alert("mobileMenu will only work with UL or OL elements!")}}function k(b){b.css("display","");a("#mobileMenu_"+b.attr("id")).hide()}function j(b){b.hide("display","none");a("#mobileMenu_"+b.attr("id")).show()}function h(a){if(a.val()!==null){document.location.href=a.val()}}function g(c){if(c.attr("id")){return a("#mobileMenu_"+c.attr("id")).length>0}else{b++;c.attr("id","mm"+b);return a("#mobileMenu_mm"+b).length>0}}function f(){return a(window).width()<d.switchWidth}function e(a){return a.is("ul, ol")}var d={switchWidth:768,topOptionText:"Select a page",indentString:"   "};return this.each(function(){if(c){a.extend(d,c)}var b=a(this);a(window).resize(function(){m(b)});m(b)})}})(jQuery);

/*-----------------------------------------------------------------------------------*/
/* FITVIDS.JS - Responsive video embeds */
/*-----------------------------------------------------------------------------------*/
/*global jQuery */
/*! 
* FitVids 1.0
*
* Copyright 2011, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
* Date: Thu Sept 01 18:00:00 2011 -0500
*/

(function( $ ){

  $.fn.fitVids = function( options ) {
    var settings = {
      customSelector: null
    }
    
    var div = document.createElement('div'),
        ref = document.getElementsByTagName('base')[0] || document.getElementsByTagName('script')[0];
        
  	div.className = 'fit-vids-style';
    div.innerHTML = '&shy;<style>         \
      .fluid-width-video-wrapper {        \
         width: 100%;                     \
         position: relative;              \
         padding: 0;                      \
      }                                   \
                                          \
      .fluid-width-video-wrapper iframe,  \
      .fluid-width-video-wrapper object,  \
      .fluid-width-video-wrapper embed {  \
         position: absolute;              \
         top: 0;                          \
         left: 0;                         \
         width: 100%;                     \
         height: 100%;                    \
      }                                   \
    </style>';
                      
    ref.parentNode.insertBefore(div,ref);
    
    if ( options ) { 
      $.extend( settings, options );
    }
    
    return this.each(function(){
      var selectors = [
        "iframe[src^='http://player.vimeo.com']", 
        "iframe[src^='http://www.youtube.com']", 
        "iframe[src^='http://www.kickstarter.com']", 
        "object", 
        "embed"
      ];
      
      if (settings.customSelector) {
        selectors.push(settings.customSelector);
      }
      
      var $allVideos = $(this).find(selectors.join(','));

      $allVideos.each(function(){
        var $this = $(this);
        if (this.tagName.toLowerCase() == 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) { return; } 
        var height = this.tagName.toLowerCase() == 'object' ? $this.attr('height') : $this.height(),
            aspectRatio = height / $this.width();
        $this.wrap('<div class="fluid-width-video-wrapper" />').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+"%");
        $this.removeAttr('height').removeAttr('width');
      });
    });
  
  }
})( jQuery );

/* 
SmoothScroll v0.9.9
Licensed under the terms of the MIT license.

People involved
- Balazs Galambosi: maintainer (CHANGELOG.txt)
- Patrick Brunner (patrickb1991@gmail.com)
- Michael Herf: ssc_pulse Algorithm
*/

;(function(e){if(e("#parallax").length>0&&!/(Android|BlackBerry|iPhone|iPod|iPad|Palm|Symbian)/.test(navigator.userAgent)){var t=150;var n=700;var r=170;var i=true;var s=6;var o=1;var u=true;var a=60;var f=false;var l={x:0,y:0};var c=false;var h=true;var p=document.documentElement;var d;var v={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36};function m(){if(!document.body)return;var e=document.body;var t=document.documentElement;var n=window.innerHeight;var r=e.scrollHeight;p=document.compatMode.indexOf("CSS")>=0?t:e;d=e;c=true;if(top!=self){f=true}else if(r>n&&(e.offsetHeight<=n||t.offsetHeight<=n)){p.style.height="auto";if(p.offsetHeight<=n){var i=document.createElement("div");i.style.clear="both";e.appendChild(i)}}if(!h){e.style.backgroundAttachment="scroll";t.style.backgroundAttachment="scroll"}if(u){k("keydown",E)}}var g=[];var y=false;function b(e,r,s,o){o||(o=1e3);O(r,s);g.push({x:r,y:s,lastX:r<0?.99:-.99,lastY:s<0?.99:-.99,start:+(new Date)});if(y){return}var u=function(){var a=+(new Date);var f=0;var l=0;for(var c=0;c<g.length;c++){var h=g[c];var p=a-h.start;var d=p>=n;var v=d?1:p/n;if(i){v=_(v)}var m=h.x*v-h.lastX>>0;var b=h.y*v-h.lastY>>0;f+=m;l+=b;h.lastX+=m;h.lastY+=b;if(d){g.splice(c,1);c--}}if(r){var w=e.scrollLeft;e.scrollLeft+=f;if(f&&e.scrollLeft===w){r=0}}if(s){var E=e.scrollTop;e.scrollTop+=l;if(l&&e.scrollTop===E){s=0}}if(!r&&!s){g=[]}if(g.length){setTimeout(u,o/t+1)}else{y=false}};setTimeout(u,0);y=true}function w(e){if(!c){init()}var t=e.target;var n=C(t);if(!n||e.defaultPrevented||A(d,"embed")||A(t,"embed")&&/\.pdf/i.test(t.src)){return true}var i=e.wheelDeltaX||0;var s=e.wheelDeltaY||0;if(!i&&!s){s=e.wheelDelta||0}if(Math.abs(i)>1.2){i*=r/120}if(Math.abs(s)>1.2){s*=r/120}b(n,-i,-s);e.preventDefault()}function E(e){var t=e.target;var n=e.ctrlKey||e.altKey||e.metaKey;if(/input|textarea|embed/i.test(t.nodeName)||t.isContentEditable||e.defaultPrevented||n){return true}if(A(t,"button")&&e.keyCode===v.spacebar){return true}var r,i=0,s=0;var o=C(d);var u=o.clientHeight;if(o==document.body){u=window.innerHeight}switch(e.keyCode){case v.up:s=-a;break;case v.down:s=a;break;case v.spacebar:r=e.shiftKey?1:-1;s=-r*u*.9;break;case v.pageup:s=-u*.9;break;case v.pagedown:s=u*.9;break;case v.home:s=-o.scrollTop;break;case v.end:var f=o.scrollHeight-o.scrollTop-u;s=f>0?f+10:0;break;case v.left:i=-a;break;case v.right:i=a;break;default:return true}b(o,i,s);e.preventDefault()}function S(e){d=e.target}var x={};setInterval(function(){x={}},10*1e3);var T=function(){var e=0;return function(t){return t.ssc_uniqueID||(t.ssc_uniqueID=e++)}}();function N(e,t){for(var n=e.length;n--;)x[T(e[n])]=t;return t}function C(e){var t=[];var n=p.scrollHeight;do{var r=x[T(e)];if(r){return N(t,r)}t.push(e);if(n===e.scrollHeight){if(!f||p.clientHeight+10<n){return N(t,document.body)}}else if(e.clientHeight+10<e.scrollHeight){overflow=getComputedStyle(e,"").getPropertyValue("overflow");if(overflow==="scroll"||overflow==="auto"){return N(t,e)}}}while(e=e.parentNode)}function k(e,t,n){window.addEventListener(e,t,n||false)}function L(e,t,n){window.removeEventListener(e,t,n||false)}function A(e,t){return e.nodeName.toLowerCase()===t.toLowerCase()}function O(e,t){e=e>0?1:-1;t=t>0?1:-1;if(l.x!==e||l.y!==t){l.x=e;l.y=t;g=[]}}function M(e){var t,n,r;e=e*s;if(e<1){t=e-(1-Math.exp(-e))}else{n=Math.exp(-1);e-=1;r=1-Math.exp(-e);t=n+r*(1-n)}return t*o}function _(e){if(e>=1)return 1;if(e<=0)return 0;if(o==1){o/=M(1)}return M(e)}e.browser.chrome=/chrome/.test(navigator.userAgent.toLowerCase());if(e.browser.chrome){k("mousedown",S);k("mousewheel",w);k("load",m)}}})(jQuery);