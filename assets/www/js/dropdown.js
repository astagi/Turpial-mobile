/**
* jQuery DropDown Plugin for Turpial
* Version: 0.1.0
* Description: fast developed, simple but cute drop down menu, optimized for Turpial.
* Requires: JQuery
* Author: Andrea Stagi
* Copyright: 2012 Andrea Stagi
* License: GPL (included in the source)
*/

(function($) {

    $.fn.extend({
        
        DropDown: function(options) {
            
            var defaults =  {
                containerId : $(this).attr('id'),
            }
            
            var parameters = $.extend(defaults, options);


            function createMe(parameters) {

                var divMain = "";
                var divOptions = "";

                divMain = "<div class= 'mainel' style='" +
                    "background-color:green" + ";" +
                    "height:" + 30 + "px;" +
                    "width:" + 200 + "px;'></div>";
                
                $("#" + parameters.containerId).addClass("dropdown");

                $("#" + parameters.containerId).append(divMain);
                
                divWrapper = "<div id='" + parameters.containerId + "wrapper" + "' style='" +
                    "background-color:yellow" + ";" +
                    "height: 120px;" +
                    "width:" + 200 + "px;'></div>";


                $("#" + parameters.containerId).append(divWrapper);
                

                divOptions = "<div class='scroller' style='" +
                    "background-color:black" + ";" +
                    "width:" + 200 + "px;'" + "></div>";


                $("#" + parameters.containerId + "wrapper").append(divOptions);
                
                $("#" + parameters.containerId + "wrapper").hide();
                
                $("#" + parameters.containerId + " .mainel").click(function() {
                    if($("#" + parameters.containerId + "wrapper").is(":visible")) {
                        $(document).unbind('click');
                        $("#" + parameters.containerId + "wrapper").hide();

                    } else {
                        $(document).bind('click', function(e) {  
                            var $clicked = $(e.target);
                            if (!$clicked.parents().hasClass("dropdown")) {
                                $(document).unbind('click');
                                $("#" + parameters.containerId + "wrapper").hide();
                            }
                        });
                        
                        $("#" + parameters.containerId + "wrapper").show();
                        iscrollFactory.getScroll(parameters.containerId + "wrapper").refresh();
                    }
                });
                    
                  addRow("white");
                  addRow("black");
                  addRow("white");
                  addRow("black");
                  addRow("white");
                  addRow("black");
                  
                  iscrollFactory.getScroll(parameters.containerId + "wrapper").refresh();

            }

            function addRow(row) {
                var div = "";
                div += "<div style='" +
                    "background-color:" + row + ";" + "" + 
                    "height:" + 30 + "px;" +
                    "width:" + 200 + "px;'></div>";


                $("#" + parameters.containerId + "wrapper" + " .scroller").append(div);

            }

            createMe(parameters);

        }
    });

})(jQuery);
