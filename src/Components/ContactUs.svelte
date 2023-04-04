<script lang="ts">
  // start validation form
  const formValidation = (): boolean => {
  
  const uname: string = (document.getElementById("userid") as HTMLInputElement).value;
  const mobile: string = (document.getElementById("numid") as HTMLInputElement).value;
  const email: string = (document.getElementById("emailid") as HTMLInputElement).value;

  if (uname === "") {
    (document.getElementById("validation_userid") as HTMLElement).innerHTML = "Please Enter Name";
    return false;
  }

  if (uname.length <= 2 || uname.length > 10) {
    (document.getElementById("validation_userid") as HTMLElement).innerHTML = "Username Lenght must be between 2 to 10";
    return false;
  }

  if (!isNaN(Number(uname))) {
    (document.getElementById("validation_userid") as HTMLElement).innerHTML = "Username Allowed Only Text Character";
    return false;
  }

  
    if (email === "") {
      (document.getElementById("validation_emailid") as HTMLElement).innerHTML = "Please Enter Email";
      return false;
    }
  
    if (email.indexOf("@") <= 0) {
      (document.getElementById("validation_emailid") as HTMLElement).innerHTML = "Invalid Email!!";
      return false;
    }

  if (mobile === "") {
    (document.getElementById("validation_numid") as HTMLElement).innerHTML = "Please Enter Mobile Number";
    return false;
  }

  if (isNaN(Number(mobile))) {
    (document.getElementById("validation_numid") as HTMLElement).innerHTML = "Please Enter Only Number";
    return false;
  }

  if (mobile.length !== 10) {
    (document.getElementById("validation_numid") as HTMLElement).innerHTML = "Enter Only 10 Digit of mobile number";
    return false;
  }
   return true;
};
// .........End validation form..........


</script>

<div class="w-9/12 flex justify-between">
  <div class="pt-44  md:ml-44  w-full max-w-md md:h-auto">
        
        <form class="bg-white shadow-md rounded border-8 border-double pt-12  w-full" on:submit|preventDefault={formValidation}>
          
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2 ml-5" for="">
              Name
            </label>
            <input class="shadow appearance-none border rounded  ml-5 py-2 w-11/12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="userid" type="text" placeholder="Enter Name">
            <span id="validation_userid" class="text-red-600 text-base ml-5"></span>
          </div>
          
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2 ml-5" for="">
              Email
            </label>
            <input class="shadow appearance-none border rounded  ml-5 py-2 w-11/12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="emailid" type="text" placeholder="Enter Email">
            <span id="validation_emailid" class="text-red-600 text-base ml-5"></span>
          </div>
          
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2 ml-5" for="">
              Phone
            </label>
            <input class="shadow appearance-none border rounded  ml-5 py-2 w-11/12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="numid" type="text" placeholder="Enter Phone">
            <span id="validation_numid" class="text-red-600 text-base ml-5"></span>
          </div>
          
          <div class="flex justify-end gap-2 pb-5 ">
            <button class="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" on:click={formValidation}>
              Submit
            </button>
            <button  class="btn bg-white text-black font-italic py-2 px-4 mr-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Reset    
            </button>
          </div>
        </form>
  </div>

  <div class="pt-44 ">
      <!-- svelte-ignore a11y-missing-attribute -->
      <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.8779361948978!2d72.49672071400717!3d23.0282536218966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84d5c5d6ba3f%3A0x2dac1a9a5d5f34be!2sIT%20Path%20Solutions!5e0!3m2!1sen!2sin!4v1680410435695!5m2!1sen!2sin"></iframe>
      <div class="pt-6">
        <div>
          <p class="text-black font-bold text-3xl">Reach Out to Us</p>
        </div>
        <div class="pt-4">
          <p class="text-black flex-cols-2 font-bold">Address LINE1</p>
        </div>
        <div class="pt-1">
          <p class="text-black flex-cols-2 font-bold">[Iskon],[Ahmedabad]</p>
        </div>  
        <div class="pt-1">
          <p class="text-black flex-cols-2 font-bold">[Gujrat]-[380016]</p>
        </div>  
      </div> 
  </div>
</div>


    
    