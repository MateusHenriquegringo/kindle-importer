import {App, Notice, PluginSettingTab, Setting} from "obsidian";
import KindleImporter from "../main";

export class KindleImporterSettingsTab extends PluginSettingTab {
	plugin: KindleImporter;

	constructor(app: App, plugin: KindleImporter) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const {containerEl} = this;

		containerEl.empty();

		new Setting(containerEl)
				.setName("Login na Amazon")
				.setDesc("Clique para fazer login na sua conta da Amazon")
				.addButton(button =>
						button
								.setButtonText("Login")
								.onClick(() => {
									new Notice("Iniciando processo de login...");
									window.open("https://www.amazon.com/ap/signin", "_blank");
								})
				);
	}
}