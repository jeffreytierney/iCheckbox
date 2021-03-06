(function($){
  
  // include jss
  (function(k){function l(c,b){return b.toUpperCase()}function j(c){var b=c.prop.replace(m,l),a;a=b?b.charAt(0).toUpperCase()+b.substr(1):"";var b={webkit:{style:"-webkit-",js_style:"webkit"+a,trans_evt:"webkitTransitionEnd",anim_evt:"webkitAnimationEnd"},moz:{style:"-moz-",js_style:"Moz"+a,trans_evt:"transitionend",anim_evt:"animationend"},o:{style:"-o-",js_style:"O"+a,trans_evt:"OTransitionEnd",anim_evt:"OAnimationEnd"},ms:{style:"-ms-",js_style:"Ms"+a,trans_evt:"MsTransitionEnd",anim_evt:"MsAnimationEnd"},
  w3c:{style:"",js_style:b,trans_evt:"transitionend",anim_evt:"animationend"}},d,f,e;a=null;try{for(var g in b){f=b[g].style;e=b[g].js_style;d=document.createElement("div");d.setAttribute("style",f+c.prop+":"+c.val+";");if(e in d.style){if(n&&(c.prop.toLowerCase()==="transition"||c.prop.toLowerCase()==="transform"))continue;a=b[g];break}d=null}}catch(h){}return a}function i(c,b){var b=b||"",a;if(!document.getElementById("app_stylesheet"))a=document.createElement("style"),a.id="app_stylesheet",a.type=
  "text/css",document.getElementsByTagName("head")[0].appendChild(a);(a=document.getElementById("app_stylesheet").sheet)||(a=document.styleSheets[document.styleSheets.length-1]);if(c)for(var d in c){var f="",e="",g;if(typeof c[d]==="object"){g=c[d];for(var h in g)e=g[h],e=e.replace(/_vendor_/ig,b),h=h.replace(/_vendor_/ig,b),f+=h+": "+e+"; "}else e=c[d],e=e.replace(/_vendor_/ig,b),f+=e;d=d.replace(/_vendor_/ig,b);try{a.insertRule?a.insertRule(d+" {"+f+"}",a.cssRules.length):a.addRule&&a.addRule(d,f,
  -1)}catch(i){}}}k.JSS={g:{},test:j,css:i,cssIf:function(c,b,a){a=c.else_css||a||"css"in c&&b;b=c.css||b;if(!c.prop||!c.val||!b)return null;(c=j(c))?i(b,c.style):a&&i(a);return c}};var m=/-([a-z])/ig,n=!!(navigator.userAgent.indexOf("MSIE 8")>-1)})(this);
  
  var dur = 150,
  handle_css = {
      "content":'"[]"',
      "text-indent":"-9999px",
      "display": "block",
      "top": "0",
      "left": "0px",
      "width": "40%",
      "height": "100%",
      "position":"absolute",
      "background": "#DCDCDC repeat-x scroll 0 0",
      "background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAbCAYAAAC9WOV0AAAAbElEQVR42gXBywaAQABA0fv/u1Z9VUUjkUhEYlRjpMfmdg5FUch5nlJVldR1LU3TSNu2EkKQruuk73sZhkHGcZRpmmSeZ1mWRdZ1lW3bJMYo+77LcRySUpKcs1zXJfd9y/M88r6vfN8nZVn6Ax68YWmk5yF8AAAAAElFTkSuQmCC)"
  },
  on_css = {
      "content": '"ON"',
      "text-indent": "0",
      "text-align":"center",
      "display": "block",
      "position": "absolute",
      "top": "0",
      "left": "-60%",
      "width": "60%",
      "padding-right":"40%",
      "height": "100%",
      "background": "#5292F1 repeat-x scroll 0 0",
      "color": "#FFF",
      "background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAaCAYAAAB2BDbRAAAAiklEQVR42mPQit78n8Eg7eh/BuP8K/8ZzIruAImSu/8ZLMruAYnyB/8ZrCofAYmap/8ZbOqeAYmGF/8Z7Jpe/2dwaH3zn8G3//1/hqBJH/8zhE37/J8hauaX/wxxc77+Z0ic//0/Q9qiH/8Zspb+/M+Qu/zXf4aiVb//MxSv+fOfoXQtkAjqvP4fACJWR0qqiNxRAAAAAElFTkSuQmCC)"
  },
  off_css = {
      "text-indent": "0",
      "text-align":"center",
      "display": "block",
      "position": "absolute",
      "top": "0px",
      "left": "60%",
      "width": "60%",
      "padding-left": "40%",
      "height": "100%",
      "color": "#7F7F7F"
  },
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
        "line-height":"25px",
        "display": "inline-block",
        "overflow": "hidden",
        "background-color": "transparent",
        "text-indent": "-9999px",
        "position": "relative",
        "text-decoration": "none",
        "border": "1px solid #BFBFBF",
        "font-family": "Arial, Helvetica, Verdana",
        "font-weight": "bolder",
        "font-size": "16px",
        "letter-spacing": "1px",
        "vertical-align":"middle",
        "z-index":"100"
    },
    ".i_cb .slider:after": handle_css,
    ".i_cb .slider:before": on_css,
    ".i_cb .slider": off_css,
    ".i_cb.unchecked .slider":{
      "background": "#F1F1F1 repeat-x scroll 0 -1px",
      "background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAaCAYAAAB2BDbRAAAAUklEQVR42i3Hyw3AIAwE0W3cbdEGJXAEGSPOfDeJ4jk8aSAiRAiBiDESKSUi50yUUhxVJWqtjpkRrTWi9+6MMYg5J7HWIvbezjnHufc6fPv59gHbaGGcmzcb7AAAAABJRU5ErkJggg==)"
    }
  },
  border_radius_css = {
    ".i_cb":{"_vendor_border-radius": "5px"},
    ".i_cb .slider:after":{"_vendor_border-radius": "4px"},
    ".i_cb .slider":{"_vendor_border-radius": "5px", "background":"transparent"},
    ".i_cb .slider:before":{"_vendor_border-radius": "4px"},
    ".i_cb.unchecked .slider:before":{"padding-right":"0px"}
  },
  text_shadow_css = {
    ".i_cb": {"_vendor_text-shadow": "1px 1px 2px rgba(0, 0, 0, 0.3)"}
    
  },
  box_shadow_css = {
    ".i_cb .slider:after": {"_vendor_box-shadow": "0px 0px 3px rgba(0, 0, 0, 0.5)"}
  },
  background_size_css = {
    ".i_cb .slider:after": {"_vendor_background-size":"1px 100% !important"},
    ".i_cb .slider:before": {"_vendor_background-size":"1px 100% !important"},
    ".i_cb .slider": {"_vendor_background-size":"1px 100% !important"}
  },
  transform_css = {
    ".i_cb .slider": {
      "_vendor_transition": "all "+dur+"ms linear",
      "_vendor_backface-visibility": "hidden",
      "_vendor_transform": "translateX(0)"
    },
    ".i_cb.unchecked .slider": {
      "_vendor_transform": "translateX(-60%)"
    }
  };
  
  JSS.css(main_css);
  JSS.cssIf({prop:"border-radius", val:"5px"},border_radius_css);
  JSS.cssIf({prop:"text-shadow",val:"rgba(0,0,0,.5)"},text_shadow_css);
  JSS.cssIf({prop:"box-shadow",val:"rgba(0,0,0,.5)"},box_shadow_css);
  JSS.cssIf({prop:"background-size",val:"1px 100%"},background_size_css);
  var does_transform = JSS.cssIf({prop:"transition",val:"translateX(0px)"},transform_css),
      // i hate browser sniffing, but IE7 is the only one i know of right now that doesnt support pseudo
      // and this is easier than making every browser do a test for it
      // but i will move to that soon (i think)
      supports_pseudo = !(navigator.userAgent.indexOf("MSIE 7") > -1);
  
  
  if(!supports_pseudo) {
    off_css["left"] = "0";
    var multi_el_css = {
      ".i_cb .off": off_css,
      ".i_cb .on": on_css,
      ".i_cb .handle": handle_css
    };
    
    JSS.css(multi_el_css); 
  }
  
  var custom_css={}, custom_css_counter=0;
  
  $.fn.iCheckbox = function(settings) {
    var config = {
      link_class:"",
      height:null,
      width:null,
      font_size:null,
      on:null,
      off:null
    };
    if(settings) { config = $.extend(config, settings); }
    
    this.each(function() {
      var $this = $(this),
          state = $this[0].checked,
          method = (state ? "removeClass" : "addClass"),
          off_text = config.off || "OFF",
          on_text = config.on || "ON",
          on_text_class = "";
          
          
      if(on_text != "ON" && supports_pseudo) {
        if(custom_css.hasOwnProperty(on_text)) { on_text_class = custom_css[on_text]; }
        else { 
          on_text_class = custom_css[on_text] = "i_cb_"+custom_css_counter++;
          var add_custom_css = {}; add_custom_css[".i_cb."+on_text_class+" .slider:before"] ={content:'"'+on_text+'"'};
          JSS.css(add_custom_css);
        }
         
      }
        
      $this.addClass("i_cb_orig");
      var el_string = (supports_pseudo ? 
        '<a class="i_cb ' + config.link_class + ' '+ on_text_class +'" href="#"><span class="slider">'+off_text+'</span></a>' :
        '<a class="i_cb ' + config.link_class + '" href="#"><span class="slider no_ps"><span class="on">'+on_text+'</span><span class="handle">[]</span><span class="off">'+off_text+'</span></span></a>'
      );
      var $el = $(el_string)[method]("unchecked").bind("click", 
        function(e, triggered) { 
          e.preventDefault();
          var state = $this[0].checked = (triggered ? $this[0].checked : !$this[0].checked);
          if(state) { $(this).removeClass("unchecked");}
          else { $(this).addClass("unchecked"); }
          
          if(!does_transform) {
            if(state) {
              $(this).find(".slider").animate({"margin-left":0}, dur);
            } else {
              $(this).find(".slider").animate({"margin-left":"-60%"}, dur);
            }
          }
          if(!triggered) { $this.trigger("change", true); }
          
        });

        var font_size, height, css = {};
        if(config.font_size) { font_size = config.font_size; }
        if(config.height) {
          height = parseInt(config.height, 10);
          if (!font_size) { font_size = (height > 24 ? "16px" : (height > 18 ? "13px" : "10px")); }
          
          css["height"] = config.height;
          css["line-height"] = parseInt(config.height, 10)+"px";
        };
        css["font-size"] = font_size;
        if(config.width) { css["width"] = config.width; }
        
        $el.css(css);
        
        if(!does_transform) {
          if(state) {
            $el.find(".slider").css({"margin-left":0});
          } else {
            $el.find(".slider").css({"margin-left":"-60%"});
          }
        }
        
        $this.bind("change", function(e, triggered) { if(!triggered) { $el.trigger("click", true); } });

        $el.insertAfter($this);
        
        
    });
    
    return this;
  }
  
})(jQuery);