<script lang="ts">
export let addproduct:boolean=false;
function toggleAddProduct(){
  addproduct = !addproduct 
}

</script>

<div class="flex justify-end w-9/12 pt-12">
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={toggleAddProduct}>
    Add Products
  </button>
</div>

<div class="container bg-lavenderblush pt-6">
    <table class=' md:ml-52 w-9/12 rounded-lg bg-white divide-y divide-gray-300 overflow-hidden'>
          <thead class="bg-gray-900">
              <tr class="text-white text-left">
                  <th class="font-semibold text-sm "> Name </th>
                  <th class="font-semibold text-sm "> Price </th>
                  <th class="font-semibold text-sm  "> Description </th>
                  <th class="font-semibold text-sm  "> Action </th>
              </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
              <tr>
                  <td class="px-6 py-4">
                      <div class="flex items-center space-x-3">
                           <div>
                              <p> Mira Rodeo </p>   
                          </div>
                      </div>
                  </td>

                  <td class="px-6 py-4">
                      <p class="text-gray-500 text-sm font-semibold tracking-wide"> 5000 </p>
                  </td>
                  
                  <td class="px-6 py-4"> 
                    <p class="text-gray-500 text-sm font-semibold tracking-wide">fdishfsfhi</p>
                  </td>
                  
                  <td class="px-6 py-4 "> 
                    <button class="btn bg-yellow-400 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                      Edit
                    </button>
                    <button class="btn bg-red-600 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                      Delete
                    </button>
                  </td>
              </tr>
              <tr>
                <td class="px-6 py-4">
                    <div class="flex items-center space-x-3">
                         <div>
                            <p> Mira Rode </p>   
                        </div>
                    </div>
                </td>

                <td class="px-6 py-4">
                    <p class="text-gray-500 text-sm font-semibold tracking-wide"> 5000 </p>
                </td>
                
                <td class="px-6 py-4"> 
                  <p class="text-gray-500 text-sm font-semibold tracking-wide">fdishfsfhi</p>
                </td>
                
                <td class="px-6 py-4 "> 
                  <button class="btn bg-yellow-400 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Edit
                  </button>
                  <button class="btn bg-red-600 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Delete
                  </button>
                </td>
            </tr>
            <tr>
              <td class="px-6 py-4">
                  <div class="flex items-center space-x-3">
                       <div>
                          <p> Mira Rodeo </p>   
                      </div>
                  </div>
              </td>

              <td class="px-6 py-4">
                  <p class="text-gray-500 text-sm font-semibold tracking-wide"> 5000 </p>
              </td>
              
              <td class="px-6 py-4"> 
                <p class="text-gray-500 text-sm font-semibold tracking-wide">fdishfsfhi</p>
              </td>
              
              <td class="px-6 py-4 "> 
                <button class="btn bg-yellow-400 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Edit
                </button>
                <button class="btn bg-red-600 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Delete
                </button>
              </td>  
          </tr>
          <tr>
            <td class="px-6 py-4">
                <div class="flex items-center space-x-3">
                     <div>
                        <p> Mira Rodeo </p>   
                    </div>
                </div>
            </td>

            <td class="px-6 py-4">
                <p class="text-gray-500 text-sm font-semibold tracking-wide"> 5000 </p>
            </td>
            
            <td class="px-6 py-4"> 
              <p class="text-gray-500 text-sm font-semibold tracking-wide">fdishfsfhi</p>
            </td>
            
            <td class="px-6 py-4 "> 
              <button class="btn bg-yellow-400 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Edit
              </button>
              <button class="btn bg-red-600 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Delete
              </button>
            </td>
         </tr>
          </tbody>
      </table>
 
</div>

<div class="{addproduct ? ' ':'hidden'} w-full h-screen top-0 left-0 bottom-0 right-0 fixed  backdrop-blur-md">
<div class="pt-10 ml-80 md:ml-44  ml-auto mr-auto w-full max-w-md md:h-auto  ">
  
  <form class="bg-white shadow-md rounded border-8 border-double ">
    <p class="text-black font-bold text-2xl py-5 ml-5">Add New Product</p>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2 ml-5" for="">
        Name
      </label>
      <input class="shadow appearance-none border rounded  ml-5 py-2 w-11/12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="EnterProduct">
    </div>
    
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2 ml-5" for="">
        Description
      </label>
      <textarea class="shadow appearance-none border rounded  ml-5 py-2 w-11/12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="desc" placeholder="EnterDescription" rows="4"></textarea>
      
    </div>
    
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2 ml-5" for="">
        Price
      </label>
      <input class="shadow appearance-none border rounded  ml-5 py-2 w-11/12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="EnterPrice">
    </div>
    
    <div class="flex justify-end gap-2 pb-5 ">
      <button class="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Add
      </button>
      <button on:click={toggleAddProduct} class="btn bg-white text-black font-italic py-2 px-4 mr-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Cancel    
      </button>
    </div>
  
  </form>
</div>
</div>
