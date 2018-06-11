/**
 * Created by Scott McClung on 6/8/18.
 */
({
    navigateToUrl: function (url) {
        $A.get("e.force:navigateToURL").setParams({
            "url": url
        }).fire();
    }
})