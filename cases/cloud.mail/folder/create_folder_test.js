import account from '../../../steps/account';
import folders from '../../../steps/folders/index'

describe('Работа с папками', () => {

    before(() => {
        account.auth();
    })

    it('Создание папки из сетки', () => {
        folders.createFolder();
    });
});
