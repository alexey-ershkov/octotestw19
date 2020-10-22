import DefaultSteps from "../default";
import page from "../../pages/folders/index"

class FoldersSteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    createFolder() {
        this.open(`https://cloud.mail.ru/home/`);
        const folderName = "test_folder";
        this.page.createFolder(folderName);
        this.open(`https://cloud.mail.ru/home/${folderName}`);
        this.page.closeBanner();
        this.page.checkFolderExists(folderName);
        this.page.deleteFolder(folderName);
    }

    createFolderInsideFolder() {
        this.open(`https://cloud.mail.ru/home/`);
        const folderName = "test_folder";
        const insideFolderName = "inside_test_folder";
        this.page.createFolder(folderName);

        this.open(`https://cloud.mail.ru/home/${folderName}`);
        this.page.checkFolderExists(folderName);

        this.page.createFolderRightClick(insideFolderName);
        this.open(`https://cloud.mail.ru/home/${folderName}/${insideFolderName}`);
        this.page.checkSubFolderExists(folderName, insideFolderName);

        this.open(`https://cloud.mail.ru/home/${folderName}`);
        this.page.closeBanner();
        this.page.deleteFolder(folderName);
    }
}

export default new FoldersSteps();
