import { Locator, Page, expect } from "@playwright/test"
import { verify } from "crypto"

export class Login{
    private readonly page:Page
    private readonly loginButton:Locator
    private readonly VerifyPage:Locator

    
    constructor(page:Page){
        this.page=page
        this.loginButton = page.locator('button', {hasText:'Login'})
        this.VerifyPage= page.getByRole('link',{name:'Dashboard'})
    }

    async loginWhitCredential(urlPage:any){
        await this.page.goto(String(urlPage))
        await this.loginButton.click();
        await expect(this.VerifyPage).toBeVisible();
    }

}