<script>


import Chart from 'chart.js/auto/auto.mjs';
export default {
    data() {
        return {
            stockConfig1: {
                type: 'line',
                data: {
                    labels: ["Feb 1", "Feb 2", "Feb 3", "Feb 4", "Feb 5", "Feb 6", "Feb 7",],
                    datasets: [{
                        label: '',
                        data: [290, 360, 300, 350, 280, 335, 355],
                        backgroundColor: (ctx) => {
                            const canvas = ctx.chart.ctx;
                            const gradient = canvas.createLinearGradient(0, 1200, 0, 0);

                            gradient.addColorStop(1, '#FEF2F2');
                            gradient.addColorStop(.5, '#FEF2F2');

                            return gradient;
                        },
                        lineTension: 0.4,
                        pointRadius: 1,
                        pointHoverRadius: 1,
                        fill: true,
                        redraw: true,
                        borderColor: [
                            '#FF5555',

                        ],
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            display: false
                        },
                        x: {
                            display: false
                        },
                        ticks: {
                            display: false
                        }
                    },

                    elements: {
                        point: {
                            radius: 0
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            position: 'nearest',
                            padding: 10,
                            cornerRadius: 10,
                            backgroundColor: 'rgba(43,88,133)',
                            callbacks: {
                                label: function (context) {
                                    return context.parsed.y;
                                },
                                title: () => null
                            },

                            yAlign: 'bottom',
                            displayColors: false,

                        }
                    }
                }
            },
            priceconfig1: {
                type: 'line',
                data: {
                    labels: ["Feb 1", "Feb 2", "Feb 3", "Feb 4", "Feb 5", "Feb 6", "Feb 7",],
                    datasets: [{
                        label: '',
                        data: [290, 360, 300, 350, 280, 335, 355],
                        backgroundColor: (ctx) => {
                            const canvas = ctx.chart.ctx;
                            const gradient = canvas.createLinearGradient(0, 1200, 0, 0);

                            gradient.addColorStop(1, '#0051FF08');
                            gradient.addColorStop(.5, '#0051FF08');

                            return gradient;
                        },
                        // lineTension: 0.4,
                        pointRadius: 1,
                        pointHoverRadius: 1,
                        fill: true,
                        redraw: true,
                        borderColor: [
                            '#0051FF',

                        ],
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            display: true
                        },
                        x: {
                            display: true
                        },
                        ticks: {
                            display: false
                        }
                    },

                    elements: {
                        point: {
                            radius: 0
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            position: 'nearest',
                            padding: 10,
                            cornerRadius: 10,
                            backgroundColor: 'rgba(43,88,133)',
                            callbacks: {
                                label: function (context) {
                                    return context.parsed.y;
                                },
                                title: () => null
                            },

                            yAlign: 'bottom',
                            displayColors: false,

                        }
                    }
                }
            },
            priceChart1: null,
            stockChart1: null,
        }
    },
    mounted() {

        this.ChartRender();

         
    },
    methods: {
        ChartRender() {
            if (this.stockChart1 != null) {
                this.stockChart1.destroy();
            }
            this.stockChart1 = new Chart(
                document.getElementById('stockChart1'),
                this.stockConfig1
            );
            if (this.priceChart1 != null) {
                this.priceChart1.destroy();
            }
            this.priceChart1 = new Chart(
                document.getElementById('priceChart1'),
                this.priceconfig1
            );

        },
    }

}

</script>
<script setup>
import { ref } from 'vue';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

const date = ref();
</script>

