/**
* jQuery DropDown Plugin for Turpial
* Description: fast developed, simple but cute drop down menu, optimized for Turpial.
* Requires: JQuery , iScroll4
* Author: Andrea Stagi
* Copyright: 2012 Andrea Stagi
* License: GPL (included in the source)
*/

var currentDropDownId = "";

$(document).ready(function() {  
    
    $("body").click(function(){
        var $target = $(event.target);
        if(!$target.parents().is(currentDropDownId)){
            $(".wrapper").hide();
        }
    });
    
});

(function($) {

    $.fn.extend({
        
        DropDown: function(options) {
            
            var defaults =  {
                containerId : $(this).attr('id'),
            }
            
            var parameters = $.extend(defaults, options);
            var height = 0;
            var width = 0;
            var that = this;

            function createMe(parameters) {

                var divMain = "";
                var divOptions = "";
                
                height = $("#" + parameters.containerId).height();
                width = $("#" + parameters.containerId).width();
                
                if(height == 0)
                    height = $("#" + parameters.containerId).parent().height();
                else
                    height = 30;
                
                if(width == 0)
                    width = $("#" + parameters.containerId).parent().width();
                else
                    width = 200;

                divMain = "<div class= 'mainel' style='" +
                    "height:" + height + "px;" +
                    "width:" + width + "px;'></div>";
                
                $("#" + parameters.containerId).addClass("dropdown");
                this.
                $("#" + parameters.containerId).append(divMain);
                
                divWrapper = "<div class='wrapper' id='" + parameters.containerId + "wrapper" + "' style='" +
                    "height: 120px;" +
                    "width:" + width + "px;'></div>";
                
                var mainRow = createRow(height, width, "pixmaps/turpial.png", "@Andrea", "mainrow");

                $("#" + parameters.containerId + " .mainel").html(mainRow);
                $("#" + parameters.containerId).append(divWrapper);
                

                divOptions = "<div class='scroller' style='" +
                    "width:" + width + "px;'" + "></div>";


                $("#" + parameters.containerId + "wrapper").append(divOptions);
                
                $("#" + parameters.containerId + "wrapper").hide();

                
                $("#" + parameters.containerId + " .mainel .mainrow").click(function() {
                    
                    if($("#" + parameters.containerId + "wrapper").is(":visible")) {
                        $("#" + parameters.containerId + "wrapper").hide();

                    } else {
                        $(".wrapper").hide();
                        currentDropDownId = "#" + parameters.containerId;
                        $("#" + parameters.containerId + "wrapper").show();
                        iscrollFactory.getScroll(parameters.containerId + "wrapper").refresh();
                    }
                });
                  
                iscrollFactory.getScroll(parameters.containerId + "wrapper").refresh();

            }
            
            function createRow(height, width, icon, text, classname, offset) {
                
                var divRow = "";
                var imgoffset = 0;
                
                if(icon != undefined)
                    imgoffset = height;
                
                if(offset == undefined)
                    offset = 0;
                
                if(text != undefined) {
                    divRow += "<div class='" + classname + "' style='float: right;" +
                        "width:" + (width - imgoffset - offset / 2) + "px;" +
                        "height:" + height + "px;" +
                        "'><div class='contenttext' style='line-height:" + height + "px;'>" + text + "</div></div>";
                }
                
                if(icon != undefined) {
                    divRow += "<div class='" + classname + "' style='float: right;" +
                        "width:" + (height + offset / 2) + "px;" +
                        "height:" + height + "px;" +
                        "'><img src='" + icon + "'></div>";
                }
                
                divRow = "<div class='rowcontainer' style='" +
                    "width:" + width + "px;" +
                    "height:" + height + "px;" +
                    "'>" + divRow + "</div>";
                
                return divRow;
            }

            this.addRow = function(image, content) {
                var div = createRow(height, width, image, content, "optionbtn", 4);
                $("#" + parameters.containerId + "wrapper" + " .scroller").append(div);
                return that;
            }

            createMe(parameters);
            return that;
        }
    });

})(jQuery);
