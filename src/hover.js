import $ from "jquery";


require("jsdom").env("", function(err, window) {
    if (err) {
        console.error(err);
        return;
    }
  
    var $ = require("jquery")(window);
  });

  $(document).ready(function(){
    $("#text1, #text2, #text3, #text4").css({"opacity" : "0"});
    $("img#img1").hover(function(){
        $("#text1").css({"opacity" : "1"});
    },
    function(){
        $("#text1").css({"opacity" : "0"});
    }); 
    $("img#img2").hover(function(){
        $("#text2").css({"opacity" : "1"});
    },
    function(){
        $("#text2").css({"opacity" : "0"});
    }); 
    $("img#img3").hover(function(){
        $("#text3").css({"opacity" : "1"});
    },
    function(){
        $("#text3").css({"opacity" : "0"});
    }); 
    $("img#img4").hover(function(){
        $("#text4").css({"opacity" : "1"});
    },
    function(){
        $("#text4").css({"opacity" : "0"});
    }); 
});