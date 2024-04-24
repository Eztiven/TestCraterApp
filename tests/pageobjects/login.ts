import { Locator, Page } from "@playwright/test"
import { Url } from "url"

export class Login{
    private readonly page:Page
    private readonly loginButton:Locator

    
    constructor(page:Page){
        this.page=page
        this.loginButton = page.locator('button', {hasText:'Login'})
    }

    async loginWhitCredential(urlPage:any){
        await this.page.goto(String(urlPage))

        await this.loginButton.click()
    }

}