<style scoped>
.cu-chart canvas {
    max-height: 60px;
    max-width: 170px;
    width: 100%!important;
}
</style>
<template>
    
        <div class="detail-content flex flex-col lg:flex-row items-start justify-between gap-6">
            
                <div class="w-full lg:w-[818px] mb-8">
                    
                    <div class="chart-content mb-8">
                            <div class=" bg-white rounded-2xl p-6">
                                    
                                <div class="mb-6 flex items-start lg:items-end justify-between">
                                    <div class="text-black text-2xl font-semibold flex flex-col lg:flex-row gap-2">
                                        <div class=" flex gap-2 items-start lg:items-center"><img src="@/assets/img/flag/usa.png" alt="" class="h-8 w-8"> EUR/USD 
                                        </div>
                                        <div class="flex flex-col items-start lg:flex-row lg:items-center gap-2">
                                            <span class="">1.500</span> <span class="flex gap-2 items-center font-normal">0.91 (USD/EUR)<span class=" text-base font-normal">=3.25 %</span> </span> 
                                        </div>
                                    </div>
                                    <div class="no-label w-[78px] block lg:hidden mb-3">
                                        <div class="select">
                                            <div class="selectBtn" data-type="firstOption" >Day </div>
                                            <div class="selectDropdown">
                                                <div class="option" data-value="all" data-type="firstOption">
                                                    1D</div>
                                                <div class="option" data-type="secondOption" data-value="internet-tv">
                                                    7D
                                                </div>
                                                <div class="option" data-type="secondOption" data-value="internet-tv">
                                                    30D
                                                </div>
                                                <div class="option" data-type="secondOption" data-value="internet-tv">
                                                    YTD
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-center hidden lg:flex items-start md:items-center justify-center mt-4">
                                        <a
                                            href=""
                                            class="font-normal font-sm  py-0.5 px-4 bg-[#F3F6FD] border border-[#0051FF] rounded-[5px] ml-3">1d</a><a
                                            href=""
                                            class="font-normal font-sm py-0.5 px-4 bg-[#F3F6FD] border border-[#F3F6FD] rounded-[5px] hover:border-[#0051FF] transition mx-1">7D</a>
                                        <a href=""
                                            class="font-normal font-sm py-0.5 px-4 bg-[#F3F6FD] border border-[#F3F6FD] rounded-[5px] hover:border-[#0051FF] transition mx-1">30D</a>
                                        <a href=""
                                            class="font-normal font-sm py-0.5 px-4 bg-[#F3F6FD] border border-[#F3F6FD] rounded-[5px] hover:border-[#0051FF] transition">YTD</a>
                                    </div>
                                </div>
                                <div class="calculator-wrapper flex  justify-center mb-4">
                            <div class="inner-ca w-full bg-white block mx-auto justify-center">
                                <div class="mb-3 exchange-mb">                                
                                    <div class="flex flex-col  md:flex-row">
                                        <div class="w-full md:w-1/2">
                                            <label for="weight"
                                        class="block mb-1 text-sm font-bold text-black">Euros</label>
                                            <div class="flex">
                                                <input type="text" id="weight"
                                                    class="rounded-none rounded-l-md bg-white border border-r-0 border-[#D5DBE8] text-black font-normal text-xs focus:ring-[#3b82f6] focus:outline-none focus:border-[#3b82f6] block flex-1 min-w-0 w-full p-2.5"
                                                    placeholder="€ 100">
                                                <span
                                                    class="inline-flex items-center bg-white text-black font-normal text-xs focus:ring-[#3b82f6] border-[#D5DBE8] border rounded-r-md"> 
                                                    <div class="">
                                                <div class="no-label w-[85px]">
                                                    <div class="select">
                                                        <div class="selectBtn" data-type="firstOption" style="background-image: url(/_nuxt/assets/img/logos/eur.png);" >EUR </div>
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
                                        <div class="w-full md:w-1/2">
                                            <label for="weight"
                                        class="block mb-1 text-sm font-bold text-black">US Dollar</label>
                                        
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
                    <button type="button" class="bg-cblue lg:hidden text-center items-center justify-center w-full flex text-white text-base font-bold py-2 px-2 rounded-md" >Buy Now</button> 
                                <div class="chart">
                                    <canvas id="priceChart1" width="400" height="400"></canvas>
                                </div>
                            </div>
                        </div>
                        <h2 class="text-black text-2xl md:text-[32px] font-semibold mb-4">Exchange Rate Foreign Currency</h2>
                    <div class="tab-wrapper mb-8 rounded-t-[10px]">
                        
                        <div class="product-table-wrapper">
                            <table class="w-full">
                                <thead class="table-head">
                                    <tr class="text-sm text-left text-black font-semibold p-4">
                                        <th class="p-4">#</th>
                                        <th>Currency</th>                    
                                        <th class="">Price Chart</th>
                                        <th class="table-cell md:hidden">Units</th>
                                        <th class="md:table-cell hidden">1 € = UNITS </th>
                                        <th class="md:table-cell hidden">%</th>
                                        <th class="md:table-cell hidden">1 UNIT = €</th>
                                    </tr>
                                </thead>
                                <tbody class="table-body">
                                    <tr class="single-row-item text-left p-4 w-full">
                                        <td class="text-black text-sm font-medium p-4">1</td>
                                        <td class="text-black text-sm font-medium">
                                            <span class="flex item items-center gap-1.5"> 
                                                <span class=" w-6 h-6 rounded-full overflow-hidden">
                                                    <img src="@/assets/img/flag/usa.png" class="mr-2 object-cover w-full h-full" alt="">
                                                </span> 
                                                <span class="flex flex-col">
                                                    <span class="flex md:hidden">EUR/USD</span>
                                                    <span class="text-[#989CAA] text-[10px] font-normal md:text-black md:text-sm md:font-medium">American Dollar</span>
                                                </span>
                                            </span>
                                        </td>
                                        <td class="save-info-tag  md:table-cell">
                                            <div class="cu-chart">
                                            <div ref="btc" class="">
                                                <canvas id="stockChart1" width="400" height="400"></canvas>
                                            </div>
                                        </div>
                                        </td>
                                        
                                        <td class=" table-cell md:hidden">
                                            <div class="flex flex-col">
                                                <div class="text-black text-sm font-normal flex items-center ga-1">1.2217 <div class="flex items-center text-[10px] font-normal" ><span class="text-[#23A638] mr-3">+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638" ></path></svg></div>
                                                </div>
                                            </div>
                                            <div class="text-[10px] text-[#989CAA]">0.9790 USD/EUR</div>
                                        </td>
                                        <td class="text-black text-sm font-normal hidden md:table-cell">1.2217</td>
                                        <td class=" hidden md:table-cell">
                                            <div class="flex items-center text-sm font-normal" ><span class="text-[#23A638] mr-3" >+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638"></path></svg></div>
                                        </td>
                                        <td class="text-black text-sm font-normal hidden md:table-cell">
                                            0.9790
                                        </td>
                                    </tr>
                                    <tr class="single-row-item text-left p-4 w-full">
                                        <td class="text-black text-sm font-medium p-4">2</td>
                                        <td class="text-black text-sm font-medium">
                                            <span class="flex item items-center gap-1.5"> 
                                                <span class=" w-6 h-6 rounded-full overflow-hidden">
                                                    <img src="@/assets/img/flag/aus.png" class="mr-2 object-cover w-full h-full" alt="">
                                                </span> 
                                                <span class="flex flex-col">
                                                    <span class="flex md:hidden">EUR/USD</span>
                                                    <span class="text-[#989CAA] text-[10px] font-normal md:text-black md:text-sm md:font-medium">Australis Dollar</span>
                                                </span>
                                            </span>
                                        </td>
                                        
                                        <td class="save-info-tag  md:table-cell">
                                            <div class="cu-chart">
                                            <div ref="btc" class="">
                                                <canvas id="stockChart1" width="400" height="400"></canvas>
                                            </div>
                                        </div>
                                        </td>
                                        <td class=" table-cell md:hidden">
                                            <div class="flex flex-col">
                                                <div class="text-black text-sm font-normal flex items-center gap-2">1.2217 <div class="flex items-center text-[10px] font-normal" ><span class="text-[#E71212] mr-3" >-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212" ></path></svg></div></div>
                                            </div>
                                            <div class="text-[10px] text-[#989CAA]">0.9790 USD/EUR</div>
                                        </td>
                                        <td class="text-black text-sm font-normal hidden md:table-cell">1.1215</td>
                                    
                                        <td class=" hidden md:table-cell">
                                            <div class="flex items-center text-sm font-normal" ><span class="text-[#E71212] mr-3" >-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212" ></path></svg></div>
                                        </td>
                                        <td class="text-black text-sm font-normal hidden md:table-cell">
                                            0.5560
                                        </td>
                                    </tr>
                                    <tr class="single-row-item text-left p-4 w-full">
                                        <td class="text-black text-sm font-medium p-4">3</td>
                                        <td class="text-black text-sm font-medium">
                                            <span class="flex item items-center gap-1.5"> 
                                                <span class=" w-6 h-6 rounded-full overflow-hidden">
                                                    <img src="@/assets/img/flag/uk.png" class="mr-2 object-cover w-full h-full" alt="">
                                                </span> 
                                                <span class="flex flex-col">
                                                    <span class="flex md:hidden">EUR/GBP</span>
                                                    <span class="text-[#989CAA] text-[10px] font-normal md:text-black md:text-sm md:font-medium">Britise Pond</span>
                                                </span>
                                            </span>
                                        </td>
                                       
                                        <td class="save-info-tag  md:table-cell">
                                            <div class="cu-chart">
                                            <div ref="btc" class="">
                                                <canvas id="stockChart1" width="400" height="400"></canvas>
                                            </div>
                                        </div>
                                        </td>
                                        <td class=" table-cell md:hidden">
                                            <div class="flex flex-col">
                                                <div class="text-black text-sm font-normal flex items-center ga-1">1.2217 <div class="flex items-center text-[10px] font-normal" ><span class="text-[#23A638] mr-3">+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638" ></path></svg></div>
                                                </div>
                                            </div>
                                            <div class="text-[10px] text-[#989CAA]">0.9790 USD/EUR</div>
                                        </td>
                                        <td class="text-black text-sm font-normal hidden md:table-cell">1.2217</td>
                                        <td class=" hidden md:table-cell">
                                            <div class="flex items-center text-sm font-normal" ><span class="text-[#23A638] mr-3">+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638" ></path></svg></div>
                                        </td>
                                        <td class="text-black text-sm font-normal hidden md:table-cell">
                                            0.9790
                                        </td>
                                    </tr>
                                    <tr class="single-row-item text-left p-4 w-full">
                                        <td class="text-black text-sm font-medium p-4">4</td>
                                        <td class="text-black text-sm font-medium">
                                            <span class="flex item items-center gap-1.5"> 
                                                <span class=" w-6 h-6 rounded-full overflow-hidden">
                                                    <img src="@/assets/img/flag/china.png" class="mr-2 object-cover w-full h-full" alt="">
                                                </span> 
                                                <span class="flex flex-col">
                                                    <span class="flex md:hidden">EUR/CNY</span>
                                                    <span class="text-[#989CAA] text-[10px] font-normal md:text-black md:text-sm md:font-medium">Chinese Yuan</span>
                                                </span>
                                            </span>
                                        </td>
                                        
                                        <td class="save-info-tag  md:table-cell">
                                            <div class="cu-chart">
                                            <div ref="btc" class="">
                                                <canvas id="stockChart1" width="400" height="400"></canvas>
                                            </div>
                                        </div>
                                        </td>
                                        <td class=" table-cell md:hidden">
                                            <div class="flex flex-col">
                                                <div class="text-black text-sm font-normal flex items-center ga-1">1.2217 <div class="flex items-center text-[10px] font-normal" ><span class="text-[#23A638] mr-3">+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638" ></path></svg></div>
                                                </div>
                                            </div>
                                            <div class="text-[10px] text-[#989CAA]">0.9790 USD/EUR</div>
                                        </td>
                                        <td class="text-black text-sm font-normal hidden md:table-cell">1.2217</td>
                                        <td class=" hidden md:table-cell">
                                            <div class="flex items-center text-sm font-normal" ><span class="text-[#23A638] mr-3" >+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638" ></path></svg></div>
                                        </td>
                                        <td class="text-black text-sm font-normal hidden md:table-cell">
                                            0.9790
                                        </td>
                                    </tr>
                                    <tr class="single-row-item text-left p-4 w-full">
                                        <td class="text-black text-sm font-medium p-4">5</td>
                                        <td class="text-black text-sm font-medium">
                                            <span class="flex item items-center gap-1.5"> 
                                                <span class=" w-6 h-6 rounded-full overflow-hidden">
                                                    <img src="@/assets/img/flag/austr.png" class="mr-2 object-cover w-full h-full" alt="">
                                                </span> 
                                                <span class="flex flex-col">
                                                    <span class="flex md:hidden">EUR/USD</span>
                                                    <span class="text-[#989CAA] text-[10px] font-normal md:text-black md:text-sm md:font-medium">Austria Dollar</span>
                                                </span>
                                            </span>
                                        </td>
                                        <td class="save-info-tag  md:table-cell">
                                            <div class="cu-chart">
                                            <div ref="btc" class="">
                                                <canvas id="stockChart1" width="400" height="400"></canvas>
                                            </div>
                                        </div>
                                        </td>
                                        <td class=" table-cell md:hidden">
                                            <div class="flex flex-col">
                                                <div class="text-black text-sm font-normal flex items-center ga-1">1.2217 <div class="flex items-center text-[10px] font-normal" ><span class="text-[#23A638] mr-3">+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638" ></path></svg></div>
                                                </div>
                                            </div>
                                            <div class="text-[10px] text-[#989CAA]">0.9790 USD/EUR</div>
                                        </td>
                                        <td class="text-black text-sm font-normal hidden md:table-cell">1.2217</td>
                                        <td class=" hidden md:table-cell">
                                            <div class="flex items-center text-sm font-normal" ><span class="text-[#23A638] mr-3" >+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638" ></path></svg></div>
                                        </td>
                                        <td class="text-black text-sm font-normal hidden md:table-cell">
                                            0.9790
                                        </td>
                                    </tr>
                                    <tr class="single-row-item text-left p-4 w-full">
                                        <td class="text-black text-sm font-medium p-4">6</td>
                                        <td class="text-black text-sm font-medium">
                                            <span class="flex item items-center gap-1.5"> 
                                                <span class=" w-6 h-6 rounded-full overflow-hidden">
                                                    <img src="@/assets/img/flag/usa.png" class="mr-2 object-cover w-full h-full" alt="">
                                                </span> 
                                                <span class="flex flex-col">
                                                    <span class="flex md:hidden">EUR/USD</span>
                                                    <span class="text-[#989CAA] text-[10px] font-normal md:text-black md:text-sm md:font-medium">American Dollar</span>
                                                </span>
                                            </span>
                                        </td>
                                        <td class="save-info-tag  md:table-cell">
                                            <div class="cu-chart">
                                            <div ref="btc" class="">
                                                <canvas id="stockChart1" width="400" height="400"></canvas>
                                            </div>
                                        </div>
                                        </td> 
                                        <td class=" table-cell md:hidden">
                                            <div class="flex flex-col">
                                                <div class="text-black text-sm font-normal flex items-center ga-1">1.2217 <div class="flex items-center text-[10px] font-normal" ><span class="text-[#23A638] mr-3">+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638" ></path></svg></div>
                                                </div>
                                            </div>
                                            <div class="text-[10px] text-[#989CAA]">0.9790 USD/EUR</div>
                                        </td>
                                        <td class="text-black text-sm font-normal hidden md:table-cell">1.2217</td>
                                        <td class=" hidden md:table-cell">
                                            <div class="flex items-center text-sm font-normal" ><span class="text-[#23A638] mr-3" >+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638" ></path></svg></div>
                                        </td>
                                        <td class="text-black text-sm font-normal hidden md:table-cell">
                                            0.9790
                                        </td>
                                    </tr>
                                    <tr class="single-row-item text-left p-4 w-full">
                                        <td class="text-black text-sm font-medium p-4">1</td>
                                        <td class="text-black text-sm font-medium">
                                            <span class="flex item items-center gap-1.5"> 
                                                <span class=" w-6 h-6 rounded-full overflow-hidden">
                                                    <img src="@/assets/img/flag/usa.png" class="mr-2 object-cover w-full h-full" alt="">
                                                </span> 
                                                <span class="flex flex-col">
                                                    <span class="flex md:hidden">EUR/USD</span>
                                                    <span class="text-[#989CAA] text-[10px] font-normal md:text-black md:text-sm md:font-medium">American Dollar</span>
                                                </span>
                                            </span>
                                        </td>
                                        <td class="save-info-tag  md:table-cell">
                                            <div class="cu-chart">
                                            <div ref="btc" class="">
                                                <canvas id="stockChart1" width="400" height="400"></canvas>
                                            </div>
                                        </div>
                                        </td>
                                        <td class=" table-cell md:hidden">
                                            <div class="flex flex-col">
                                                <div class="text-black text-sm font-normal flex items-center ga-1">1.2217 <div class="flex items-center text-[10px] font-normal" ><span class="text-[#23A638] mr-3">+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638" ></path></svg></div>
                                                </div>
                                            </div>
                                            <div class="text-[10px] text-[#989CAA]">0.9790 USD/EUR</div>
                                        </td>
                                        <td class="text-black text-sm font-normal hidden md:table-cell">1.2217</td>
                                        <td class=" hidden md:table-cell">
                                            <div class="flex items-center text-sm font-normal" ><span class="text-[#23A638] mr-3" >+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638" ></path></svg></div>
                                        </td>
                                        <td class="text-black text-sm font-normal hidden md:table-cell">
                                            0.9790
                                        </td>
                                    </tr>
                                    <tr class="single-row-item text-left p-4 w-full">
                                        <td class="text-black text-sm font-medium p-4">1</td>
                                        <td class="text-black text-sm font-medium">
                                            <span class="flex item items-center gap-1.5"> 
                                                <span class=" w-6 h-6 rounded-full overflow-hidden">
                                                    <img src="@/assets/img/flag/usa.png" class="mr-2 object-cover w-full h-full" alt="">
                                                </span> 
                                                <span class="flex flex-col">
                                                    <span class="flex md:hidden">EUR/USD</span>
                                                    <span class="text-[#989CAA] text-[10px] font-normal md:text-black md:text-sm md:font-medium">American Dollar</span>
                                                </span>
                                            </span>
                                        </td>
                                        <td class="save-info-tag  md:table-cell">
                                            <div class="cu-chart">
                                            <div ref="btc" class="">
                                                <canvas id="stockChart1" width="400" height="400"></canvas>
                                            </div>
                                        </div>
                                        </td>
                                        <td class=" table-cell md:hidden">
                                            <div class="flex flex-col">
                                                <div class="text-black text-sm font-normal flex items-center ga-1">1.2217 <div class="flex items-center text-[10px] font-normal" ><span class="text-[#23A638] mr-3">+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638" ></path></svg></div>
                                                </div>
                                            </div>
                                            <div class="text-[10px] text-[#989CAA]">0.9790 USD/EUR</div>
                                        </td>
                                        <td class="text-black text-sm font-normal hidden md:table-cell">1.2217</td>
                                        <td class=" hidden md:table-cell">
                                            <div class="flex items-center text-sm font-normal" ><span class="text-[#23A638] mr-3" >+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638" ></path></svg></div>
                                        </td>
                                        <td class="text-black text-sm font-normal hidden md:table-cell">
                                            0.9790
                                        </td>
                                    </tr>
                            </tbody>
                        </table>
                                        </div>
                                    
                                    <div class="flex items-center justify-center -mt-10 z-20 relative">
                                        <a href="" class="bg-primary text-white font-bold text-base transition opacity-100 hover:opacity-90 py-2 px-6 rounded-md mb-7">View More</a>
                                    </div>
                    </div>
                      
                    <div class="block lg:hidden">
                        <div class="bg-white rounded-2xl p-5 mb-6">
                        <h3 class=" text-[20px] font-normal text-black mb-3">Top 5 Savings</h3>
                        <div class="grid grid-cols-1 gap-3 top-f">
                <a href="" class="border border-[#CBD7F1] rounded-[10px] overflow-hidden t-item">
                    <div class="inline-flex items-center px-5 py-3">
                        <div class="text-center mx-auto h-8 w-8 rounded-full overflow-hidden mr-3">
                            <img src="@/assets/img/exchange/BigBank.jpg" class="w-full h-auto  " alt="">
                        </div>
                        <ul>
                            <li class="text-black text-base font-normal">BigBank</li>
                            <li class="flex items-center text-[#15952A] text-sm">
                                2.20%
                            </li>
                        </ul>
                    </div>
                </a>
                <a href="" class="border border-[#CBD7F1] rounded-[10px] overflow-hidden t-item">
                    <div class="inline-flex items-center px-5 py-3">
                        <div class="text-center mx-auto h-8 w-8 rounded-full overflow-hidden mr-3">
                            <img src="@/assets/img/exchange/Anadolubank.jpg" class="w-full h-auto  " alt="">
                        </div>
                        <ul>
                            <li class="text-black text-base font-normal">Anadolubank</li>
                            <li class="flex items-center text-[#15952A] text-sm">
                                5.52%
                            </li>
                        </ul>
                    </div>
                </a>
                <a href="" class="border border-[#CBD7F1] rounded-[10px] overflow-hidden t-item">
                    <div class="inline-flex items-center px-5 py-3">
                        <div class="text-center mx-auto h-8 w-8 rounded-full overflow-hidden mr-3">
                            <img src="@/assets/img/exchange/CentraalBeheer.jpg" class="w-full h-auto  " alt="">
                        </div>
                        <ul>
                            <li class="text-black text-base font-normal">Centraal Beheer</li>
                            <li class="flex items-center text-[#15952A] text-sm">
                                1.25%
                            </li>
                        </ul>
                    </div>
                </a>
                <a href="" class="border border-[#CBD7F1] rounded-[10px] overflow-hidden t-item">
                    <div class="inline-flex items-center px-5 py-3">
                        <div class="text-center mx-auto h-8 w-8 rounded-full overflow-hidden mr-3">
                            <img src="@/assets/img/exchange/LloydsBank.jpg" class="w-full h-auto  " alt="">
                        </div>
                        <ul>
                            <li class="text-black text-base font-normal">Lloyds Bank</li>
                            <li class="flex items-center text-[#15952A] text-sm">
                                7.52%
                            </li>
                        </ul>
                    </div>
                </a>
                <a href="" class="border border-[#CBD7F1] rounded-[10px] overflow-hidden t-item">
                    <div class="inline-flex items-center px-5 py-3">
                        <div class="text-center mx-auto h-8 w-8 rounded-full overflow-hidden mr-3">
                            <img src="@/assets/img/exchange/LeasePlanBank.jpg" class="w-full h-auto  " alt="">
                        </div>
                        <ul>
                            <li class="text-black text-base font-normal">LeasePlan Bank</li>
                            <li class="flex items-center text-[#15952A] text-sm">
                                2.50%
                            </li>
                        </ul>
                    </div>
                </a>
            </div>
            <div class="button-area  text-center mt-6">
            <a href="" class="text-cblue font-semibold text-base opacity-100 transition hover:opacity-90">All interest rates</a></div>

                        </div>
                        <div class="bg-white rounded-2xl p-5 mb-6">
                        <h3 class=" text-[20px] font-normal text-black mb-3">Popular on Koersen.net</h3>
                        <div class="ex-info-inner w-full flex items-start">
                            <div class=" flex flex-wrap gap-[10px]">
                                <a href="" class="bg-white rounded-md text-sm font-normal text-cblue border border-cblue transition hover:bg-cblue hover:text-white px-3 py-2 uppercase">Dollar euro</a>
                                <a href="" class="bg-white rounded-md text-sm font-normal text-cblue border border-cblue transition hover:bg-cblue hover:text-white px-3 py-2 uppercase">Money rates</a>
                                <a href="" class="bg-white rounded-md text-sm font-normal text-cblue border border-cblue transition hover:bg-cblue hover:text-white px-3 py-2 uppercase">Currency conversion</a>
                                <a href="" class="bg-white rounded-md text-sm font-normal text-cblue border border-cblue transition hover:bg-cblue hover:text-white px-3 py-2 uppercase">Danish crown</a>
                                <a href="" class="bg-white rounded-md text-sm font-normal text-cblue border border-cblue transition hover:bg-cblue hover:text-white px-3 py-2 uppercase">pound euro</a>
                                <a href="" class="bg-white rounded-md text-sm font-normal text-cblue border border-cblue transition hover:bg-cblue hover:text-white px-3 py-2 uppercase">exchange rate dollar euro</a>
                                <a href="" class="bg-white rounded-md text-sm font-normal text-cblue border border-cblue transition hover:bg-cblue hover:text-white px-3 py-2 uppercase">euro dollar</a>
                                <a href="" class="bg-white rounded-md text-sm font-normal text-cblue border border-cblue transition hover:bg-cblue hover:text-white px-3 py-2 uppercase">bitcoin rate</a>
                                <a href="" class="bg-white rounded-md text-sm font-normal text-cblue border border-cblue transition hover:bg-cblue hover:text-white px-3 py-2 uppercase">dollar course</a>
                                <a href="" class="bg-white rounded-md text-sm font-normal text-cblue border border-cblue transition hover:bg-cblue hover:text-white px-3 py-2 uppercase">eth price</a>
                                <a href="" class="bg-white rounded-md text-sm font-normal text-cblue border border-cblue transition hover:bg-cblue hover:text-white px-3 py-2 uppercase">currency calculator</a>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white rounded-2xl p-5 mb-6">                       
                        <h3 class=" text-base font-bold text-black mb-1">Tip! Trading in Currency</h3>
                        <p class=" text-sm font-normal text-dgray mb-1">If you want to trade in currencies, you need background information. Then check:</p>
                        <ul class=" text-cblue font-normal text-sm list-disc list-inside space-y-1">
                              
                            <li class=""> <a href="" class="underline ">IEX.nl</a></li>
                            <li class=""> <a href="" class="underline ">Beursgorilla.nl</a></li>
                            <li class=""> <a href="" class="underline ">Beleggen.nl</a></li>

                        </ul>
                        
                    </div>
                    </div>
                    
                    <h3 class="text-black text-2xl md:text-[32px] font-semibold mb-4">Dollar Course</h3>
                    <div class="content-text">
                        <div class="bg-white p-6 rounded-[10px] mb-8">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="border-b border-lgray flex items-center justify-between pb-4">
                                        <span class=" text-base font-bold text-black">Last rate</span>
                                    <span class=" text-base font-normal text-black">1.0974</span>
                                    
                                    
                                </div>
                                <div class="border-b border-lgray flex items-center justify-between pb-4">
                                        <span class=" text-base font-bold text-black">Last rate</span>
                                    <span class=" text-base font-normal text-black">1.0974</span>
                                    
                                    
                                </div>
                                <div class="border-b border-lgray flex items-center justify-between pb-4">
                                        <span class=" text-base font-bold text-black">Difference</span>
                                    <span class=" text-base font-normal text-black">0.0000</span>
                                    
                                    
                                </div>
                                <div class="border-b border-lgray flex items-center justify-between pb-4">
                                        <span class=" text-base font-bold text-black">Difference %</span>
                                    <span class=" text-base font-normal text-black">0.00%</span>
                                    
                                    
                                </div>
                            </div>
                        </div>
                        <div class="bg-[#FFF8EA] w-full h-[180px] lg:h-[596px] p-5 mb-6 rounded-2xl flex  lg:hidden justify-center items-center">
                        <div class="text-4xl text-black font-bold">
                            ADS
                        </div>
                    </div>
                        <div class=" flex item-center">
                        
                    <div class="flex flex-col md:flex-row gap-3 items-center">
                        <h3 class="text-black text-2xl md:text-[32px] font-semibold mb-4">Exchange Dollar History</h3>
                        <div class=" font-normal text-sm text-black flex items-center gap-2 mb-4">
                            <span class="">Period</span>  <Datepicker v-model="date" /> <Datepicker v-model="date" /> <button type="button" class="text-sm font-normal text-white py-1.5 px-3 bg-cblue rounded-md opacity-100 transition hover:opacity-90">Update</button>
                        </div>
                    </div>
                    </div>
                    <div class="bg-[#FFF8EA] w-full h-[180px] lg:h-[596px] p-5 mb-6 rounded-2xl flex  lg:hidden justify-center items-center">
                        <div class="text-4xl text-black font-bold">
                            ADS
                        </div>
                    </div>
                        <div class="bg-white p-6 rounded-[10px] mb-8">
                            <div class="table-area">
                            <table class="table-auto w-full order-collapse">
  <thead>
    <tr class="text-sm font-bold text-left border-b border-lgray">
      <th class=" py-3.5">Date</th>
      <th>1 € = UNITS</th>
    </tr>
  </thead>
  <tbody>
    <tr class="text-base font-normal border-b border-lgray">
      <td class=" py-4">12-07-2023</td>
      <td>1.0974</td>
    </tr>
    <tr class="text-base font-normal border-b border-lgray">
      <td class=" py-4">12-07-2023</td>
      <td>1.0974</td>
    </tr>
    <tr class="text-base font-normal border-b border-lgray">
      <td class=" py-4">12-07-2023</td>
      <td>1.0974</td>
    </tr>
  </tbody>
