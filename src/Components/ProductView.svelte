<script lang="ts">
  import { v4 as uuidv4 } from 'uuid';
  import * as _ from 'lodash';
  import {productStore } from '../store/storeData'


  
   // start validation form
 const formValidation = (): boolean => {
    const ProductName: string = (document.getElementById("name") as HTMLInputElement).value;
    const Description: string = (document.getElementById("desc") as HTMLInputElement).value;
    const ProductPrice: string = (document.getElementById("price") as HTMLInputElement).value;
     
  
    if (ProductName === "") {
      (document.getElementById("pro_name") as HTMLElement).innerHTML = "Is Required";
      return false;
    }
  
    if (ProductName.length <= 3 || ProductName.length > 100) {
      (document.getElementById("pro_name") as HTMLElement).innerHTML = "Product Name Lenght must be between 3 to 100";
      return false;
    }
  
    if (!isNaN(Number(ProductName))) {
      (document.getElementById("pro_name") as HTMLElement).innerHTML = "Product Name Allowed Only Text Character";
      return false;
    }

    
    if (Description === "") {
        (document.getElementById("pro_desc") as HTMLElement).innerHTML = "Is Required";
        return false;
      }
    
      if (Description.length <= 3 || Description.length > 150) {
        (document.getElementById("pro_desc") as HTMLElement).innerHTML = "Description Lenght must be between 3 to 150";
        return false;
      }
    
      if (!isNaN(Number(Description))) {
        (document.getElementById("pro_desc") as HTMLElement).innerHTML = "Description Allowed Only Text Character";
        return false;
      }
  
    if (ProductPrice === "") {
      (document.getElementById("pro_price") as HTMLElement).innerHTML = "Is Required";
      return false;
    }
  
    if (isNaN(Number(ProductPrice))) {
      (document.getElementById("pro_price") as HTMLElement).innerHTML = "Please Enter Only Number";
      return false;
    }
  
    if (ProductPrice.length<= 3 || ProductPrice.length == 10) {
      (document.getElementById("pro_price") as HTMLElement).innerHTML = "Enter Price Only 3Digit to between 10Digit Number";
      return false;
    }
   return true;
  };

// .........End validation form..........
  
let addproduct:boolean=false;
function toggleAddProduct(){
  addproduct = !addproduct
}

let deleteproduct:boolean=false;
function toggleDeleteProduct(){
  deleteproduct = !deleteproduct
}

let editproduct:boolean=false;
function toggleEditProduct(){
  editproduct = !editproduct
}

//.........Start Add data in table...........
type Product={
  id: string;
  name:string,
  desc:string,
  price:string;
}

const addProduct = () => 
{
  if (formValidation()) {
    const id: string = uuidv4();
    const name: string = (document.getElementById("name") as HTMLInputElement).value;
    const desc:string = (document.getElementById("desc") as HTMLInputElement).value;
    const price:string = (document.getElementById("price") as HTMLInputElement).value;
    const product = {id: uuidv4(),name, desc, price };
    productStore.update(products => [...products, product]);
    toggleAddProduct();
  }
  (document.getElementById("name") as HTMLInputElement).value = '';
  (document.getElementById("desc") as HTMLInputElement).value = '';
  (document.getElementById("price") as HTMLInputElement).value = '';
};

//.........End Add data in table...........


//.........Start Edit data in table...........
let editname:any='';
let editdesc:any='';
let editprice:any='';
let productid:any='';

let editProductName='';
  //setting value in edit form
function updateProduct(id:string,name:string){
  editProductName=name;
  editname=document.getElementById("name");
  editdesc=document.getElementById("desc");
  editprice=document.getElementById("price");
  productid=document.getElementById("productid");
  
  productStore.update(products=>{
    let updatedProduct = _.find(products, { id:id }) as Product;
    
    editname.value=updatedProduct.name;
    editdesc.value=updatedProduct.desc;
    editprice.value=updatedProduct.price;
    productid.value=updatedProduct.id;
    return products;
  })
}

const saveProduct = () => {
  
  productStore.update(products=>{
    let updatedProduct = _.find(products, { id:productid.value }) as Product;
    updatedProduct.name=editname.value
    updatedProduct.desc=editdesc.value
    updatedProduct.price=editprice.value
    return products;
  })
}
//.........End Edit data in table...........


//.........Start delete data in table...........
let delProductName='';
const deleteProduct = (id: string,name:string):void => {
  delProductName=name
  productStore.update(products => {
    const index = _.findIndex(products, { id: id });
    if (index !== -1) {
      products.splice(index, 1);
      (document.getElementById("dname") as HTMLInputElement).value = '';
    }
    return products;
  });
}
//.........End delete data in table...........
</script>

<div class="w-9/12">
  <div class="flex justify-end ml-44 w-full pt-44">
    <button class="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={toggleAddProduct}>
      Add Products
    </button>
  </div>
</div>

