/**
* jQuery ImageButton Plugin for Turpial
* Description: an easy way to create buttons in Turpial.
* Requires: JQuery
* Author: Andrea Stagi
* Copyright: 2012 Andrea Stagi
* License: GPL (included in the source)
*/

(function($) {

    $.fn.extend({
        
        ImageButton: function(options) {
            
            var defaults =  {
                containerId : $(this).attr('id'),
            }
            
            var parameters = $.extend(defaults, options);
            var height = 0;
            var width = 0;
            var that = this;

            function createMe(parameters) {
                var divImage = "<div id='" + parameters.containerId + "' style='" +
                "height: 45px;" +
                "width: 45px;'><img src='" + parameters.image + "'></div>";
                
                $("#" + parameters.containerId).append(divImage);
            }

            createMe(parameters);
            return that;
        }
    });

})(jQuery);
