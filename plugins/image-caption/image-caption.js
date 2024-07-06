(function ($) {

    $.fn.addCaptionText = function (options) {

        const divDetails = `
        <div class="txt-parent">
            <div class="txt-child">
                <a>${options.title}</a>
            </div>
            <div class="add-txt-child">
                <i class="fa-regular fa-user"></i> ${options.name} <i class="fa-regular fa-calendar"></i> ${options.time}
            </div>
            <div class="add-txt-child">
              <p>${options.details}</p>
            </div>
        </div>
        `;

        $(this).html(divDetails);

    };

}(jQuery));