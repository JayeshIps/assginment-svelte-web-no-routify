<script lang="ts">
import {contactStore } from '../store/storeData'


</script>

<div class=" pt-44 w-9/12">
    <table class='md:ml-44 w-full rounded-lg bg-white divide-y divide-gray-300 overflow-hidden'>
    <thead class="bg-gray-900">
      <tr class="text-white text-left">
                    <th class="font-semibold text-sm py-5"> Name </th>
                    <th class="font-semibold text-sm py-5 "> Email </th>
                    <th class="font-semibold text-sm py-5 "> Number </th>
                    
                </tr>
            </thead>

            <tbody class="divide-y divide-gray-200">
              {#each $contactStore as item}
              <tr>
                  <td data-th="Names" class="px-6 py-4">
                      <div class="flex items-center space-x-3">
                           <div>
                              <p>{item.name} </p>   
                          </div>
                      </div>
                  </td>
  
                  <td data-th="Email" class="px-6 py-4">
                      <p class="text-gray-500 text-sm font-semibold tracking-wide"> {item.email} </p>
                  </td>
                  
                  <td data-th="Number" class="px-6 py-4"> 
                    <p class="text-gray-500 text-sm font-semibold tracking-wide">{item.number}</p>
                  </td>
                </tr>
              {/each}
              </tbody>
        </table>
   
  </div>
  
  <style>
    @media (max-width: 640px) {
	table {
		overflow-x: auto;
		white-space: nowrap;
		width: 100%;
	}
	thead{
		display: none;
	}
	td::before {
		content: attr(data-th);
		float: left;
		margin-right: 20px;
		color: black;
		font-weight: bold;
	}
	td {
		display: block;
		text-align: right;
	}
	td div{
		float: right;
	}
}

   
  </style>