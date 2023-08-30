<script>
export default {
mounted() {
// go to top start*//
    
        const showOnPx = 100;
        const backToTopButton = document.querySelector(".back-to-top");


const scrollContainer = () => {
  return document.documentElement || document.body;
};



document.addEventListener("scroll", () => {

  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hide");
  } else {
    backToTopButton.classList.add("hide");
  }
});

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
methods:{
   goToTop() {
    document.body.scrollIntoView({
        behavior: "smooth"
    });
},
}
};
</script>

<template>
    <!-- footer start -->
    <footer class="p-4 md:p-9 bg-white sm:p-6">
        <div class="container mx-auto md:max-w-screen-xl">
            <div class="flex md:flex-row justify-center md:justify-between flex-col">
                <div class="mb-6 md:mb-0 md:basis-1/3 basis-full mx-auto md:mx-0 w-full text-center md:text-left">
                    <NuxtLink to="/" class="flex justify-center md:justify-start items-center md:text-left">
                        <img src="@/assets/img/logo.svg" class="w-[192px] h-[50px] mx-auto mb-5 md:mx-0" alt="logo" />
                    </NuxtLink>
                    <p class="text-xs font-normal leading-5 text-[#6B6C6F] sm:pr-9">
                    <span class="mb-1 block">Currency N.L </span>
                        support@currency.nl
                    </p>
                    <p class=" my-6 text-xs font-normal leading-5 text-[#6B6C6F] sm:pr-9">
                        <span class="mb-1 block">Keizersgracht 281, </span>
                        <span class="mb-1 block">1016 ED Amsterdam</span>
                        <span class="mb-1 block">The Netherlands</span>
                    </p>
                    <div class="w-full lg:w-auto">
                        <form action="" class="text-left w-40 mx-auto md:mx-0">
                            <div class="">
                                <div class="no-label w-40  mx-auto md:mx-0">
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
                </div>
                <div
                    class="mb-6 md:mb-0 grid grid-cols-2 gap-8 mx-auto sm:justify-between sm:flex sm:basis-1/2 md:basis-2/3 sm:flex-wrap ">
                    <div class="mb-6 md:mb-0">
                        <h2 class="mb-6 text-base font-semibold text-black ">General</h2>
                        <ul class="text-xs font-normal leading-5 text-[#6B6C6F]">
                            <li class="mb-4">
                                <NuxtLink to="/" class="">Home</NuxtLink>
                            </li>
                            <li class="mb-4">
                                <NuxtLink to="/exchange" class="">Exchange</NuxtLink>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="">Prices</a>
                            </li>
                            <li class="mb-4">
                                <NuxtLink to="/knowlegebase" class="">Knowledge Base</NuxtLink>
                            </li>
                            <li class="mb-4">
                                <NuxtLink to="/news" class="">News</NuxtLink>
                            </li>
                            <li class="mb-4">
                                <NuxtLink to="/calculator" class="">Calculator</NuxtLink>
                            </li>
                        </ul>
                    </div>
                    <div class="mb-6 md:mb-0">
                        <h2 class="mb-6 text-base font-semibold text-black ">Company</h2>
                        <ul class="text-xs font-normal leading-5 text-[#6B6C6F]">
                            <li class="mb-4">
                                <a href="#" class=" ">Portfolio</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class=" ">Compare</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="">BTC Block explorer</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="">BTC Mempool</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="">ETH Block explorer</a>
                            </li>
                        </ul>
                    </div>
                    <div class="mb-6 md:mb-0">
                        <h2 class="mb-6 text-base font-semibold text-black ">Legal</h2>
                        <ul class="text-xs font-normal leading-5 text-[#6B6C6F]">
                            <li class="mb-4">
                                <NuxtLink to="/">Terms & Conditions</NuxtLink>
                            </li>
                            <li class="mb-4">
                                <NuxtLink to="/">Privacy Policy</NuxtLink>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="">Cookie Policy</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="">Risk Disclosure</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="">Trading Rules</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="">Responsible Disclosure</a>
                            </li>
                        </ul>
                    </div>
                    <div class="mb-6 md:mb-0">
                        <h2 class="mb-6 text-base font-semibold text-black">Community</h2>
                        <ul class="text-xs font-normal leading-5 text-[#6B6C6F]">
                            <li class="mb-4 flex">
                                <img class="rounded-full h-5 w-5" src="@/assets/img/social/facebook.svg" alt=""> <a href="#" class=" ml-2">Facebook</a>
                              
                            </li>
                            <li class="mb-4  flex">
                                <img class="rounded-full h-5 w-5" src="@/assets/img/social/twitter.svg" alt=""> <a href="#" class=" ml-2">Twitter</a>
                            </li>
                            <li class="mb-4  flex">
                                    <img class="rounded-full h-5 w-5" src="@/assets/img/social/instagram.svg" alt=""> <a href="#"
                                    class=" ml-2">Instagram</a>
                            </li>
                            <li class="mb-4  flex">
                                <img class="rounded-full h-5 w-5" src="@/assets/img/social/youtube.svg" alt=""> <a href="#" class=" ml-2">YouTube</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <div class="flex items-center justify-center sm:justify-between">
                <span class="font-semibold text-[#2B313B] sm:text-center">© 2023 Currency. NL All rights reserved
                </span>
            </div>
        </div>
    </footer>
    <!-- footer- end -->
    <!-- go to top -->

<button class="back-to-top hide" @click="goToTop" >
  <svg xmlns="http://www.w3.org/2000/svg" class="back-to-top-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11l5-5m0 0l5 5m-5-5v12" />
  </svg>
</button>

 <!-- go to top end -->
</template>