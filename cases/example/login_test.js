import account from '../../steps/account';
import letters from '../../steps/letters/index';


describe('test id', () => {

	it('Авторизоваться', () => {
		account.open('https://account.mail.ru');
		account.login();
	});
});
