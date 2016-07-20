"use strict";

$(document).on("click", ".dropdown-select > .dropdown-menu > li > a", function(e){
    e.preventDefault();
    $(this).parents(".dropdown-select").find(".dropdown-title").html($(this).html());
});