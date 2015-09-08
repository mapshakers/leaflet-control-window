leaflet-control-window
=====================
<div style="text-align:center" align="center">
    <img src="http://www.mapkeyicons.com/demo/img/leaflet-control-window.jpg" alt="leaflet-control-window"/>
</div>
Simple popup window plugin for leaflet. Ready for information, prompts, dialogs, photos etc. 

*Requires Leaflet and modern browser

## Features
* modal/modeless mode
* draggable
* customisable
* responsive


## Example
~~[Check out demo and example of use!](http://filipzava.github.io/leaflet-control-bar)~~


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
```javascript
L.control.window( <Map> map ,<window options> options?)
```
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
| Property        | Description            | Default Value | Possible  values                                     |
| --------------- | ---------------------- | ------------- | ---------------------------------------------------- |
| title           | Sets window title.           |  ''           | String, empty string or false causes no title        |
| content         | Sets window content.           |  html code    | HTMLElement|String                                          |
| modal           | Modal/modeless window mode?  |  false       | Boolean                                       |
| position        | Sets where to show window.   |  'center'       | 'center','top','topRight','right','bottomRight','bottom','bottomLeft','left','topLeft' |

### Methods
| Method          | Returns       | Description                                     |
| --------------- | ------------- | ---------------------------------------------------- |
| show()         | L.control.window object  |  Render window.        |
| show(<String> position)    | L.control.window object  |  Render window on defined position.        |
| title()         | HTMLElement|String  |  Gets window title.        |
| title( HTMLElement|String )      | L.control.window object  |  Sets window title.        |
| content()         | HTMLElement|String  |  Gets window contet.        |
| content( HTMLElement|String )      | L.control.window object  |  Sets window content.        |
| close()         | undefined  |  Hide and remove window.        |

### Other options
| Property        | Description            | Default Value | Possible  values                                     |
| --------------- | ---------------------- | ------------- | ---------------------------------------------------- |
| closeButton     | Render close button?    |  true         | Boolean                                           |
| className       | Sets container class to style window.   |  'control-window'         | String                   |
| maxWidth        | Sets maximum width of window container in pixels. |   600        | Number                          |
| prompt          | JSON object for prompt buttons.           |  undefined         | JSON {callback: ..., buttonOK: ..., buttonCancel: ...}    |
| prompt.callback | Function to run after OK button is clicked.         |  undefined        | e.g. ```function(){alert('hello')}```    |
| prompt.buttonOK | Text for ```OK``` button.     |  'OK'        | String                       |
| prompt.buttonCancel | Text for ```Cancel``` button         |  'CANCEL'         | String   |
| visible | Render window immediately.         |  false         | Boolean   |

###Other  Methods
| Method          | Returns       | Description                                     |
| --------------- | ------------- | ---------------------------------------------------- |
| showOn( <point> [x,y] pixel position)    | L.control.window object  |  Render window on defined position in pixels ([x,y]).        |
| hide()    | L.control.window object  |  Hide window, can be rendered by ```.show()``` method.     |
| prompt( JSON object )      | L.control.window object  |  Sets prompt option.      |
| setPromptCallback( <function> )      | L.control.window object  |  Sets prompt option.      |

### Events
| Event          | Description                                     |
| ---------------|------------------------------------------------ |
| show           | Fired when window is shown.         |
| hide           | Fired when window is hidden.         |
| close          | Fired when window is closed.         |


### License
**leaflet-control-window** is free software, and may be redistributed under the MIT-LICENSE.
