<script lang="ts">
import Admin from "./Admin.svelte";
import ProductView from "./ProductView.svelte";
import {productStore } from '../store/storeData'
import {contactStore } from '../store/storeData'


  let totalProducts = 0;
  let totalContacts = 0;
  

  $: totalProducts = Object.keys($productStore).length;
  $: totalContacts = Object.keys($contactStore).length;
  

  
  let showProducts = false;
  let showContactUs = false;
  
  function viewProducts() {
    showProducts =! showProducts;
    
  }
  
  function viewContactUs() {
    showContactUs =! showContactUs;
  }

</script>
{#if !showProducts && !showContactUs}

<div class=" grid md:grid-cols-2 gap-2 pt-36  flex justify-around md:ml-44 pt-44">
           
  <div class=" max-w-sm rounded overflow-hidden shadow-lg rounded-xl bg-gray-800">
    
      <div class="px-6 py-4 p-4 ">
         <div class="font-bold text-xl mb-2 text-white"> </div>
          <p class=" text-white text-base ">
           Total Product Is Available : {totalProducts}<br><br>
           There are a number of ways to enhance product listing pages, with optimization and personalization helping shoppers narrow down a given selection and find relevant products.
          </p>
      </div>
    
      <div class="px-6 pt-4 pb-2 ">
        <button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"  on:click={viewProducts} >View All Products </button>
      </div>
  </div>

  <div class=" max-w-sm rounded overflow-hidden shadow-lg rounded-xl bg-gray-800 ">
    
    <div class="px-6 py-4 p-4">
       <div class="font-bold text-xl mb-2 text-white"> </div>
        <p class="text-white text-base">
        Total Contact is:{totalContacts}<br><br>
        A Contact Us page is essential to building a brand’s website as it allows visitors to contact you easily without leaving their browser. 
        View All the Cutomer Details
        </p>
    </div>
  
    <div class="px-6 pt-4 pb-2">
     <button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2" on:click={viewContactUs}>Contact-Us now</button>
    </div>
</div>
</div>

<div class="grid md:grid-cols gap-2 mt-14 md:ml-44 w-9/12">
    <p class="text-black font-bold text-6xl">App Store</p><br>
    <p class="text-black pt-1 text-lg">Heading and course information are commonly used by navigation apps to help guide the user to a destination. 
       The heading of a user’s device is its current orientation relative to magnetic or true north. Devices with GPS can report course information,
       which represents the direction in which the device is moving. The Compass app in iOS uses heading information to implement a magnetic compass interface, as shown in Figure 1. 
       Augmented reality apps might use this information to determine which direction the user is facing. <br>
       Heading information is available only on devices with a built-in magnetometer; it’s not available in iOS Simulator. 
       The magnetometer determines a device’s orientation relative to magnetic north. When location data is available, 
       Core Location also reports the device’s orientation relative to true north.
</div>

{:else if showProducts}
    <ProductView />
{:else if showContactUs}
    <Admin />
{/if}