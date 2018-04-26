$(document).ready(function(){
    // load images from folder and counter
    // var imagesHtml = $.ajax({type: "GET", url: "images/", async: false}).responseText;
    // function addItems (data) {
    //     $(data).find("a").attr("href", function (i, val) {
    //         if( val.match(/\.(jpe?g|png|gif)$/) ) { 
    //             $(".gallery").append( "<div class='item item_active'><span class='item_remove'>x</span><img src='" + val +"'> </div>" );
    //         } 
    //     });
    // }

    // addItems(imagesHtml);
    
    // active counter
    $(".counter").append($(".item_active").length);

    // display modal window when click in image
    $(".item").click(function(){
        $(".modal").css("display", "block");
        $(".modal").children(".modal_img").attr("src", $(this).children("img").attr("src"));
    })
    // remove modal window when click in X button
    $(".modal_close").click(function(){
        $(".modal").css("display", "none");
    })

    // remove image when clicked in X button
    $(".item_remove").click(function(e){
        e.stopPropagation();
        $(this).parent(".item").blur().addClass("item_disabled").removeClass("item_active");
        $(".counter").empty().append($(".item_active").length);

    })

    // restore all removed images and refresh counter
    $(".btn").click(function(){
        $(".item").removeClass("item_disabled").addClass("item_active");
        $(".counter").empty().append($(".item_active").length);
    })
});