import { Locator, Page } from "@playwright/test"

export class createNewItem{
    private readonly nameTextbox:Locator
    private readonly priceTextbox:Locator
    private readonly unitTextbox:Locator
    private readonly selectUnit:Locator
    private readonly descriptionTextbox:Locator
    private readonly saveItemButton:Locator

    constructor(page:Page){
        this.nameTextbox = page.getByRole('textbox').nth(1);
        this.priceTextbox = page.locator('//input[@id="0"]');
        this.unitTextbox = page.getByRole('textbox').nth(3);
        this.selectUnit = page.locator('li').filter({ hasText: 'cm' });
        this.descriptionTextbox = page.locator('textarea[name="description"]');
        this.saveItemButton = page.getByRole('button', {name:'Save Item'});
    }

    async createCustomer(name:string,price:string,unit:string,description:string){
            await this.nameTextbox.fill(name)
            await this.priceTextbox.fill(price)
            await this.unitTextbox.fill(unit)
            await this.selectUnit.click()
            await this.descriptionTextbox.fill(description)
            await this.saveItemButton.click()
    }
}