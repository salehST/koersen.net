
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

<section class="w-full bg-lblue p-10 md:p-12 md:pt-16">
    <div class="container mx-auto max-w-screen-xl">  <!-- container start -->
       <CryptoRatesExchangeRateTable />        
    </div>
</section>
</template>
