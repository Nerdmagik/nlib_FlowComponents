/**
 * Created by Scott McClung on 6/8/18.
 */
({
    initialize: function (component, event, helper) {
        // Figure out which buttons to display
        var availableActions = component.get('v.availableActions');

        for (var i = 0; i < availableActions.length; i++) {
            if (availableActions[i] == "PAUSE") {
                component.set("v.canPause", true);
            } else if (availableActions[i] == "BACK") {
                component.set("v.canBack", true);
            } else if (availableActions[i] == "NEXT") {
                component.set("v.canNext", true);
            } else if (availableActions[i] == "FINISH") {
                component.set("v.canFinish", true);
            }
        }
    },

    onButtonPressed: function (component, event, helper) {
        // Figure out which action was called
        var buttonAction = event.getSource().getLocalId();
        if (buttonAction == 'customBtn1' || buttonAction == 'customBtn2') {
            helper.navigateToUrl(component.get('v.customBtn1Url'));
        } else if (buttonAction == 'customBtn2') {
            helper.navigateToUrl(component.get('v.customBtn2Url'));
        } else {
            var navigate = component.get('v.navigateFlow');
            navigate(buttonAction);
        }
    }

})