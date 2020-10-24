import account from "../../steps/account";
import folders from "../../steps/folders";

describe('Работа с папками', () => {

    beforeEach(() => {
        folders.openHomePage();
        account.auth();
    })

    it('Создание папки из сетки и подпапки в ней', () => {
        folders.createFolderInsideFolder("test_folder", "inner_test_folder");
    })
});
