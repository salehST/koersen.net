
<style>
.coin-wall .ex-button {
    padding: 14px 22px;
}
.ex-icon-s {
    position: relative;
}

.ex-icon-s:after {
    content: "";
    width: 15px;
    position: absolute;
    height: 1px;
    background: #CBD7F3;
    top: 39px;
    right: 0;
}

.ex-icon-s:before {
    content: "";
    width: 15px;
    height: 1px;
    position: absolute;
    top: 39px;
    left: 0;
    background: #CBD7F1;
}
@media only screen and (max-width: 769px) {
    .ex-icon-s {
        padding-top: 35px;
    }
    .ex-icon-s:before {
        width: 1px;
        height: 35px;
        top: 0;
        left: 50%;
    }
    .ex-icon-s:after {
        width: 1px;
        height: 38px;
        top: auto;
        right: 50%;
        bottom: -22px;
    }
}
</style>
<template>
    <section class="bg-white w-full p-10 md:p-12">
    <div class="container mx-auto max-w-screen-xl page-heading">  <!-- container start -->
        <div class="call-to-action relative top-sec mb-10 w-full md:w-4/5 mx-auto">
            <div class="w-full text-left md:text-center">
                <h2 class=" text-[32px] text-primary md:text-5xl font-bold leading-9 md:leading-[57px] mb-6 flex items-center justify-start md:justify-center">
                    Currency Calculator</h2>
            </div>

        </div>
        <CommonTopCalculator />
        <CommonTopSavings />
    </div>
</section>
<section class="w-full bg-lblue p-10 md:p-12 md:pt-16">
    <div class="container mx-auto max-w-screen-xl">  <!-- container start -->
       <HomeExchangeRateTable />        
    </div>
</section>
</template>
