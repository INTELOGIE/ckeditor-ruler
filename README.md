Ruler Plugin for CKEditor 4
=============================

A simple ruler plugin for [CKEditor](http://ckeditor.com)

## Demo
[Demo page](https://lovata.github.io/ckeditor-ruler/)


## Getting Started

#### Manual

Add the ruler plugin to ckeditor. The simplest way to do this is by adding the following line to ckeditor's <code>config.js</code>:
```javascript
config.extraPlugins = 'ruler';
```
#### npm
Install <code>ckeditor-ruler</code> as a development dependency:
```javascript
npm install ckeditor-ruler --save-dev
```
Init CKEditor with the plugin:
```javascript
window.onload = function() {
    CKEDITOR.plugins.addExternal('ruler', '/node_modules/ckeditor-ruler/');
    CKEDITOR.config.extraPlugins = 'ruler';
    CKEDITOR.replace('editor');
};
```
## Plugin Options
```javascript
CKEDITOR.config.ruler = {
    values: 21,     // segment number of the ruler
    step: 0.25,     // accuracy of sliders
    sliders: {
        left: 2,    // left slider value
        right: 19   // right slider value (21-19 = 2)
    },
    padding: {
        top: 20,    // top 'canvas' padding (px)
        bottom: 20  // bottom 'canvas' padding (px)
    }
};
```
## API
Plugin dispatches <code>updateRuler</code> event as soon as any of slider's values were changed:
```javascript
editor.fire('updateRuler', { left: Number, right: Number });
```

Plugin subscribed on <code>setRulerPadding</code> editor's event, so you can fire the event to change ruler's values programmatically:
```javascript
editor.fire('setRulerPadding', { left: Number, right: Number });
```

## Browser Compatibility
Originaly this plugin was build for an [Electron](https://github.com/electron/electron) application, so it wasn't tested in other browsers



## License
Copyright (c) 2016, LOVATA

Written by Aleksandra Shinkevich (https://github.com/neesoglasnaja)

For licensing, see LICENSE.md