import account from "../../steps/account";
import folders from "../../steps/folders";

describe('Работа с папками', () => {

    before(() => {
        account.auth();
    })

    it('Создание папки из сетки и подпапки в ней', () => {
        folders.createFolderInsideFolder();
    })
});
