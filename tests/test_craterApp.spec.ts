import { test, expect} from '@playwright/test';
import { Login } from './pageobjects/login';
import { entertoNewCustomer } from './pageobjects/entertoNewCustomer';
import { createNewCustomer } from './pageobjects/createNewCustomer';
import { entertointem } from './pageobjects/entertoitem';
import { createNewItem } from './pageobjects/createNewItem';

test.beforeEach('Login',async({page})=>{
    const loginpage= new Login(page)
  
    await loginpage.loginWhitCredential();
    expect(page.getByRole('link',{name:'Dashboard'})).toBeVisible;
})

  test('enter to customer', async ({ page }) => {
    const EntertoNewcustomer = new entertoNewCustomer(page)
    
    await EntertoNewcustomer.entertoCustomer();

    await page.pause();
  });

  test('create new customer', async ({ page }) => {
    const EntertoNewcustomer = new entertoNewCustomer(page)
    const CreateNewcustomer = new createNewCustomer(page)

    await EntertoNewcustomer.entertoNewCustomer();

    await CreateNewcustomer.createCustomer('Juan Martínez','juan@gmail.com','3001234567','cop','https://google.com',
    '+57','12345678','12345678', 'Juan Martínez','colomb','Atlantico','Barranquilla','Cra 42#80b-31','200002')

    await page.pause();
  });

  test('delete customer',async({page})=>{
    const Entertocustomer = new entertoNewCustomer(page)
    await Entertocustomer.entertoCustomer();

    //await page.locator('//input[@type="checkbox"]').nth(0).check()


   expect (page.locator('table[class="min-w-full divide-y divide-gray-200"]')).toBeVisible;
   const tableContainer= page.locator('//table[@class="min-w-full divide-y divide-gray-200"]//tbody')

   const rows= await tableContainer.locator('xpath=.//tr').all()

   console.log(rows.length)

   if (rows.length>1 && await page.locator('button[type="button"]').nth(2).isVisible() ) {
    await page.locator('td:nth-child(6) > .relative').first().click();
    await page.getByRole('menuitem', { name: 'Delete' }).click();
    console.log(rows.length)
   }else{
    console.log('No hay clientes para eliminar')
   }

    //await page.pause()
  })

  /*
  Element container: //table[@class='min-w-full divide-y divide-gray-200']//tbody
  .//tr -> filas

  //table[@class='min-w-full divide-y divide-gray-200']//tr[1]//td[1]->check
  //table[@class='min-w-full divide-y divide-gray-200']//tr[1]//td[2]->name
  //table[@class='min-w-full divide-y divide-gray-200']//tr[1]//td[2]//span[@class='font-medium text-primary-500 flex flex-col']//font//font -> name
  //table[@class='min-w-full divide-y divide-gray-200']//tr[1]//td[3]->phone
  //table[@class='min-w-full divide-y divide-gray-200']//tr[1]//td[4]->amount due
  //table[@class='min-w-full divide-y divide-gray-200']//tr[1]//td[5]->added on
  //table[@class='min-w-full divide-y divide-gray-200']//tr[1]//td[6]//button->button
  */

 test('enter to items', async ({ page }) => {
    const Entertoitem = new entertointem(page) 
  
    await Entertoitem.entertoItem()


    await page.pause();
  });

  test('create new items', async ({ page }) => {
    const Entertoitem = new entertointem(page) 
    const CreateNewItem = new createNewItem(page)
    await Entertoitem.entertoNewItem()
    await CreateNewItem.createCustomer('Rule','1.00','cm','this ..........')

    await page.pause();
  });

  test('delete item',async({page})=>{
    const Entertoitem = new entertointem(page);
    await Entertoitem.entertoItem();

    expect (page.locator('//table')).toBeVisible;
  
    const tableContainer= page.locator('//table');

    const rows= await tableContainer.locator('xpath=.//tr').all();

    console.log(rows.length)

    if (rows.length>1) {
      await page.locator('td:nth-child(6) > .relative').first().click();
      await page.getByRole('menuitem', { name: 'Delete' }).click();
      await page.getByRole('button',{name:'Ok'}).click()
      console.log(rows.length)
     }else{
      console.log('No hay articulos para eliminar')
     }

    await page.pause()
  })




  