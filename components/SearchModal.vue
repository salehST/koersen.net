<template>
    <div v-if="isOpen" class="fixed z-50 inset-0 flex items-start justify-center bg-[#AEB7C7C9] bg-opacity-50" @click="closeModalOutside">
 
      <div class="bg-white top-8 rounded-[10px] shadow-md relative">
        
       <!-- Close button inside the modal body -->
        <button class="close-btn absolute hidden md:block " @click="closeModal">
          <svg  width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.86853 6.86865C7.49337 6.24381 8.50643 6.24381 9.13127 6.86865L15.9999 13.7373L22.8685 6.86865C23.4934 6.24381 24.5064 6.24381 25.1313 6.86865C25.7561 7.49349 25.7561 8.50656 25.1313 9.1314L18.2626 16L25.1313 22.8687C25.7561 23.4935 25.7561 24.5066 25.1313 25.1314C24.5064 25.7562 23.4934 25.7562 22.8685 25.1314L15.9999 18.2628L9.13127 25.1314C8.50643 25.7562 7.49337 25.7562 6.86853 25.1314C6.24369 24.5066 6.24369 23.4935 6.86853 22.8687L13.7372 16L6.86853 9.1314C6.24369 8.50656 6.24369 7.49349 6.86853 6.86865Z" fill="white"/>
          </svg>
        </button>
        <!-- Your modal content here -->
        <div class="modal-inner-body w-[350PX] md:w-[750px]  rounded-md overflow-hidden">
          <div class="p-1 bg-[#EFF4FF]">
            <div class="search-wrapper w-full flex mb-6 lg:mb-0">
                    <div class="search-inner w-full relative bg-white p-[7px]">
                        <form action="" class=" flex items-center w-full">
                            <span class="pr-3 pl-1">                               
                                <svg class=" inline-flex w-auto" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.60116 2.20039C4.17068 2.20039 2.20039 4.17068 2.20039 6.60116C2.20039 9.03164 4.17068 11.0019 6.60116 11.0019C9.03164 11.0019 11.0019 9.03164 11.0019 6.60116C11.0019 4.17068 9.03164 2.20039 6.60116 2.20039ZM0 6.60116C0 2.95544 2.95544 0 6.60116 0C10.2469 0 13.2023 2.95544 13.2023 6.60116C13.2023 8.02683 12.7504 9.34693 11.9819 10.426L15.6779 14.1219C16.1075 14.5515 16.1075 15.2481 15.6779 15.6778C15.2482 16.1074 14.5516 16.1074 14.1219 15.6778L10.426 11.9819C9.34693 12.7504 8.02683 13.2023 6.60116 13.2023C2.95544 13.2023 0 10.2469 0 6.60116Z" fill="#0052FE"/>
                                </svg>
                            </span>
                            <input type="text"
                                class="text-[#A3ABBD] font-normal focus:outline-none active:outline-none w-full hover:outline-none text-sm bg-transparent"
                                placeholder="Find your calculation"> 
                              
                        </form>
                                                     <!-- Close button inside the modal body -->
        <button class="close-btn-m flex md:hidden " @click="closeModal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.15152 5.15128C5.62015 4.68265 6.37995 4.68265 6.84858 5.15128L12 10.3027L17.1515 5.15128C17.6202 4.68265 18.3799 4.68265 18.8486 5.15128C19.3172 5.61991 19.3172 6.3797 18.8486 6.84833L13.6971 11.9998L18.8486 17.1513C19.3172 17.6199 19.3172 18.3797 18.8486 18.8483C18.3799 19.317 17.6202 19.317 17.1515 18.8483L12 13.6969L6.84858 18.8483C6.37995 19.317 5.62015 19.317 5.15152 18.8483C4.68289 18.3797 4.68289 17.6199 5.15152 17.1513L10.303 11.9998L5.15152 6.84833C4.68289 6.3797 4.68289 5.61991 5.15152 5.15128Z" fill="black"/>
