<script lang="ts">
	import Home from "./Home.svelte";
	import ProductView from "./ProductView.svelte";
	import About from "./About.svelte";
	import Admin from "./Admin.svelte";
	import ContactUs from "./ContactUs.svelte";
	let showMenu:boolean = false;
	function toggleNavbar() {
	  showMenu = !showMenu;
	}

	let activeComponent='Home';
    function showCurrentComponent(component:string){
    activeComponent = component;
	showMenu = !showMenu;
    }

</script>

<div>
	<div class="bg-gray-800 fixed ml-0 mr-0 w-full">
		<div class="flex">
            <img src="..\image\apple-logo-transparent.png" width="80px" alt="">
             
		    <div class="ml-3 p-5">
                <div class="text-white text-xl font-bold">IPHONES</div>
				<div class="text-white text-lg font-bold">Think different</div>
            </div>
           
            <div class="absolute right-6">
		        <!-- svelte-ignore a11y-click-events-have-key-events -->
				<div on:click={toggleNavbar} class="flex md:hidden absolute right-8 mt-2">
					<i class="fa-solid fa-bars text-white text-3xl"></i>
				</div> 
               
            </div>
	    </div>	
	  
		<!-- svelte-ignore a11y-click-events-have-key-events -->
        <nav class="container px-1 py-1 mx-auto md:flex  md:items-center">
			<div class=" menu flex-col max-w-full mt-8 space-y-4 
			md:flex 
			md:flex-row 
			md:space-y-0 
			md:items-center
			md:justify-between
			md:mt-0  {showMenu? 'flex md:flex': 'hidden'}">
		 <!-- svelte-ignore a11y-missing-attribute -->
		 <a class="text-white font-bold hover:text-blue-400"  on:click={() =>showCurrentComponent('Home')}>Home</a>
		 <!-- svelte-ignore a11y-missing-attribute -->
		 <a class="text-white font-bold hover:text-blue-400"  on:click={() =>showCurrentComponent('ProductUs')}>Products</a>
		 <!-- svelte-ignore a11y-missing-attribute -->
		 <a class="text-white font-bold hover:text-blue-400" on:click={() =>showCurrentComponent('AboutUs')}>About Us</a> 
		 <!-- svelte-ignore a11y-missing-attribute -->
		 <a class="text-white font-bold hover:text-blue-400" on:click={() =>showCurrentComponent('Admin')}>Admin</a> 
		 <!-- svelte-ignore a11y-missing-attribute -->
		 <a class="text-white font-bold hover:text-blue-400"  on:click={() =>showCurrentComponent('ContactUS')}>Contact US</a>
		</div>
	 </nav>
	</div>
</div>
{#if activeComponent === 'Home'}
  <Home/>
  {:else if activeComponent === 'ProductUs'}
  <ProductView/> 
  {:else if activeComponent === 'AboutUs'}
  <About/> 
  {:else if activeComponent === 'Admin'}
  <Admin/> 
  {:else if activeComponent === 'ContactUS'}
  <ContactUs/> 
  {:else}
  <Home/>
{/if}
<style>
	
</style>

