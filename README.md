# Wrap It

A simple extension to do the frustrating task of wrapping tags.
Easily wrap code in your chosen HTML tags for enhanced markup.

To use, select one or many chunks of code and press **"Alt + W" ("Option + W" for Mac).**

[Download for Visual Studio Code](https://marketplace.visualstudio.com/items/kushagra-aa.wrap-it)

## How to Use It

* Select one or more blocks of text or strings of text.
* Press <kbd>Alt</kbd> + <kbd>W</kbd> or <kbd>Option</kbd> + <kbd>W</kbd> for Mac.

## Commands

* Quick Wrap: For quickly running your favorite Wrap It command.
* Default Wrap: Wrap the selection(s) in the default tag.
* Selected Wrap: Input the tag you want the Selection(s) in.
* Fragment Wrap: Especially for us React Developers, Wrap the Selection(s) in a React Fragment(`<></>`).

## Default Keybindings

* `wrap-it.quickWrap` : <kbd>Alt</kbd> + <kbd>W</kbd> or <kbd>Option</kbd> + <kbd>W</kbd>

## Settings

You can change the default behavior of wrap-it with the following settings.

To open VS Code settings, click the "gear" icon > then "Settings"
or
Press <kbd>Ctrl/Cmd</kbd>+<kbd>,</kbd>

### Available settings

* `wrap-it.defaultCommand` -  The default Command that will execute for the quickWrap keybinding.
  * defaultWrap
  * selectedWrap
  * fragmentWrap
* `wrap-it.defaultTag` -  The default HTML tag to insert when using WrapIt.
* `wrap-it.autoSelectTag` -  Automatically select the opening tag after wrapping.(only applies to defaultWrap)

### Defaults

 ```json
 {
    "wrap-it.defaultTag": "span",
    "wrap-it.defaultCommand": "defaultWrap",
    "wrap-it.autoSelectTag": true
 }
 ```

## Contributing

Please create an issue on GitHub if you experience a bug.
I also welcome pull requests.

Read [Contribution Guide](./contribution.md)

## Repository & Feedback

Please report issues related to this extension on the repository page.

[GitHub Repository](https://github.com/kushagra-aa/wrap-it)

## Developer Information

Kushagra Agnihotri

Please Visit [Here](https://kushagra-aa.vercel.app/) for additional information
