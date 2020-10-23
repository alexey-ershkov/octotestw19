import DefaultPage from "../default";

class FolderPage extends DefaultPage {
    constructor() {
        super('folders', '[data-bem="b-react-component"]');
    }

    get locators () {
        return {
            container: this.container,
            createButton: '[class="DataListItemCreateNew__root--3OmvE DataListItemCreateNew__rootThumb--2zkxa"]',
            createNewFolder: '[data-name="createFolder"]',
            folderNameInput: 'input[placeholder="Введите имя папки"]',
            createFolderButton: 'div.CreateNewFolderDialog__button--7S1Hs > button.primary',
            deleteButton: 'div[data-name="remove"]',
            confirmDeletingButton: 'div.b-layer__controls__buttons > button[data-name="remove"]',
            closeBannerButton: 'div.b-panel__close[data-name="close"]',
            rightClickZone: 'div.DataList__root--11cWL',
            rightClickCreateButton: 'div.DropdownList__item--2m8Vq[data-name="create"]'
        }
    }

    createFolder(name) {
        this.waitForVisibleAndClick(this.locators.createButton)
        this.waitForVisibleAndClick(this.locators.createNewFolder)

        this.page.waitForVisible(this.locators.folderNameInput);
        this.page.setValue(this.locators.folderNameInput, name);
        this.page.click(this.locators.createFolderButton);
    }

    checkFolderExists(name) {
        this.waitForUrl(`https://cloud.mail.ru/home/${name}/`);
    }

    checkSubFolderExists(name, sub_name) {
        this.waitForUrl(`https://cloud.mail.ru/home/${name}/${sub_name}/`);
    }

    deleteFolder() {
        this.waitForVisibleAndClick(this.locators.deleteButton);
        this.waitForVisibleAndClick(this.locators.confirmDeletingButton);
    }

    closeBanner() {
        this.waitForVisibleAndClick(this.locators.closeBannerButton)
    }

    createFolderRightClick(name) {
        this.page.waitForVisible(this.locators.rightClickZone);
        this.page.rightClick(this.locators.rightClickZone);

        this.page.waitForVisible(this.locators.rightClickCreateButton);
        this.page.rightClick(this.locators.rightClickCreateButton);

        this.waitForVisibleAndClick(this.locators.createNewFolder);

        this.page.waitForVisible(this.locators.folderNameInput);
        this.page.setValue(this.locators.folderNameInput, name);
        this.page.click(this.locators.createFolderButton);
    }



}

export default new FolderPage();
