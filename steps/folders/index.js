import DefaultSteps from "../default";
import page from "../../pages/folders/index"

class FoldersSteps extends DefaultSteps {
    constructor() {
        super(page);
        this.url = "https://cloud.mail.ru";
    }

    openHomePage() {
        this.open(this.url + `/home/`);
    }

    createFolder(folderName) {
        this.page.createFolder(folderName);
        this.open(this.url+`/home/${folderName}`);
        this.page.closeBanner();
        this.page.checkFolderExists(folderName);
        this.page.deleteFolder(folderName);
    }

    createFolderInsideFolder(folderName, insideFolderName) {
        this.page.createFolder(folderName);

        this.open(this.url+`/home/${folderName}`);
        this.page.checkFolderExists(folderName);

        this.page.createFolderRightClick(insideFolderName);
        this.open(this.url+`/home/${folderName}/${insideFolderName}`);
        this.page.checkSubFolderExists(folderName, insideFolderName);

        this.open(this.url+`/home/${folderName}`);
        this.page.closeBanner();
        this.page.deleteFolder(folderName);
    }
}

export default new FoldersSteps();
