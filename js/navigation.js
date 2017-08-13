


(function()
{
var speed = 300;
var moving_frequency = 15; // Affects performance !
var links = document.querySelectorAll('a');
var href;
for(var i=0; i<links.length; i++)
{   
    
    href = (links[i].attributes.href === undefined) ? null : links[i].attributes.href.value.toString();
    // if(href !== null && href.length > 1 && href.substr(0, 1) == '#' > -1)
    if(href !== null && href.length > 1 && href.indexOf("#") > -1)
    {
        links[i].onclick = function()
        {
        document.querySelector("#menuToggle input").checked=false;
            var element;
            var href = this.attributes.href.value.toString();
            if(element = document.getElementById(href.substr(1)))
            {
                var hop_count = speed/moving_frequency
                var getScrollTopDocumentAtBegin = getScrollTopDocument();
                var gap = (getScrollTopElement(element) - getScrollTopDocumentAtBegin) / hop_count;

                for(var i = 1; i <= hop_count; i++)
                {
                    (function()
                    {
                        var hop_top_position = gap*i;
                        setTimeout(function(){  window.scrollTo(0, hop_top_position + getScrollTopDocumentAtBegin); }, moving_frequency*i);
                    })();
                }
            }

            return false;
        };

    }
}

var getScrollTopElement =  function (e)
{
    var top = 0;

    while (e.offsetParent != undefined && e.offsetParent != null)
    {
        top += e.offsetTop + (e.clientTop != null ? e.clientTop : 0);
        e = e.offsetParent;
    }

    return top;
};

var getScrollTopDocument = function()
{
    return document.documentElement.scrollTop + document.body.scrollTop;
};
})();