</table>
</div>
                        </div>
                        <div class="bg-[#FFF8EA] w-full h-[180px] lg:h-[596px] p-5 mb-6 rounded-2xl flex  lg:hidden justify-center items-center">
                        <div class="text-4xl text-black font-bold">
                            ADS
                        </div>
                    </div>

                        <div class="bg-white p-6 rounded-[10px] mb-8">
                            <h4 class="text-xl font-bold text-black mb-3">Exchange dollar euro</h4>
                            <p class="text-base font-normal">The euro dollar exchange rate is very important in international trade. The dollar exchange rate is of great importance, because all oil prices and gold prices are linked to the US dollar. The euro dollar rate is shown as EUR/USD and the usd euro rate is shown as USD/EUR.As a consumer, you can take advantage of a low dollar exchange rate. Via online auction sites such as eBay, you can then buy expensive products in the US for less than you would normally pay. This is due to the low dollar exchange rate. So make smart use of the low exchange rate dollar euro. When the dollar is high against the euro, it is unfavorable to purchase American products. The products have literally become more expensive in euros. It therefore pays to keep an eye on the dollar and euro exchange rate when making large purchases via the internet from the United States. If the dollar or euro exchange rate is negative, postpone your purchase for a while.</p>
                        </div>
                        <div class="bg-[#FFF8EA] w-full h-[180px] lg:h-[596px] p-5 mb-6 rounded-2xl flex lg:hidden justify-center items-center">
                        <div class="text-4xl text-black font-bold">
                            ADS
                        </div>
                    </div>
                    </div>
                   

                    
 
                </div>
                <div class="w-full lg:w-[298px]">
                    <div class="sidebar-wrapper hidden md:block w-full">
                         
                        <div class="bg-white rounded-2xl p-5 mb-6">
                        <h3 class=" text-[20px] font-normal text-black mb-3">Top 5 Savings</h3>
                        <div class="grid grid-cols-1 gap-3 top-f">
                <a href="" class="border border-[#CBD7F1] rounded-[10px] overflow-hidden t-item">
                    <div class="inline-flex items-center px-5 py-3">
                        <div class="text-center mx-auto h-8 w-8 rounded-full overflow-hidden mr-3">
                            <img src="@/assets/img/exchange/BigBank.jpg" class="w-full h-auto  " alt="">
                        </div>
                        <ul>
                            <li class="text-black text-base font-normal">BigBank</li>
                            <li class="flex items-center text-[#15952A] text-sm">
                                2.20%
                            </li>
                        </ul>
                    </div>
                </a>
                <a href="" class="border border-[#CBD7F1] rounded-[10px] overflow-hidden t-item">
                    <div class="inline-flex items-center px-5 py-3">
                        <div class="text-center mx-auto h-8 w-8 rounded-full overflow-hidden mr-3">
                            <img src="@/assets/img/exchange/Anadolubank.jpg" class="w-full h-auto  " alt="">
                        </div>
                        <ul>
                            <li class="text-black text-base font-normal">Anadolubank</li>
                            <li class="flex items-center text-[#15952A] text-sm">
                                5.52%
                            </li>
                        </ul>
                    </div>
                </a>
                <a href="" class="border border-[#CBD7F1] rounded-[10px] overflow-hidden t-item">
                    <div class="inline-flex items-center px-5 py-3">
                        <div class="text-center mx-auto h-8 w-8 rounded-full overflow-hidden mr-3">
                            <img src="@/assets/img/exchange/CentraalBeheer.jpg" class="w-full h-auto  " alt="">
                        </div>
                        <ul>
                            <li class="text-black text-base font-normal">Centraal Beheer</li>
                            <li class="flex items-center text-[#15952A] text-sm">
                                1.25%
                            </li>
                        </ul>
                    </div>
                </a>
                <a href="" class="border border-[#CBD7F1] rounded-[10px] overflow-hidden t-item">
                    <div class="inline-flex items-center px-5 py-3">
                        <div class="text-center mx-auto h-8 w-8 rounded-full overflow-hidden mr-3">
                            <img src="@/assets/img/exchange/LloydsBank.jpg" class="w-full h-auto  " alt="">
                        </div>
                        <ul>
                            <li class="text-black text-base font-normal">Lloyds Bank</li>
                            <li class="flex items-center text-[#15952A] text-sm">
                                7.52%
                            </li>
                        </ul>
                    </div>
                </a>
                <a href="" class="border border-[#CBD7F1] rounded-[10px] overflow-hidden t-item">
                    <div class="inline-flex items-center px-5 py-3">
                        <div class="text-center mx-auto h-8 w-8 rounded-full overflow-hidden mr-3">
                            <img src="@/assets/img/exchange/LeasePlanBank.jpg" class="w-full h-auto  " alt="">
                        </div>
                        <ul>
                            <li class="text-black text-base font-normal">LeasePlan Bank</li>
                            <li class="flex items-center text-[#15952A] text-sm">
                                2.50%
                            </li>
                        </ul>
                    </div>
                </a>
            </div>
            <div class="button-area  text-center mt-6">
            <a href="" class="text-cblue font-semibold text-base opacity-100 transition hover:opacity-90">All interest rates</a></div>

                        </div>
                        <div class="bg-white rounded-2xl p-5 mb-6">
                        <h3 class=" text-[20px] font-normal text-black mb-3">Popular on Koersen.net</h3>
                        <div class="ex-info-inner w-full flex items-start">
                            <div class=" flex flex-wrap gap-[10px]">
                                <a href="" class="bg-white rounded-md text-sm font-normal text-cblue border border-cblue transition hover:bg-cblue hover:text-white px-3 py-2 uppercase">Dollar euro</a>
                                <a href="" class="bg-white rounded-md text-sm font-normal text-cblue border border-cblue transition hover:bg-cblue hover:text-white px-3 py-2 uppercase">Money rates</a>
                                <a href="" class="bg-white rounded-md text-sm font-normal text-cblue border border-cblue transition hover:bg-cblue hover:text-white px-3 py-2 uppercase">Currency conversion</a>
                                <a href="" class="bg-white rounded-md text-sm font-normal text-cblue border border-cblue transition hover:bg-cblue hover:text-white px-3 py-2 uppercase">Danish crown</a>
                                <a href="" class="bg-white rounded-md text-sm font-normal text-cblue border border-cblue transition hover:bg-cblue hover:text-white px-3 py-2 uppercase">pound euro</a>
                                <a href="" class="bg-white rounded-md text-sm font-normal text-cblue border border-cblue transition hover:bg-cblue hover:text-white px-3 py-2 uppercase">exchange rate dollar euro</a>
                                <a href="" class="bg-white rounded-md text-sm font-normal text-cblue border border-cblue transition hover:bg-cblue hover:text-white px-3 py-2 uppercase">euro dollar</a>
                                <a href="" class="bg-white rounded-md text-sm font-normal text-cblue border border-cblue transition hover:bg-cblue hover:text-white px-3 py-2 uppercase">bitcoin rate</a>
                                <a href="" class="bg-white rounded-md text-sm font-normal text-cblue border border-cblue transition hover:bg-cblue hover:text-white px-3 py-2 uppercase">dollar course</a>
                                <a href="" class="bg-white rounded-md text-sm font-normal text-cblue border border-cblue transition hover:bg-cblue hover:text-white px-3 py-2 uppercase">eth price</a>
                                <a href="" class="bg-white rounded-md text-sm font-normal text-cblue border border-cblue transition hover:bg-cblue hover:text-white px-3 py-2 uppercase">currency calculator</a>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white rounded-2xl p-5 mb-6">                       
                        <h3 class=" text-base font-bold text-black mb-1">Tip! Trading in Currency</h3>
                        <p class=" text-sm font-normal text-dgray mb-1">If you want to trade in currencies, you need background information. Then check:</p>
                        <ul class=" text-cblue font-normal text-sm list-disc list-inside space-y-1">
                              
                            <li class=""> <a href="" class="underline ">IEX.nl</a></li>
                            <li class=""> <a href="" class="underline ">Beursgorilla.nl</a></li>
                            <li class=""> <a href="" class="underline ">Beleggen.nl</a></li>

                        </ul>
                        
                    </div>
                    <div class="bg-[#FFF8EA] w-full h-[180px] lg:h-[596px] p-5 mb-6 rounded-2xl flex justify-center items-center">
                        <div class="text-4xl text-black font-bold">
                            ADS
                        </div>
                    </div> 
                    <div class="bg-[#FFF8EA] w-full h-[180px] lg:h-[596px] p-5 mb-6 rounded-2xl flex justify-center items-center">
                        <div class="text-4xl text-black font-bold">
                            ADS
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>