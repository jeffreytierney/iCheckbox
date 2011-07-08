(function($){
  
  // include jss
  (function(k){function l(c,b){return b.toUpperCase()}function j(c){var b=c.prop.replace(m,l),a;a=b?b.charAt(0).toUpperCase()+b.substr(1):"";var b={webkit:{style:"-webkit-",js_style:"webkit"+a,trans_evt:"webkitTransitionEnd",anim_evt:"webkitAnimationEnd"},moz:{style:"-moz-",js_style:"Moz"+a,trans_evt:"transitionend",anim_evt:"animationend"},o:{style:"-o-",js_style:"O"+a,trans_evt:"OTransitionEnd",anim_evt:"OAnimationEnd"},ms:{style:"-ms-",js_style:"Ms"+a,trans_evt:"MsTransitionEnd",anim_evt:"MsAnimationEnd"},
  w3c:{style:"",js_style:b,trans_evt:"transitionend",anim_evt:"animationend"}},d,f,e;a=null;try{for(var g in b){f=b[g].style;e=b[g].js_style;d=document.createElement("div");d.setAttribute("style",f+c.prop+":"+c.val+";");if(e in d.style){if(n&&(c.prop.toLowerCase()==="transition"||c.prop.toLowerCase()==="transform"))continue;a=b[g];break}d=null}}catch(h){}return a}function i(c,b){var b=b||"",a;if(!document.getElementById("app_stylesheet"))a=document.createElement("style"),a.id="app_stylesheet",a.type=
  "text/css",document.getElementsByTagName("head")[0].appendChild(a);(a=document.getElementById("app_stylesheet").sheet)||(a=document.styleSheets[document.styleSheets.length-1]);if(c)for(var d in c){var f="",e="",g;if(typeof c[d]==="object"){g=c[d];for(var h in g)e=g[h],e=e.replace(/_vendor_/ig,b),h=h.replace(/_vendor_/ig,b),f+=h+": "+e+"; "}else e=c[d],e=e.replace(/_vendor_/ig,b),f+=e;d=d.replace(/_vendor_/ig,b);try{a.insertRule?a.insertRule(d+" {"+f+"}",a.cssRules.length):a.addRule&&a.addRule(d,f,
  -1)}catch(i){}}}k.JSS={g:{},test:j,css:i,cssIf:function(c,b,a){a=c.else_css||a||"css"in c&&b;b=c.css||b;if(!c.prop||!c.val||!b)return null;(c=j(c))?i(b,c.style):a&&i(a);return c}};var m=/-([a-z])/ig,n=!!(navigator.userAgent.indexOf("MSIE 8")>-1)})(this);
  
  var dur = 150,
  main_css = {
    ".i_cb_orig": {
      "position":"absolute !important",
      "top":"-99999px !important",
      "left":"-99999px !important",
      "height":"0px !important",
      "width":"0px !important"
    },
    ".i_cb": {
        "width": "100px",
        "height": "25px",
        "display": "inline-block",
        "overflow": "hidden",
        "background-color": "transparent",
        "text-indent": "-9999px",
        "position": "relative",
        "line-height": "25px",
        "text-decoration": "none",
        "border": "1px solid #BFBFBF",
        "font-family": "Arial, Helvetica, Verdana",
        "font-weight": "bolder",
        "font-size": "16px",
        "letter-spacing": "1px",
        "vertical-align":"middle",
        "z-index":"100"
    },
    ".i_cb .slider:after": {
        "content":'"[]"',
        "text-indent":"-9999px",
        "display": "block",
        "top": "0",
        "left": "0px",
        "width": "40px",
        "height": "25px",
        "z-index":"-1",
        "position":"absolute",
        "background": "#EFEFEF repeat-x scroll 0 -1px",
        "background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAbCAYAAAC9WOV0AAAAbElEQVR42gXBywaAQABA0fv/u1Z9VUUjkUhEYlRjpMfmdg5FUch5nlJVldR1LU3TSNu2EkKQruuk73sZhkHGcZRpmmSeZ1mWRdZ1lW3bJMYo+77LcRySUpKcs1zXJfd9y/M88r6vfN8nZVn6Ax68YWmk5yF8AAAAAElFTkSuQmCC)"
    },
    ".i_cb .slider:before": {
        "content": '"ON"',
        "text-indent": "0",
        "text-align":"center",
        "display": "block",
        "position": "absolute",
        "top": "0",
        "left": "-60px",
        "width": "60px",
        "padding-right":"5px",
        "height": "25px",
        "z-index":"-1",
        "background": "#5292F1 repeat-x scroll 0 0",
        "color": "#FFF",
        "background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAaCAYAAAB2BDbRAAAAiklEQVR42mPQit78n8Eg7eh/BuP8K/8ZzIruAImSu/8ZLMruAYnyB/8ZrCofAYmap/8ZbOqeAYmGF/8Z7Jpe/2dwaH3zn8G3//1/hqBJH/8zhE37/J8hauaX/wxxc77+Z0ic//0/Q9qiH/8Zspb+/M+Qu/zXf4aiVb//MxSv+fOfoXQtkAjqvP4fACJWR0qqiNxRAAAAAElFTkSuQmCC)"
    },
    ".i_cb .slider": {
        /*"content": '"OFF"',*/
        "text-indent": "0",
        "text-align":"center",
        "display": "block",
        "position": "absolute",
        "top": "0",
        "left": "60px",
        "width": "60px",
        "padding-left": "40px",
        "height": "25px",
        "z-index":"-1",
        "color": "#7F7F7F"
    }
    
  },
  border_radius_css = {
    ".i_cb":{"_vendor_border-radius": "5px"},
    ".i_cb .on, .i_cb .off, .i_cb .slider:after":{"_vendor_border-radius": "4px"},
    ".i_cb .slider":{"_vendor_border-radius": "6px", "background":"transparent"},
    ".i_cb .slider:before":{"_vendor_border-radius": "4px"},
    ".i_cb.off .slider:before":{"padding-right":"0px"},
    ".i_cb.off .slider":{
      "background": "#F1F1F1 repeat-x scroll 0 -1px",
      "background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAaCAYAAAB2BDbRAAAAUklEQVR42i3Hyw3AIAwE0W3cbdEGJXAEGSPOfDeJ4jk8aSAiRAiBiDESKSUi50yUUhxVJWqtjpkRrTWi9+6MMYg5J7HWIvbezjnHufc6fPv59gHbaGGcmzcb7AAAAABJRU5ErkJggg==)"
    }
  },
  text_shadow_css = {
    ".i_cb": {"_vendor_text-shadow": "1px 1px 2px rgba(0, 0, 0, 0.3)"}
    
  },
  box_shadow_css = {
    ".i_cb .slider": {"_vendor_box-shadow": "0px 0px 3px rgba(0, 0, 0, 0.5)"}
    
  },
  transform_css = {
    ".i_cb .slider, .i_cb .on, .i_cb .off": {
      "_vendor_transition": "all "+dur+"ms linear"
    },
    ".i_cb .slider": {
      "_vendor_transform": "translateX(0px)"
    },
    ".i_cb.off .slider": {
      "_vendor_transform": "translateX(-60px)"
    }
  },
  no_transform_css = {
    ".i_cb.off .off,.i_cb.off .on": {
      "margin-left" : "-100px"
    },
    ".i_cb.off .slider": {
      "margin-left": "-60px"
    }
    
  };
  
  JSS.css(main_css);
  JSS.cssIf({prop:"border-radius", val:"5px"},border_radius_css);
  JSS.cssIf({prop:"text-shadow",val:"rgba(0,0,0,.5)"},text_shadow_css);
  JSS.cssIf({prop:"box-shadow",val:"rgba(0,0,0,.5)"},box_shadow_css);
  var does_transform = JSS.cssIf({prop:"transition",val:"translateX(0px)"},transform_css);
  
  $.fn.iCheckbox = function(settings) {
    var config = {};
    if(settings) { config = $.extend(config, settings); }
    
    this.each(function() {
      var $this = $(this),
          state = $this[0].checked = !$this[0].checked,
          method = (state ? "removeClass" : "addClass");
        
      $this.addClass("i_cb_orig");
      $('<a class="i_cb" href="#"><span class="slider">OFF</span></a>').bind("click", 
        function(e) { 
          e.preventDefault();
          var state = $this[0].checked = !$this[0].checked;
          if(state) { $(this).removeClass("off");}
          else { $(this).addClass("off"); }
          
          if(!does_transform) {
            if(state) {
              $(this).find(".slider").animate({"margin-left":0}, dur);
            } else {
              $(this).find(".slider").animate({"margin-left":"-60px"}, dur);
            }
          }
          
        }).insertAfter($this)[method]("off");
    });
    
    return this;
  }
  
})(jQuery);