import account from '../../steps/account';
import folders from '../../steps/folders'

describe('Работа с папками', () => {

    beforeEach(() => {
        account.auth();
        folders.openHomePage();
    })

    it('Создание папки из сетки', () => {
        folders.createFolder("test_folder");
    });
});
