(function($){
    $(function(){
        $(".mobile-icon").click(function(){
            $(".nav-back").fadeToggle();
            $("nav ul").slideToggle();
            $(".mobile-nav").fadeToggle();
        });
        
        $(window).resize(function(){
            if ($(window).width() > 600)
                {
                    $("nav ul").removeAttr("style");
                }
        });
        
        $(".hamburger").click(function(){
            
            if ($(".hamburger").attr("src") == "images/ikony/hamburger.png")
                {
                    $(".hamburger").attr("src", "images/ikony/crossnew.png");
                }
            else
                {
                    $(".hamburger").attr("src", "images/ikony/hamburger.png");
                }
        });

    });
})(jQuery);