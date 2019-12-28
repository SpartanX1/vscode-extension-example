import { window, ExtensionContext, commands, workspace, Uri } from 'vscode';
import { TextEncoder } from 'util';

export function activate(context: ExtensionContext) {
	
	let disposableFileCommand = commands.registerCommand('extension.CreateFile', (resource) => {
		window.showInputBox({
			placeHolder: "Please enter a file name",
		}).then((fileName) => {
			if (fileName !== undefined) {
				return workspace.fs.writeFile(Uri.parse(resource.path + '/' + fileName + '.txt'), new TextEncoder().encode('Hello World'));
			}
		});
	});

	context.subscriptions.push(disposableFileCommand);
}

export function deactivate() { }
