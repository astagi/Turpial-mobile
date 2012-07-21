

window.iscrollFactory = function() {
    
    var iscrollers = {};
    
    function getScroll(elementid) {
        if(!iscrollers[elementid])
            iscrollers[elementid] =  new iScroll(elementid, { bounce : false, vScrollbar : false });
        return iscrollers[elementid];
    }
    
    function removeScroll(elementid) {
        if(!iscrollers[elementid])
            delete iscrollers[elementid];
    }
    
    return {
        getScroll: getScroll,
        removeScroll: removeScroll
    };
}();
