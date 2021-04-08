console.log("exercice 9");

$(".dropBox").hide();

$(".collapseJS").on("click", function()
{
    if ($(this).children(".dropBox").is(":visible"))
    {
        $(this).children(".dropBox").hide();
    }
    else
    {
        $(this).children(".dropBox").show();
    }
 
});

$(".spamAlerte").on("click", function()
{
    $(this).remove();
})

$(".buttonDrop").on("click", function()
{
    if ($(this).parent().children("ul").is(":visible"))
    {
        $(this).parent().children("ul").hide();
    }
    else
    {
        $(this).parent().children("ul").show();
    }
});

$(".fix").addClass("sticky-top").css("top", "10px");