</svg>

        </button>  
                    </div>
                </div>
          </div>
          <div class="px-5 py-4">
            <div class=" text-base text-[#2B313B] font-bold">Trending Search:</div>
          </div>
          <div class="px-5 py-4 border-t border-[#D3D7DE]">
            <div class="flex items-center gap-2 w-full my-2">
              <div class="flex items-center gap-2 justify-between w-full md:w-[200px]">
                <span class="flex items-center gap-2">
                  <img src="@/assets/img/us-icon.svg" alt="" width="20" height="20" class="w-5 h-5">
                  <span class="text-sm text-[#2B313B] font-normal">US Dollar</span>
                </span>
                <span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.75137 17.6485C8.28275 17.1799 8.28275 16.4201 8.75137 15.9515L12.7028 12L8.75137 8.04853C8.28275 7.5799 8.28275 6.8201 8.75137 6.35147C9.22 5.88284 9.9798 5.88284 10.4484 6.35147L15.2484 11.1515C15.7171 11.6201 15.7171 12.3799 15.2484 12.8485L10.4484 17.6485C9.9798 18.1172 9.22 18.1172 8.75137 17.6485Z" fill="black"/>
                  </svg>

                </span>                
              </div>
              <div class="flex items-center gap-2">
                
              </div>
            </div>
            <div class="flex items-center gap-2 w-full my-2">
              <div class="flex items-center gap-2 justify-between w-full md:w-[200px]">
                <span class="flex items-center gap-2">
                  <img src="@/assets/img/us-icon.svg" alt="" width="20" height="20" class="w-5 h-5">
                  <span class="text-sm text-[#2B313B] font-normal">US Dollar</span>
                </span>
                <span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.75137 17.6485C8.28275 17.1799 8.28275 16.4201 8.75137 15.9515L12.7028 12L8.75137 8.04853C8.28275 7.5799 8.28275 6.8201 8.75137 6.35147C9.22 5.88284 9.9798 5.88284 10.4484 6.35147L15.2484 11.1515C15.7171 11.6201 15.7171 12.3799 15.2484 12.8485L10.4484 17.6485C9.9798 18.1172 9.22 18.1172 8.75137 17.6485Z" fill="black"/>
                  </svg>

                </span>                
              </div>
              <div class="flex items-center gap-2">

              </div>
            </div>
            <div class="flex items-center gap-2 w-full my-2">
              <div class="flex items-center gap-2 justify-between w-full md:w-[200px]">
                <span class="flex items-center gap-2">
                  <img src="@/assets/img/us-icon.svg" alt="" width="20" height="20" class="w-5 h-5">
                  <span class="text-sm text-[#2B313B] font-normal">US Dollar</span>
                </span>
                <span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.75137 17.6485C8.28275 17.1799 8.28275 16.4201 8.75137 15.9515L12.7028 12L8.75137 8.04853C8.28275 7.5799 8.28275 6.8201 8.75137 6.35147C9.22 5.88284 9.9798 5.88284 10.4484 6.35147L15.2484 11.1515C15.7171 11.6201 15.7171 12.3799 15.2484 12.8485L10.4484 17.6485C9.9798 18.1172 9.22 18.1172 8.75137 17.6485Z" fill="black"/>
                  </svg>

                </span>                
              </div>
              <div class="flex items-center gap-2">

              </div>
            </div>
            <div class="flex items-center gap-2 w-full my-2">
              <div class="flex items-center gap-2 justify-between w-full md:w-[200px]">
                <span class="flex items-center gap-2">
                  <img src="@/assets/img/us-icon.svg" alt="" width="20" height="20" class="w-5 h-5">
                  <span class="text-sm text-[#2B313B] font-normal">US Dollar</span>
                </span>
                <span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.75137 17.6485C8.28275 17.1799 8.28275 16.4201 8.75137 15.9515L12.7028 12L8.75137 8.04853C8.28275 7.5799 8.28275 6.8201 8.75137 6.35147C9.22 5.88284 9.9798 5.88284 10.4484 6.35147L15.2484 11.1515C15.7171 11.6201 15.7171 12.3799 15.2484 12.8485L10.4484 17.6485C9.9798 18.1172 9.22 18.1172 8.75137 17.6485Z" fill="black"/>
                  </svg>

                </span>                
              </div>
              <div class="flex items-center gap-2">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isOpen: false,
      };
    },
    methods: {
      closeModal() {
        this.isOpen = false;
        this.$emit("closed");
        this.enableScroll(); // Enable scrolling when the modal is closed
      },
      closeModalOutside(event) {
        if (!this.$el.querySelector(".bg-white").contains(event.target)) {
          this.closeModal();
        }
      },
      disableScroll() {
        document.documentElement.style.overflow = "hidden";
      },
      enableScroll() {
        document.documentElement.style.overflow = "auto";
      },
    },
    watch: {
      isOpen(value) {
        if (value) {
          this.disableScroll();
        } else {
          this.enableScroll();
        }
      },
    },
  };
  </script>
  
  <style>
  /* Add the necessary styles for the close button icon */
  </style>
  