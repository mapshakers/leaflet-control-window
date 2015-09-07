leaflet-control-window
=====================

Simple popup window plugin for leaflet. Ready for information, prompts, dialogs, photos etc. 
## Features
*modal/modeless mode
*draggable
*customisable
*responsive


## Example
~~[Check out demo and example of use!](http://filipzava.github.io/leaflet-control-bar)~~

*Requires Leaflet and modern browser

## Getting started
Using leaflet-control-window plugin is very easy and comfortable.

### Quick usage
* Download and place files from ```src``` dir to the same folder in your project.
* Link javascript and style file in your HTML document:
```html
     <script src="...path-to-files.../L.Control.Window.js"></script>
     <link rel="stylesheet" href="...path-to-file.../L.Control.Window.css" />
```
* Then use in simple way in javascript file:
```javascript
// Creating window object
var win =  L.control.window(map,{title:'Hello world!',content:'This is my first control window.'})
           .show()
```
### How to use
There are two ways to set up control windows. It's up to you what you prefer. Following examples have the same results. 
* using options
```javascript
var winOpts = L.control.window(map,{title:'Heading!',content:'First paragraph.',visible: true})
```
* using methods
```javascript
var winMtds = L.control.window(map)
        .title('Heading!')
        .content('First paragraph.')
        .show()
```
### Options
to do
### Methods
to do
### Events
to do 

### License
**leaflet-control-window** is free software, and may be redistributed under the MIT-LICENSE.
