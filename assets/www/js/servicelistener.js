

window.serviceListener = function() {
    
    var listenService = false;
    
    function activate() {
        listenService = true;
    }
    
    function deactivate() {
        listenService = false;
    }
    
    function sendStuff(content) {
        if(listenService == false)
            return;
        
        var tweetList = "";
        
        var messageText = "Hi Turpial human users!I arrive from the seeeerviceee uuuuuuhhhh";
        
        var values = { avatar : "pixmaps/mentionsdummy.png", username: "4ndreaSt4gi", 
                message: messageText, reposted_by : "Retweeted by Service",
                timestamp : "oct 18, 02:07 am from web in reply to xyz"}
        
        templates.getTemplate("templates/mobile-status.partial", function(template) {
            tweetList = templates.fillTemplate(template, values);
            $('#tweetList-timeline-page').html(tweetList + $('#tweetList-timeline-page').html());
        });
    };
    
    return {
        sendStuff: sendStuff,
        activate: activate,
        deactivate: deactivate
    };
}();