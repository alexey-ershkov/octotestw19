import account from '../../steps/account';
import folders from '../../steps/folders'

describe('Работа с папками', () => {

    before(() => {
        account.auth();
    })

    beforeEach(() => {
        folders.openHomePage();
    })

    it('Создание папки из сетки', () => {
        folders.createFolder();
    });
});
