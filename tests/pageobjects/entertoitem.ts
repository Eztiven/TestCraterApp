import { Locator, Page, expect } from "@playwright/test"

export class entertointem{
    private readonly linkItems:Locator
    private readonly buttonNewItem:Locator
    private readonly tabla:Locator

    constructor(page:Page){
        this.linkItems = page.getByRole('link', {name:'Items', exact:true});
        this.buttonNewItem = page.getByRole('button',{name:'Add Item', exact:true});
        this.tabla =  page.locator('//table')
    }

    async entertoNewItem(){
        await this.linkItems.click()
        expect(this.buttonNewItem).toBeVisible();
        await this.buttonNewItem.click();
    }
    async entertoItem(){
        await this.linkItems.click()
        expect(this.buttonNewItem).toBeVisible();
        expect(this.tabla).toBeVisible();
        return;
    }
}