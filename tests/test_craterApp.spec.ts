import { test, expect} from '@playwright/test';
import { Login } from './pageobjects/login';
import { entertoNewCustomer } from './pageobjects/entertoNewCustomer';
import { createNewCustomer } from './pageobjects/createNewCustomer';
import { entertointem } from './pageobjects/entertoitem';
import { createNewItem } from './pageobjects/createNewItem';

// Antes de cada prueba, realiza el inicio de sesión
test.beforeEach('Login',async({page})=>{
  const loginpage= new Login(page)
  await loginpage.loginWhitCredential(process.env.URL);
})

test('enter to customer', async ({ page }) => {
  const EntertoNewcustomer = new entertoNewCustomer(page)
  await EntertoNewcustomer.entertoCustomer();
  await expect(page).toHaveURL(/.*\/customers/);
});

test('create new customer', async ({ page }) => {
  const EntertoNewcustomer = new entertoNewCustomer(page)
  const CreateNewcustomer = new createNewCustomer(page)

  await EntertoNewcustomer.entertoNewCustomer();
  await expect(page).toHaveURL(/.*\/customers\/create/);

  await CreateNewcustomer.createCustomer(String(process.env.name),String(process.env.email),
  String(process.env.numberPhone),String(process.env.currency),String(process.env.nameWebsite),
  String(process.env.prefix),String(process.env.password),String(process.env.confirm_password), 
  String(process.env.address_name),String(process.env.country),String(process.env.state),
  String(process.env.city),String(process.env.address),String(process.env.zip))
});

test('delete customer',async({page})=>{
  const Entertocustomer = new entertoNewCustomer(page)
  await Entertocustomer.entertoCustomer();

  await page.locator('td:nth-child(6) > .relative').first().click();
  await page.getByRole('menuitem', { name: 'Delete' }).click();
})


test('enter to items', async ({ page }) => {
  const Entertoitem = new entertointem(page) 
  await Entertoitem.entertoItem()
  await expect(page).toHaveURL(/.*\/items/);
});

test('create new items', async ({ page }) => {
  const Entertoitem = new entertointem(page) 
  const CreateNewItem = new createNewItem(page)
  await Entertoitem.entertoNewItem()
  await CreateNewItem.createCustomer(String(process.env.nameItem),String(process.env.price),
  String(process.env.unit),String(process.env.description))
  await expect(page).toHaveURL(/.*\/items/);
});

test('delete item',async({page})=>{
  const Entertoitem = new entertointem(page);
  await Entertoitem.entertoItem();
  await page.locator('td:nth-child(6) > .relative').first().click();
  await page.getByRole('menuitem', { name: 'Delete' }).click();
  await page.getByRole('button',{name:'Ok'}).click();
})

test('New login customer',async({page})=>{
    
  await page.goto(String(process.env.NewUrl))
  await page.locator('//input[@type="email"]').fill(String(process.env.email));
  await page.locator('//input[@type="password"]').fill(String(process.env.password));
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL(/.*\/dashboard/);
})
