<script>

export default { 
     data() {
        return {
        isOpen: false,
        };
    },
    mounted() {
        /* custom selectors News Start */
        let index = 1;

        const on = (listener, query, fn) => {
            document.querySelectorAll(query).forEach(item => {
                item.addEventListener(listener, el => {
                    fn(el);
                })
            })
        }

        on('click', '.selectBtn', item => {
            item.target.classList.toggle('toggle');
            const next = item.target.nextElementSibling;
            next.classList.toggle('toggle');
            next.style.zIndex = index++;
        });

        document.addEventListener('mouseup', function (e) {

            const containers = document.querySelectorAll('.selectBtn');
            if (containers.length > 0) {
                const options = document.querySelectorAll('.selectDropdown');
                containers.forEach(function (container, index) {
                    if (!container.contains(e.target)) {
                        container.classList.remove('toggle');
                        options[index].classList.remove('toggle');
                    }
                });

            }
        });
        on('click', '.option', item => {
            item.target.parentElement.classList.remove('toggle');
            const parent = item.target.closest('.select').children[0];
            parent.setAttribute('data-type', item.target.getAttribute('data-type'));
            parent.innerText = item.target.innerText;
        })
        /* custom selectors News End */
    },
    methods: {
        openModal() {
      this.$refs.modal.isOpen = true;
    },
    closeModal() {
      this.$refs.modal.isOpen = false;
    },
       
        toggleClass() {
    let button = document.querySelector('#nav-icon');
    let nav = document.querySelector('nav');
    button.classList.toggle('open');
    nav.classList.toggle('hidden');
    nav.classList.toggle('flex');
},
        goBack() {
            const backBtn = document.querySelector('.back-ul');

            backBtn.classList.add("opacity-0");
            backBtn.classList.add("hidden");
        },
        showSubMenu() {
            const backBtn = document.querySelector('.back-ul');

            backBtn.classList.remove("opacity-0");
            backBtn.classList.remove("hidden");
        }
    },

}

</script>
<style>
.mega-menu-full-dropdown-button li.menu-item:hover button svg path {
    fill: unset;
}

.mega-menu-full-dropdown-button li.menu-item:hover button svg {
    margin-right: 5px;
    display: block;
}
.header-lang .select .selectBtn.filter-icon {
    border: none;
}
</style>
<template>
      
    <!-- header start -->
    <header class="">

        <div class="w-full z-40 absolute md:relative text-gray-700 bg-white">
            <div class="flex flex-col max-w-screen-xl px-2 mx-auto md:items-center md:justify-between md:flex-row md:px-0 ">
                <div class="py-4 flex flex-row items-center justify-between">
                    <NuxtLink to="/" class="flex md:hidden items-center w-40">
                        <img src="@/assets/img/logo.svg"
                            class="mr-3 h-[40px] sm:h-[50px]" alt="Logo" /></NuxtLink>
                        <div class="flex items-center gap-4">
                            <div class="search-icon flex md:hidden">
                            <button @click="openModal" type="button"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.60116 2.20039C4.17068 2.20039 2.20039 4.17068 2.20039 6.60116C2.20039 9.03164 4.17068 11.0019 6.60116 11.0019C9.03164 11.0019 11.0019 9.03164 11.0019 6.60116C11.0019 4.17068 9.03164 2.20039 6.60116 2.20039ZM0 6.60116C0 2.95544 2.95544 0 6.60116 0C10.2469 0 13.2023 2.95544 13.2023 6.60116C13.2023 8.02683 12.7504 9.34693 11.9819 10.426L15.6779 14.1219C16.1075 14.5515 16.1075 15.2481 15.6779 15.6778C15.2482 16.1074 14.5516 16.1074 14.1219 15.6778L10.426 11.9819C9.34693 12.7504 8.02683 13.2023 6.60116 13.2023C2.95544 13.2023 0 10.2469 0 6.60116Z" fill="black"/>
</svg>
</button>
                            </div>
                        <button class="md:hidden rounded-lg focus:outline-none focus:shadow-outline">
                            <div id="nav-icon" @click="toggleClass">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </button>
                    </div>
                </div>
                <nav class="flex-col flex-grow items-center pb-4 md:pb-0 hidden md:flex md:justify-between md:flex-row">
                    <NuxtLink to="/" class="hidden md:flex items-center w-40"><img src="@/assets/img/logo.svg"
                            class="mr-3 h-[40px] sm:h-[50px]" alt="Logo" /></NuxtLink>
                    <div class="menu-area py-2 mx-2 text-sm font-semibold text-cblue flex flex-col md:flex-row items-start w-full md:w-auto md:items-center justify-start md:justify-center bg-white hover:text-blue-500 ">
                        
                        <NuxtLink to="/" class="text-base font-semibold md:text-sm md:font-normal py-5 px-5 text-black transition hover:text-cblue w-full md:w-auto">Home</NuxtLink> 
                        <NuxtLink to="/all-rates-currency"
                            class="text-base font-semibold md:text-sm md:font-normal border-t border-dblue md:border-none py-5 px-5 text-black w-full md:w-auto transition hover:text-cblue">All rates</NuxtLink>
                        <NuxtLink to="/crypto-rates"
                            class="w-full md:w-auto text-base font-semibold md:text-sm md:font-normal border-t border-dblue md:border-none py-5 px-5 text-black transition hover:text-cblue">Crypto</NuxtLink>
                        <NuxtLink to="/currency-details"
                            class="w-full md:w-auto text-base font-semibold md:text-sm md:font-normal border-t border-dblue md:border-none py-5 px-5 text-black transition hover:text-cblue">Converter</NuxtLink>
                        <div class="search-icon hidden md:flex">
                            <button @click="openModal" type="button">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.60116 2.20039C4.17068 2.20039 2.20039 4.17068 2.20039 6.60116C2.20039 9.03164 4.17068 11.0019 6.60116 11.0019C9.03164 11.0019 11.0019 9.03164 11.0019 6.60116C11.0019 4.17068 9.03164 2.20039 6.60116 2.20039ZM0 6.60116C0 2.95544 2.95544 0 6.60116 0C10.2469 0 13.2023 2.95544 13.2023 6.60116C13.2023 8.02683 12.7504 9.34693 11.9819 10.426L15.6779 14.1219C16.1075 14.5515 16.1075 15.2481 15.6779 15.6778C15.2482 16.1074 14.5516 16.1074 14.1219 15.6778L10.426 11.9819C9.34693 12.7504 8.02683 13.2023 6.60116 13.2023C2.95544 13.2023 0 10.2469 0 6.60116Z" fill="black"/>
                                </svg>
                            </button>
                        </div>
                </div>
                <div class="w-full lg:w-auto flex md:hidden mt-14">
                    <form action="" class="text-left w-full mx-auto md:mx-0">
                        <div class="">
                            <div class="no-label w-full  mx-auto md:mx-0">
                                <div class="select" id="price">
                                    <div class="selectBtn filter-icon" data-type="firstOption">English </div>
                                    <div class="selectDropdown">
                                        <div class="option" data-value="all" data-type="firstOption">English</div>
                                        <div class="option" data-type="secondOption" data-value="internet-tv">
                                            Dutch
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </nav>
        </div>
    </div>

</header>
<SearchModal @closed="closeModal" ref="modal" />
<!-- header end -->
</template>
