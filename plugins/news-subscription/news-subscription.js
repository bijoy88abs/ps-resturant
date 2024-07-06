$(document).ready(function () {
    const divDetails = `
    <div class="query-div">        
        <p class="query-txt">Want To Get New <br> Food Daily?</p>
        <input type="text" placeholder="Name" class="name-sec">
        <input type="email" placeholder="E-mail" class="mail-sec">
        <button class="btn-sec">Submit Now</button>
    </div>
    `;
    $(".news-subscription").html(divDetails);
});