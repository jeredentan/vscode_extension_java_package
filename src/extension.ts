"use strict";
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "java-package-displayer" is now active!'
  );

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json
  // let disposable = vscode.commands.registerCommand('extension.sayHello', () => {
  //     // The code you place here will be executed every time your command is executed

  //     // Display a message box to the user
  //     vscode.window.showInformationMessage('Hello World!');

  // });

  //context.subscriptions.push(disposable);

  let packagedisplayer = new PackageDisplayerJava("");
  packagedisplayer.firstfunction();
}

// this method is called when your extension is deactivated
export function deactivate() {}

class PackageDisplayerJava {
  message: string;
  constructor(message: string) {
    this.message = message;
  }

  public firstfunction() {
    vscode.workspace.onDidOpenTextDocument(doc => {
      // let tree = new vscode.TreeItem("test");
      //console.log("lol");

      //console.log("changement1");
      console.log("changement 2");

      console.log("commit3");
      console.log("changement1");
      let x = "salut";

      console.log("commit5");

      console.log("commit1");
      console.log("commit77");
    });
  }
}
