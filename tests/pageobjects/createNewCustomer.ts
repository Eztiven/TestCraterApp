import { Locator, Page } from "@playwright/test"

export class createNewCustomer{
    private readonly usernameTextbox:Locator
    private readonly Primary_Contact_Name:Locator
    private readonly emailTextbox:Locator
    private readonly numberPhoneTextbox:Locator
    private readonly currencyTextbox:Locator
    private readonly selectcurrency:Locator
    private readonly nameWebsiteTextbox:Locator
    private readonly prefixTextbox:Locator
    private readonly portalAccess:Locator
    private readonly passwordTextbox:Locator
    private readonly Confirm_PasswordTextbox:Locator
    private readonly addressnameTextbox:Locator
    private readonly countryTextbox:Locator
    private readonly selectCountry:Locator
    private readonly stateTextbox:Locator
    private readonly cityTextbox:Locator
    private readonly addressTextbox:Locator
    private readonly numberPhoneTextbox2:Locator
    private readonly zipTextbox:Locator
    private readonly copyDateBilling:Locator
    private readonly saveCustomer:Locator

    constructor(page:Page){
        this.usernameTextbox = page.locator('//input[@name="name"]').nth(0);
        this.Primary_Contact_Name = page.locator('//input[@type="text"]').nth(2);
        this.emailTextbox = page.locator('//input[@name="email"]');
        this.numberPhoneTextbox = page.locator('//input[@name="phone"]').nth(0);
        this.currencyTextbox = page.locator('.p-0>input').nth(0);
        this.selectcurrency = page.locator('.p-0>input').nth(0);
        this.nameWebsiteTextbox = page.locator('//input[@type="url"]');
        this.prefixTextbox = page.locator('//input[@name="name"]').nth(1);
        this.portalAccess = page.locator('button[role="switch"]');
        this.passwordTextbox = page.locator('//input[@name="password"]');
        this.Confirm_PasswordTextbox = page.locator('//input[@name="confirm_password"]');
        this.addressnameTextbox = page.locator('//input[@name="address_name"]').nth(0);
        this.countryTextbox = page.locator('.p-0>input').nth(1);
        this.selectCountry = page.locator('.p-0>input').nth(1);
        this.stateTextbox = page.locator('input[name="billing.state"]');
        this.cityTextbox = page.locator('input[name="billing.city"]');
        this.addressTextbox = page.locator('//textarea[@name="billing_street1"]');
        this.numberPhoneTextbox2 = page.locator('//input[@name="phone"]').nth(1);
        this.zipTextbox = page.locator('//input[@name="zip"]').nth(0);
        this.copyDateBilling = page.locator('.p-1>button');
        this.saveCustomer = page.getByRole('button',{name:'Save Customer'})
    }

    async createCustomer(name:string,email:string,numberPhone:string,currency:string, 
        nameWebsite:string,prefix:string,password:string,confirm_password:string,address_name:string,
        country:string, state:string, city:string, address:string,zip:string){
            await this.usernameTextbox.fill(name)
            await this.Primary_Contact_Name.fill(name)
            await this.emailTextbox.fill(email)
            await this.numberPhoneTextbox.fill(numberPhone)
            await this.currencyTextbox.fill(currency)
            await this.selectcurrency.press('Enter')
            await this.nameWebsiteTextbox.fill(nameWebsite)
            await this.prefixTextbox.fill(prefix)
            await this.portalAccess.click()
            await this.passwordTextbox.fill(password)
            await this.Confirm_PasswordTextbox.fill(confirm_password)
            await this.addressnameTextbox.fill(address_name)
            await this.countryTextbox.fill(country)
            await this.selectCountry.press('Enter')
            await this.stateTextbox.fill(state)
            await this.cityTextbox.fill(city)
            await this.addressTextbox.fill(address)
            await this.numberPhoneTextbox2.fill(numberPhone)
            await this.zipTextbox.fill(zip)
            await this.copyDateBilling.click()
            await this.saveCustomer.click()
    }
}