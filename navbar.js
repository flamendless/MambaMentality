$(document).ready(
function()
{
  $(window).scroll(
    function()
    {
      scroll_navbar();
    });

  const navbar = $("#navbar");
  const sticky = navbar.offset().top;

  function scroll_navbar()
  {
    const scrolltop = $(window).scrollTop();
    if (scrolltop >= sticky)
      navbar.addClass("sticky");
    else
      navbar.removeClass("sticky");
  }
})
