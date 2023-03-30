<script lang="ts">
	let showMenu = false;
  
	function toggleNavbar() {
	  showMenu = !showMenu;
	}
</script>

<div>
	<div class="bg-purple-900">
		<div class="flex">
            <img src="..\image\apple-logo-transparent.png" width="70px" alt="">
             
		    <div class="ml-3 p-5">
                <div class="text-white text-xl font-bold">IPHONES</div>
            </div>
           
            <div class="absolute right-6">
		        <!-- svelte-ignore a11y-click-events-have-key-events -->
				<div on:click={toggleNavbar} class="flex md:hidden absolute right-8 mt-2">
					<i class="fa-solid fa-bars text-white text-3xl"></i>
				</div> 
               
            </div>
	    </div>	
	  
        <nav class="container px-1 py-1 mx-auto md:flex  md:items-center">
	   <div class=" menu flex-col max-w-full mt-8 space-y-4 
	    md:flex 
		md:flex-row 
		md:space-y-0 
		md:items-center
		md:justify-between
		md:mt-0  {showMenu? 'flex': 'hidden'}">
		 <a class="text-white font-bold hover:text-blue-400" href=" ">Home</a>
		 <a class="text-white font-bold hover:text-blue-400" href=" ">Products</a>
		 <a class="text-white font-bold hover:text-blue-400" href=" ">Contact US</a>
		 <a class="text-white font-bold hover:text-blue-400" href=" ">About Us</a> 
		 <a class="text-white font-bold hover:text-blue-400" href=" ">Admin</a> 
		</div>
	 </nav>
	</div>
</div>
 
  
<style>
	
</style>

