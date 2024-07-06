(function ($) {

    $.fn.addCart = function (options) {

        console.log('wwww', options)


        const divDetails = `
        <div class="img-parent">
        <div id="jq-prev"></div>
            <div class="img-child-1 jq1 jq1-active">
                <img src="images/featured/${options.img1}">
                <button class="btn-tag">Lunch</button>

            </div>
            <div class="img-child-2 jq1 jq1-active">
            <img src="images/featured/${options.img2}">
                <button class="btn-tag">Breakfast</button>

            </div>
            <div class="img-child-3 jq1 jq1-active">
            <img src="images/featured/${options.img3}">
                <button class="btn-tag">Dessert</button>

            </div>
            <div class="img-child-4 jq1 jq1-active">
            <img src="images/featured/${options.img4}">
                <button class="btn-tag">Dessert</button>
            </div>

            
            <div class="img-child-4 jq1 jq1-inactive">
            <img src="images/featured/${options.img5}">
                <button class="btn-tag">Dessert</button>
            </div>

            
            <div class="img-child-4 jq1 jq1-inactive">
            <img src="images/featured/${options.img6}">
                <button class="btn-tag">Dessert</button>
            </div>
            <div id="jq-next"></div>
        </div>
        `;

        $(this).html(divDetails);
    };



}(jQuery));


let count = 0;

$(document).ready(function () {
    $('#jq-prev').click(function (e) {
        if (count + 3 < $(".jq1").length-1) {
            count++;
            $(".jq1").each(function (key) {
                if (key >= count && key <= count + 3) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        }

    })
});

$(document).ready(function () {
    $('#jq-next').click(function (e) {
        if (count > 0 && count + 3 <= $(".jq1").length) {
            count--;
            $(".jq1").each(function (key) {
                if (key >= count && key <= count + 3) {
                    $(this).show();
                } else {
                    $(this).hide();
                }

            });
        }

    })
});