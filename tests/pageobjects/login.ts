import { Locator, Page } from "@playwright/test"

export class Login{
    private readonly page:Page
    private readonly loginButton:Locator

    
    constructor(page:Page){
        this.page=page
        this.loginButton = page.locator('button', {hasText:'Login'})
    }

    async loginWhitCredential(){
        await this.page.goto('https://demo.craterapp.com/')

        await this.loginButton.click()
    }

}