jQuery(document).ready(function() {
    jQuery('.count').each(function () {
        jQuery(this).prop('Counter',0).animate({
            Counter: jQuery(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                jQuery(this).text(Math.ceil(now));
            }
        });
    });
    jQuery(".tab-content").hide();
    jQuery("ul.content-links li:first a")
        .addClass("widget-current")
        .show();
    jQuery(".tab-content:first").show();
    jQuery("ul.content-links li a").click(function() {
        jQuery("ul.content-links li a").removeClass(
            "widget-current a"
        );
        jQuery(this).addClass("widget-current");
        jQuery(".tab-content").hide();
        var activeTab = jQuery(this).attr("href");
        jQuery(activeTab).fadeIn();
        return false;
    });
});