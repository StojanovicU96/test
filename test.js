$(".menu-icon").on("click", function() {
   if($(".drop-menu").css("display") === "block"){
    $(".drop-menu").css("display", "none");
   }else{
    $(".drop-menu").css("display", "block");
   }
});

