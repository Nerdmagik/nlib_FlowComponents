# Flow Components
[![Deploy to SFDX](https://deploy-to-sfdx.com/dist/assets/images/DeployToSFDX.svg)](https://deploy-to-sfdx.com?template=https://github.com/nerdmagik/nlib_FlowComponents)

[![Deploy to Salesforce](https://raw.githubusercontent.com/afawcett/githubsfdeploy/master/deploy.png)](https://githubsfdeploy.herokuapp.com?owner=nerdmagik&repo=nlib_FlowComponents)

A set of custom lightning component designed to be used in the Salesforce Visual Flow screens.

### Installation
Use the 'Deploy to SFDX' button to install into a scratch org or use the 'Deploy to Salesforce' button to install into a sandbox or developer org.

### nlib_flowHeader
Provides the ability to display text styled by Lightning Design System classes.  Also displays the optional screen help text as a tooltip if it is present in your configuration.

Inputs:
* Header Text - this is the text that will be displayed
* Header Text SLDS Classes - these are the SLDS classes used to style the header text. Add multiple classes separated by spaces.


### nlib_flowNavigation
Provides a flexible navigation component to level up your navigation buttons.

By default the component will display the standard navigation buttons in much the same way the default footer will.  You can customize these buttons with a number of options.

Inputs:
* Btn Label - The button text
* Btn Variant - The button color can be configured by using one of the system variants. Accepted values are `base`, `neutral`, `brand`, `destructive`, and `success`.  All buttons default to the neutral variant except for Next and Finish which default to brand.
* Btn Position - Each button can be positioned on the right or left side of the screen.  Accepted values are `right` and `left`.  All buttons default to `right` except for the Back button which is defaults to `left`.
* Btn Icon Name - SLDS icons can be added to the button label.  Values should include the full icon category + icon name. (e.g. `utility:forward`)
* Btn Icon Position - If an icon name is provided, the positioning of the icon can be set to `left` or `right`.  Icon position defaults to left.
* Btn Accessibility Text - The text read by accessibility readers.

In the standard flow screen configuration, the system prevents hiding both the Back/Previous and Finish buttons at the same time.  You can manually override the visibility of one or both of those buttons by setting the Back Btn Visibility or Finish Btn Visibility inputs to `hide`.

Up to 2 custom buttons can also be displayed.  These allow you to abandon the flow and navigate the user to any url.  This can be handy if you want to provide something like a Cancel button or create your own Finish button that navigates to a custom destination after the flow has completed.
To display a custom button, simply set a value in one of the Custom Btn Label inputs and then set the related Custom Btn Url input to your desired destination.
Custom buttons can also be configured with the same options listed above.