<div class="container bg-lavenderblush pt-6 w-9/12">
  <table class='md:ml-44 w-full rounded-lg bg-white divide-y divide-gray-300 overflow-hidden'>
  <thead class="bg-gray-900">
    <tr class="text-white text-left">
                  <th class="font-semibold text-sm py-5 "> Name </th>
                  <th class="font-semibold text-sm py-5"> Description </th>
                  <th class="font-semibold text-sm py-5"> Price </th>
                  <th class="font-semibold text-sm py-5"> Action </th>
              </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            {#each $productStore as item}
              <tr>
                <td class="px-6 py-4">
                  <div class="flex items-center space-x-3">
                    <div>
                      <p class="hidden">{item.id}</p>
                      <p>{item.name}</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <p class="text-gray-500 grid md:grid-cols text-sm font-semibold tracking-wide">{item.desc}</p>
                </td>
                <td class="px-6 py-4">
                  <p class="text-gray-500 text-sm font-semibold tracking-wide">{item.price}</p>
                </td>
                <td class="px-6 py-4">
                  <button class="btn bg-yellow-400 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" on:click={() => {toggleEditProduct(); updateProduct(item.id,item.name);}} type="button">
                    Edit
                  </button>
                  <button class="btn bg-red-600 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" on:click={() => {toggleDeleteProduct(); deleteProduct(item.id,item.name) }} type="button">
                    Delete
                  </button>
                </td>
              </tr>
            {/each}
          </tbody>
          
      </table>
 
</div>

 <!--Start Add Product form -->
<div class="{addproduct ? ' ':'hidden'}  h-screen top-0 left-0 bottom-0 right-0  fixed  backdrop-blur-md">
<div class="pt-10  ml-auto mr-auto w-full h-full max-w-md md:h-auto  ">
  
  <form class="bg-white shadow-md rounded border-8 border-double pt-10  w-full" on:submit|preventDefault={formValidation} on:submit|preventDefault={addProduct}>
    <p class="text-black font-bold text-2xl pb-5 ml-5">Add New Product</p>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2 ml-5" for="">
        Name
      </label>
      <input class="shadow basepearance-none border rounded  ml-5 py-2 w-11/12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="EnterProduct">
      <span id="pro_name" class="text-red-600 text-base ml-5"></span>
    </div>
    
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2 ml-5" for="">
        Description
      </label>
      <textarea class="shadow appearance-none border rounded  ml-5 py-2 w-11/12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="desc" placeholder="EnterDescription" rows="4"></textarea>
      <span id="pro_desc" class="text-red-600 text-base ml-5"></span>
    </div>
    
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2 ml-5" for="">
        Price
      </label>
      <input class="shadow appearance-none border rounded  ml-5 py-2 w-11/12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="price" type="text" placeholder="EnterPrice">
      <span id="pro_price" class="text-red-600 text-base ml-5"></span>
    </div>
    
    <div class="flex justify-end gap-2 pb-5 ">
      <button class="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit"  on:click={formValidation} on:click|preventDefault={addProduct}>
        Add
      </button>
      <button on:click={toggleAddProduct} class="btn bg-white text-black font-italic py-2 px-4 mr-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Cancel    
      </button>
    </div>
  
  </form>
</div>
</div>
<!--End Add Product form -->

<!--Start delete Product form -->
<div class="{deleteproduct ? ' ':'hidden'} w-full h-screen top-0 left-0 bottom-0 right-0 fixed  backdrop-blur-md">
  <div class="pt-10   h-full ml-auto mr-auto w-full max-w-md md:h-auto  ">
    
    <form class="bg-white shadow-md rounded border-8 border-double ">
      <p class="text-black font-bold text-2xl py-5 ml-5">Delete -{delProductName} </p>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2 ml-5" for="">
          Name
        </label>
        <input class="shadow appearance-none border rounded  ml-5 py-2 w-11/12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="dname" type="text" placeholder="Enter Delete Product">
        <span id="delname" class="text-red-600 text-base ml-5"></span>
      </div>
      <div class="flex justify-end gap-2 pb-5 ">
        <button class="btn bg-red-600 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" on:click|preventDefault={()=>{toggleDeleteProduct();}}  >
          Delete
        </button>
        <button on:click={toggleDeleteProduct} class="btn bg-white text-black font-italic py-2 px-4 mr-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Cancel    
        </button>
      </div>
    
    </form>
  </div>
</div>
<!--End delete Product form -->

<!--Start Edit Product Form -->
  <div class="{editproduct ? ' ':'hidden'}  h-screen top-0 left-0 bottom-0 right-0  fixed  backdrop-blur-md">
    <div class="pt-10  ml-auto mr-auto w-full h-full max-w-md md:h-auto  ">
      
      <form class="bg-white shadow-md rounded border-8 border-double pt-10  w-full" on:submit|preventDefault={formValidation}>
        <p class="text-black font-bold text-2xl pb-5 ml-5">Edit Product-{editProductName}</p>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2 ml-5" for="">
            Name
          </label>
          <input class="shadow basepearance-none border rounded  ml-5 py-2 w-11/12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" bind:value={editname.value} type="text" placeholder="EnterProduct">
          <input class="shadow basepearance-none border rounded  ml-5 py-2 w-11/12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="productid" bind:value={productid.value} type="text" placeholder="EnterProduct" hidden>
          <span id="pro_name" class="text-red-600 text-base ml-5"></span>
        </div>
        
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2 ml-5" for="">
            Description
          </label>
          <textarea class="shadow appearance-none border rounded  ml-5 py-2 w-11/12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="desc" bind:value={editdesc.value} placeholder="EnterDescription" rows="4"></textarea>
          <span id="pro_desc" class="text-red-600 text-base ml-5"></span>
        </div>
        
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2 ml-5" for="">
            Price
          </label>
          <input class="shadow appearance-none border rounded  ml-5 py-2 w-11/12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="price" type="text" bind:value={editprice.value} placeholder="EnterPrice">
          <span id="pro_price" class="text-red-600 text-base ml-5"></span>
        </div>
        
        <div class="flex justify-end gap-2 pb-5 ">
          <!-- svelte-ignore missing-declaration -->
          <button class="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" id="editId"  on:click={formValidation} on:click|preventDefault={()=>{toggleEditProduct();saveProduct()}}>
            Update
          </button>
          <button on:click={toggleEditProduct} class="btn bg-white text-black font-italic py-2 px-4 mr-4 rounded focus:outline-none focus:shadow-outline" on:click={formValidation} type="button">
            Cancel    
          </button>
        </div>
      
      </form>
    </div>
    </div>
<!--End Edit Product Form -->
