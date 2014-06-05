

(function() {
    var startClient;
    startClient = function(dataCon) {
        dataCon = dataConnection;
        var disp = new MapDisplay(dataCon);
        return setInterval(disp.gameLoop, 40);
    };

    window.startClient = startClient;

}).call(this);