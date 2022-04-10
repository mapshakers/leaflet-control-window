// Type definitions for non-npm package leaflet-control-window
// Project: https://github.com/mapshakers/leaflet-control-window
// Definitions by: Efrem Rensi <https://github.com/ebrensi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: ?

import * as L from "leaflet"

type CallbackFunction = () => void

declare module "leaflet" {
  namespace Control {
    interface WindowOptions extends ControlOptions {
      element?: string
      className?: string
      visible?: boolean
      title?: string
      closeButton?: boolean
      content?: string
      prompt?: PromptObject
      maxWidth?: number
      modal?: boolean
    }

    interface PromptObject {
      callback: CallbackFunction // OK button
      action: CallbackFunction // ACTION button
      buttonAction: string
      buttonOK: string
      buttonCancel: string
      visible: boolean
    }

    class Window extends Control {
      constructor(container: Map, options?: WindowOptions)
      disableBtn: CallbackFunction
      enableBtn: CallbackFunction
      title: (titleContent: string) => this
      remove: () => this
      mapResized: CallbackFunction
      show: (position?: string) => this
      showOn: (point: L.Point) => this
      hide: (e: unknown) => this
      getContainer: () => HTMLDivElement
      content: (content: string) => this
      prompt: (promptObject: PromptObject) => this
      container: (containerContent: string) => this
      setPromptCallback: CallbackFunction
    }
  }

  namespace control {
    function window(
      container: Map,
      options: Control.WindowOptions
    ): Control.Window
  }
}
