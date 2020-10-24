import DefaultSteps from './default';
import page from '../pages/account';

class AccountSteps extends DefaultSteps {
	constructor() {
		super(page);
		this.url = "https://cloud.mail.ru";
	}

	auth() {
		this.open('https://account.mail.ru');
		this.login();
		this.openHome();
	}

	login() {
		this.page.fillLoginForm(process.env.LOGIN);
		this.page.next();
		this.page.fillPasswordForm(process.env.PASSWORD);
		this.page.submit();
		this.page.waitForUrl('https://e.mail.ru/inbox/?afterReload=1');
	}

	openHome() {
		this.open();
		this.page.waitForUrl(`${this.url}/home`);
	}
}

export default new AccountSteps();
