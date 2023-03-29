<script lang="ts">
	let showMenu = false;
  
	function toggleNavbar() {
	  showMenu = !showMenu;
	}
</script>

<div>
	<div class="bg-purple-900 gap-x-0">
		<div class="p-1">
		   <img src="..\image\apple.png" width="100px" alt="">
		   <span><a href=" " class="text-white font-bold">Logo</a></span>
		</div>	
	  <nav class="container flex justify-start px-6 py-8 mx-auto md:flex  md:items-center p-auto">
		<div class="flex items-center justify-between">
		 
            <!-- svelte-ignore a11y-click-events-have-key-events -->
           <div on:click={toggleNavbar} class="flex md:hidden">
			 <button type="button" class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"><i class="fa sold fa-bars" aria-hidden="true"></i></button>
		   </div>
		</div>
  
		
		<div class="flex justify-between flex-col mt-8 space-y-4  md:flex md:space-y-0 p-1 md:flex-row md:items-center md:space-x-10 md:mt-0 {showMenu ? 'flex' : 'hidden'}">
		  <a class="text-white font-bold hover:text-blue-400" href="/home">Home</a>
		  <a class="text-white font-bold hover:text-blue-400" href="/blog">Products</a>
		  <a class="text-white font-bold hover:text-blue-400" href="/contact">Contact US</a>
		  <a class="text-white font-bold hover:text-blue-400" href="/about">About Us</a>
		  <a class="text-white font-bold hover:text-blue-400" href="/about">Admin</a>
		</div>
	 </nav>
	</div>
</div>
 
  
<style>
	
</style>