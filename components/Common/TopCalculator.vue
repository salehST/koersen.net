<script>
export default{
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
}
}
</script>
<template>
            <div class="call-to-action relative top-sec mb-10 w-full md:w-4/5 mx-auto">
            <div class="w-full text-left md:text-center">
                <h2 class=" text-[32px] text-primary md:text-5xl font-bold leading-9 md:leading-[57px] mb-6 flex items-center justify-start md:justify-center">
                    Currency Calculator</h2>

                    <p class="text-[#6B6C6F] font-normal text-base">Currency current exchange rates of all strange currencies in one place.</p>
            </div>

        </div>
        <div class="calculator-wrapper flex  justify-center mb-12">
            <div class="inner-ca w-full md:w-auto bg-[#F9FBFF] border border-[#CBD7F1] rounded-[20px] px-6 py-6  inline-flex mx-auto justify-center">
                <div class="mb-3 exchange-mb">                                
                    <div class="flex flex-col  md:flex-row">
                        <div class="">
                            <label for="weight"
                        class="block mb-1 text-xs font-normal text-black">From</label>
                            <div class="flex">
                                <input type="text" id="weight"
                                    class="rounded-none rounded-l-md bg-white border border-r-0 border-[#D5DBE8] text-black font-normal text-xs focus:ring-[#3b82f6] focus:outline-none focus:border-[#3b82f6] block flex-1 min-w-0 w-full p-2.5"
                                    placeholder="€ 100">
                                <span
                                    class="inline-flex items-center bg-white text-black font-normal text-xs focus:ring-[#3b82f6] border-[#D5DBE8] border rounded-r-md"> 
                                    <div class="">
                                <div class="no-label w-[85px]">
                                    <div class="select">
                                        <div class="selectBtn" data-type="firstOption" style="background-image: url(/_nuxt/assets/img/exchange/eur.svg);" >EUR </div>
                                        <div class="selectDropdown">
                                            <div class="option" data-value="all" data-type="firstOption">
                                                EUR</div>
                                            <div class="option" data-type="secondOption" data-value="internet-tv">
                                                USD
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                </span>
                            </div>
                        </div>
                        <div class="flex justify-center items-end mb-0.5 px-0 py-3.5 md:py-0 md:px-3.5 ex-icon-s">
                            <a href=""><img src="@/assets/img/exchange/ex-icon.svg" alt=""></a>
                        </div>
                        <div class="">
                            <label for="weight"
                        class="block mb-1 text-xs font-normal text-black">To</label>
                        
                        <div class="flex">
                            <input type="text" id="weight"
                                class="rounded-none rounded-l-md bg-white border border-r-0 border-[#D5DBE8] text-black font-normal text-xs focus:ring-[#3b82f6] focus:outline-none focus:border-[#3b82f6] block flex-1 min-w-0 w-full p-2.5"
                                placeholder="$ 100">
                            <span
                                class="inline-flex items-center bg-white text-black font-normal text-xs focus:ring-[#3b82f6] border-[#D5DBE8] border rounded-r-md"> 
                                <div class="">
                            <div class="no-label w-[85px]">
                                <div class="select">
                                    <div class="selectBtn" data-type="firstOption" style="background-image: url(/_nuxt/assets/img/exchange/usd.svg);" >EUR </div>
                                    <div class="selectDropdown">
                                        <div class="option" data-value="all" data-type="firstOption">
                                            EUR</div>
                                        <div class="option" data-type="secondOption" data-value="internet-tv">
                                            USD
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            </span>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>