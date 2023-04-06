<script lang="ts">
import {contactStore } from '../store/storeData'


</script>

<div class="container bg-lavenderblush pt-44 w-9/12">
    <table class='md:ml-44 w-full rounded-lg bg-white divide-y divide-gray-300 overflow-hidden'>
    <thead class="bg-gray-900">
      <tr class="text-white text-left">
                    <th class="font-semibold text-sm py-5"> Name </th>
                    <th class="font-semibold text-sm py-5 "> Email </th>
                    <th class="font-semibold text-sm py-5 "> Contact Number </th>
                    
                </tr>
            </thead>

            <tbody class="divide-y divide-gray-200">
              {#each $contactStore as item}
              <tr>
                  <td class="px-6 py-4">
                      <div class="flex items-center space-x-3">
                           <div>
                              <p>{item.name} </p>   
                          </div>
                      </div>
                  </td>
  
                  <td class="px-6 py-4">
                      <p class="text-gray-500 text-sm font-semibold tracking-wide"> {item.email} </p>
                  </td>
                  
                  <td class="px-6 py-4"> 
                    <p class="text-gray-500 text-sm font-semibold tracking-wide">{item.number}</p>
                  </td>
                </tr>
              {/each}
              </tbody>
        </table>
   
  </div>
  