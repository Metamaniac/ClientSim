"use strict";(self.webpackChunkclient_sim=self.webpackChunkclient_sim||[]).push([[40],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return y}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),y=r,d=m["".concat(l,".").concat(y)]||m[y]||p[y]||s;return n?i.createElement(d,a(a({ref:t},c),{},{components:n})):i.createElement(d,a({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var u=2;u<s;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1276:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var i=n(7462),r=n(3366),s=(n(7294),n(3905)),a=["components"],o={id:"unity-event-system",title:"Unity Event System",hide_title:!0},l="Unity Event System",u={unversionedId:"systems/runtime/unity-event-system",id:"systems/runtime/unity-event-system",title:"Unity Event System",description:"ClientSim uses two classes to translate actions into Unity\u2019s EventSystem. These classes decouple Unity\u2019s old input system into values based on ClientSim\u2019s current bindings and match VRChat\u2019s interactive UI object filtering.",source:"@site/docs/systems/runtime/unity-event-system.md",sourceDirName:"systems/runtime",slug:"/systems/runtime/unity-event-system",permalink:"/ClientSim/systems/runtime/unity-event-system",tags:[],version:"current",frontMatter:{id:"unity-event-system",title:"Unity Event System",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"UdonManager",permalink:"/ClientSim/systems/runtime/udon-manager"},next:{title:"Script Execution Order",permalink:"/ClientSim/systems/script-execution-order"}},c={},p=[{value:"BaseInput",id:"baseinput",level:2},{value:"InputModule",id:"inputmodule",level:2}],m={toc:p};function y(e){var t=e.components,n=(0,r.Z)(e,a);return(0,s.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"unity-event-system"},"Unity Event System"),(0,s.kt)("p",null,"ClientSim uses two classes to translate actions into Unity\u2019s EventSystem. These classes decouple Unity\u2019s old input system into values based on ClientSim\u2019s current bindings and match VRChat\u2019s interactive UI object filtering. "),(0,s.kt)("h2",{id:"baseinput"},"BaseInput"),(0,s.kt)("p",null,"The ClientSimBaseInput system extends Unity\u2019s BaseInput class. Unity\u2019s BaseInput is responsible for passing mouse position and button input into the EventSystem. The ClientSim BaseInput system overrides these methods to instead pass values based on the current ClientSim input bindings and last ",(0,s.kt)("a",{parentName:"p",href:"/ClientSim/systems/runtime/player#raycaster"},"PlayerRaycaster")," results. Mouse input is replaced with the current binding\u2019s ",(0,s.kt)("a",{parentName:"p",href:"/ClientSim/systems/runtime/input"},"Use Input"),". Since Use input is a handed action, only the value of the last activated hand is passed as mouse input. The mouse position sent to the Event System ignores the actual mouse position, and instead calculates the screen position of the last interact raycast. Using the raycast position abstracts out the real mouse\u2019s position, allowing Desktop and VR to use Unity UI through the same system.\nThe BaseInput system is also responsible for providing the current mouse position to the rest of ClientSim. It controls if the mouse pointer is hidden and locked to the center of the screen, or visible and free to move. This mouse position is used for displaying the ",(0,s.kt)("a",{parentName:"p",href:"/ClientSim/systems/runtime/player#reticle"},"Desktop Reticle")," as well as using the mouse to create the ray direction for ",(0,s.kt)("a",{parentName:"p",href:"/ClientSim/systems/runtime/player#rayprovider"},"DesktopRayProvider"),"."),(0,s.kt)("h2",{id:"inputmodule"},"InputModule"),(0,s.kt)("p",null,"The ClientSimInputModule extends Unity\u2019s StandaloneInputModule. This system processes Unity mouse events and filters out any UI objects that are not currently interactable. UI objects are interactable when all of the following conditions have been met:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"The ",(0,s.kt)("a",{parentName:"li",href:"/ClientSim/systems/runtime/player#playerraycaster"},"PlayerRaycaster")," last hit an object with a VRC_UIShape component. This data is provided through ClientSimBaseInput."),(0,s.kt)("li",{parentName:"ol"},"The UI object has a UIShape component in its parent"),(0,s.kt)("li",{parentName:"ol"},"The layer of the parent UIShape object is on a currently interactive layer. Interactive layers are determined by the ",(0,s.kt)("a",{parentName:"li",href:"/ClientSim/systems/runtime/interactive-layer-provider"},"InteractiveLayerProvider"),"."),(0,s.kt)("li",{parentName:"ol"},"The hit point of the UI Object raycast is contained within the collider of the UIShape. If any of those conditions fail, then the UI cannot be interacted with.")))}y.isMDXComponent=!0}}]);