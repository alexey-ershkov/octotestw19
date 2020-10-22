import DefaultSteps from './default';
import page from '../pages/account';

class AccountSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	auth() {
		this.open('https://account.mail.ru');
		this.login();
	}

	login() {
		this.page.fillLoginForm(process.env.LOGIN);
		this.page.next();
		this.page.fillPasswordForm(process.env.PASSWORD);
		this.page.submit();
		this.page.waitForUrl('https://e.mail.ru/inbox/?afterReload=1');
		this.open("https://cloud.mail.ru");
		this.page.waitForUrl("https://cloud.mail.ru/home");
	}
}

export default new AccountSteps();
