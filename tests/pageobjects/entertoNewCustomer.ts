import { Locator, Page, expect } from "@playwright/test"

export class entertoNewCustomer{
    private readonly linkCustomers:Locator
    private readonly buttonNewCustomer:Locator

    constructor(page:Page){
        this.linkCustomers = page.getByRole('link', {name:'Customers', exact:true});
        this.buttonNewCustomer = page.getByRole('button',{name:'New Customer', exact:true});
    }

    async entertoNewCustomer(){
        await this.linkCustomers.click()
        expect(this.buttonNewCustomer).toBeVisible;
        await this.buttonNewCustomer.click();
    }
    async entertoCustomer(){
        await this.linkCustomers.click()
        expect(this.buttonNewCustomer).toBeVisible;
    }
}