import {App, Modal} from "obsidian";
import {Region} from "../global/regions";

export default class LoginModal extends Modal {

	private resolvePromise!: (success: boolean) => void;
	private region: Region;

	constructor(app: App) {
		super(app);
		this.region = currentRegion()
	}

	onOpen() {
		const {contentEl} = this;
		contentEl.setText('Woah!');
	}

	onClose() {
		const {contentEl} = this;
		contentEl.empty();
	}
}