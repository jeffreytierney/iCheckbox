(function($){
  
  // include jss

  var main_css = {
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
        "z-index":"1"
    },
    ".i_cb .slider:after": {
        "content":'"[]"',
        "text-indent":"-9999px",
        "display": "block",
        "top": "0",
        "left": "60px",
        "width": "40px",
        "height": "25px",
        "z-index":"5",
        "position":"absolute",
        "background": "#EFEFEF repeat-x scroll 0 -1px",
        "background-image": "url(data:image/png;base64,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)"
    },
    ".i_cb .slider:before": {
        "content": '"ON"',
        "text-indent": "0",
        "text-align":"center",
        "display": "block",
        "position": "absolute",
        "top": "0",
        "left": "0px",
        "width": "60px",
        "padding-right":"40px",
        "height": "25px",
        "z-index":"-1",
        "background": "#5292F1 repeat-x scroll 0 0",
        "background-image": "url(data:image/png;base64,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)",
        "color": "#FFF"
    },
    ".i_cb .slider": {
        /*"content": '"OFF"',*/
        "text-indent": "0",
        "text-align":"center",
        "display": "block",
        "position": "absolute",
        "top": "0",
        "left": "0px",
        "width": "60px",
        "padding-left": "100px",
        "height": "25px",
        "z-index":"-1",
        "color": "#7F7F7F",
        "background": "#F1F1F1 repeat-x scroll 0 -1px",
        "background-image": "url(data:image/png;base64,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)"
    }
    
  },
  border_radius_css = {
    ".i_cb":{"_vendor_border-radius": "6px"},
    ".i_cb .on, .i_cb .slider:before, .i_cb .off, .i_cb .slider:after":{"_vendor_border-radius": "4px"},
    ".i_cb .slider":{"_vendor_border-radius": "4px"}
  },
  text_shadow_css = {
    ".i_cb": {"_vendor_text-shadow": "1px 1px 2px rgba(0, 0, 0, 0.3)"}
    
  },
  box_shadow_css = {
    ".i_cb .slider": {"_vendor_box-shadow": "0px 0px 3px rgba(0, 0, 0, 0.5)"}
    
  },
  transform_css = {
    ".i_cb .slider, .i_cb .on, .i_cb .off": {
      "_vendor_transition": "_vendor_transform 150ms linear"
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
  var does_transform = JSS.cssIf({prop:"transform",val:"translateX(0px)"},transform_css);
  
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
              $(this).find(".on,.off, .slider").animate({"margin-left":0});
            } else {
              $(this).find(".on,.off").animate({"margin-left":"-100px"});
              $(this).find(".slider").animate({"margin-left":"-60px"});
            }
          }
          
        }).insertAfter($this)[method]("off");
    });
    
    return this;
  }
  
})(jQuery);