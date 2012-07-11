/**
* jQuery Template Plugin for Turpial
* Description: a Javascript port of the Turpial template system.
* Author: Andrea Stagi
* Copyright: 2012 Andrea Stagi
* License: GPL (included in the source)
*/

window.templates = function() {
    
    var templates = {};
    
    function checkTemplate(filename, callback){
        if(templates[filename])
            return true;
        else
            return false;
    };
    
    function getTemplate(filename, callback){
        if(templates[filename])
            callback(templates[filename]);
        else
            $.get(filename, function(response) {
                templates[filename] = response;
                callback(response);
            });
    };
    
    function fillTemplate(template, values){
        for (var key in values)
            template = template.replace(new RegExp( "<% @" + key + " %>", "g" ), values[key]);
        template = template.replace(new RegExp( "<% @([a-z])* %>", "g" ), "");
        return template;
    };

    return {
        getTemplate: getTemplate,
        checkTemplate: checkTemplate,
        fillTemplate: fillTemplate
    };
}();
