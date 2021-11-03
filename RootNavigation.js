/*
Footer contains links to the various sections of our app.

Will not exist as a screen in our navigation stack and as a result
this presents a challenge in using this component to navigate from.

This is because every component included in the stackNavigator gets 
the navigation prop.

The prop provides the navigate method that we use to move between 
pages.

Just adding the footer to the stack will not work because the 
navigation prop will not be passed until the component is rendered 
by the navigator.

Fix: Use a reference to the RootNavigation object.
This will provide the methods we need to move between screens.
*/
import * as React from 'react';
// constant to hold our navigation reference
// createRef method to grab the RootNavigation object
export const navigationRef = React.createRef();

/* add your own navigation function to use the navigation reference 
to navigate to the desired route.*/

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}
