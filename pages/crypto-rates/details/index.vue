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


<style scoped>
.cu-chart canvas {
    max-height: 60px;
    max-width: 170px;
}
</style>
<template>

<section class="w-full bg-lblue p-10 md:p-12 md:pt-16">
    <div class="container mx-auto max-w-screen-xl">  <!-- container start -->    
        <div class="detail-content flex flex-col lg:flex-row items-start justify-between gap-6">
            
                <div class="w-full lg:w-[818px] mb-8">
                    
                    <div class="chart-content mb-8">
                            <div class=" bg-white rounded-2xl p-6">
                                <div class="mb-6 flex items-end justify-between">
                                    <div class="">
                                        <div class="text-black text-2xl font-semibold flex gap-2 items-center"><img src="@/assets/img/flag/usa.png" alt="" class="h-8 w-8"> EUR/USD <span class="">1.500</span> <span class=" font-normal">0.91 (USD/EUR)</span> <span class=" text-base font-normal">=3.25 %</span>
                                        </div>
                                    </div>
                                    <div class="text-center hidden md:flex items-center justify-center mt-4"><a
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
                                <div class="chart">
                                    <canvas id="priceChart1" width="400" height="400"></canvas>
                                </div>
                            </div>
                        </div>


                        
                    <h2 class="text-black text-2xl md:text-[32px] font-semibold mb-4">Price Bitcoin</h2>
                    <div class="content-text">
                        <div class="bg-white p-6 rounded-[10px] mb-8">
                            <div class="grid grid-cols-2 gap-4">
                                <div class="border-b border-lgray flex items-center justify-between pb-4">
                                        <span class=" text-base font-bold text-black">Latest rate (USD)</span>
                                    <span class=" text-base font-normal text-black">$30,448.7374</span>
                                    
                                    
                                </div>
                                <div class="border-b border-lgray flex items-center justify-between pb-4">
                                        <span class=" text-base font-bold text-black">Last listing</span>
                                    <span class=" text-base font-normal text-black">07:09</span>
                                    
                                    
                                </div>
                                <div class="border-b border-lgray flex items-center justify-between pb-4">
                                        <span class=" text-base font-bold text-black">High</span>
                                    <span class=" text-base font-normal text-black">$30,974.6466</span>
                                    
                                    
                                </div>
                                <div class="border-b border-lgray flex items-center justify-between pb-4">
                                        <span class=" text-base font-bold text-black">Low</span>
                                    <span class=" text-base font-normal text-black">$30,049.8279</span>
                                    
                                    
                                </div>
                                <div class="border-b border-lgray flex items-center justify-between pb-4">
                                        <span class=" text-base font-bold text-black">Difference %</span>
                                    <span class=" text-base font-normal text-[#23A638]">1.09%</span>
                                    
                                    
                                </div>
                                <div class="border-b border-lgray flex items-center justify-between pb-4">
                                        <span class=" text-base font-bold text-black">Volume</span>
                                    <span class=" text-base font-normal text-black">$14,593,988,598</span>
                                    
                                    
                                </div>
                                <div class="border-b border-lgray flex items-center justify-between pb-4">
                                        <span class=" text-base font-bold text-black">MarketCap</span>
                                    <span class=" text-base font-normal text-black">$591,505,729,786</span>
                                    
                                    
                                </div>
                                <div class="border-b border-lgray flex items-center justify-end pb-4">
                                    <button type="button" class="bg-cblue text-white text-base font-bold py-2 px-8 rounded-md" >Buy Now</button>                                   
                                    
                                </div>
                            </div>
                        </div>

    
                        <h3 class="text-black text-2xl md:text-[32px] font-semibold mb-4">Exchange Rate Foreign Currency</h3>
                    <div class="tab-wrapper mb-8 rounded-t-[10px]">
                        
                        <div class="product-table-wrapper no-overlay">
                            <table class="w-full">
                                <thead class="table-head">
                                    <tr class="text-sm text-left text-black font-semibold p-4">
                                        <th class="p-4">#</th>
                                        <th>Currency</th>                    
                                        <th class="table-cell md:hidden">Units</th>
                                        <th class="md:table-cell hidden">Price Chart</th>
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
                                        <td class=" table-cell md:hidden">
                                            <div class="flex flex-col">
                                                <div class="text-black text-sm font-normal">1.2217</div>
                                            </div>
                                            <div class="text-[10px] text-[#989CAA]">0.9790 USD/EUR</div>
                                        </td>
                                        <td class="save-info-tag hidden md:table-cell">
                                            <div class="cu-chart">
                                            <div ref="btc" class="">
                                                <canvas id="stockChart1" width="400" height="400"></canvas>
                                            </div>
                                        </div>
                                        </td>
                                        <td class="text-black text-sm font-normal hidden md:table-cell">1.2217</td>
                                        <td class=" hidden md:table-cell">
                                            <div class="flex items-center text-sm font-normal" data-v-7fd49c2f=""><span class="text-[#23A638] mr-3" data-v-7fd49c2f="">+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-7fd49c2f=""><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638" data-v-7fd49c2f=""></path></svg></div>
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
                                        
                                        <td class=" table-cell md:hidden">
                                            <div class="flex flex-col">
                                                <div class="text-black text-sm font-normal">1.2217</div>
                                            </div>
                                            <div class="text-[10px] text-[#989CAA]">0.9790 USD/EUR</div>
                                        </td>
                                        <td class="save-info-tag hidden md:table-cell">
                                            <div class="cu-chart">
                                            <div ref="btc" class="">
                                                <canvas id="stockChart1" width="400" height="400"></canvas>
                                            </div>
                                        </div>
                                        </td>
                                        <td class="text-black text-sm font-normal hidden md:table-cell">1.1215</td>
                                    
                                        <td class=" hidden md:table-cell">
                                            <div class="flex items-center text-sm font-normal" data-v-7fd49c2f=""><span class="text-[#E71212] mr-3" data-v-7fd49c2f="">-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-7fd49c2f=""><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212" data-v-7fd49c2f=""></path></svg></div>
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
                                        <td class=" table-cell md:hidden">
                                            <div class="flex flex-col">
                                                <div class="text-black text-sm font-normal">1.2217</div>
                                            </div>
                                            <div class="text-[10px] text-[#989CAA]">0.9790 USD/EUR</div>
                                        </td>
                                        <td class="save-info-tag hidden md:table-cell">
                                            <div class="cu-chart">
                                            <div ref="btc" class="">
                                                <canvas id="stockChart1" width="400" height="400"></canvas>
                                            </div>
                                        </div>
                                        </td>
                                        <td class="text-black text-sm font-normal hidden md:table-cell">1.2217</td>
                                        <td class=" hidden md:table-cell">
                                            <div class="flex items-center text-sm font-normal" data-v-7fd49c2f=""><span class="text-[#23A638] mr-3" data-v-7fd49c2f="">+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-7fd49c2f=""><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638" data-v-7fd49c2f=""></path></svg></div>
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
                                        <td class=" table-cell md:hidden">
                                            <div class="flex flex-col">
                                                <div class="text-black text-sm font-normal">1.2217</div>
                                            </div>
                                            <div class="text-[10px] text-[#989CAA]">0.9790 USD/EUR</div>
                                        </td>
                                        <td class="save-info-tag hidden md:table-cell">
                                            <div class="cu-chart">
                                            <div ref="btc" class="">
                                                <canvas id="stockChart1" width="400" height="400"></canvas>
                                            </div>
                                        </div>
                                        </td>
                                        <td class="text-black text-sm font-normal hidden md:table-cell">1.2217</td>
                                        <td class=" hidden md:table-cell">
                                            <div class="flex items-center text-sm font-normal" data-v-7fd49c2f=""><span class="text-[#23A638] mr-3" data-v-7fd49c2f="">+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-7fd49c2f=""><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638" data-v-7fd49c2f=""></path></svg></div>
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
                                        <td class=" table-cell md:hidden">
                                            <div class="flex flex-col">
                                                <div class="text-black text-sm font-normal">1.2217</div>
                                            </div>
                                            <div class="text-[10px] text-[#989CAA]">0.9790 USD/EUR</div>
                                        </td>
                                        <td class="save-info-tag hidden md:table-cell">
                                            <div class="cu-chart">
                                            <div ref="btc" class="">
                                                <canvas id="stockChart1" width="400" height="400"></canvas>
                                            </div>
                                        </div>
                                        </td>
                                        <td class="text-black text-sm font-normal hidden md:table-cell">1.2217</td>
                                        <td class=" hidden md:table-cell">
                                            <div class="flex items-center text-sm font-normal" data-v-7fd49c2f=""><span class="text-[#23A638] mr-3" data-v-7fd49c2f="">+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-7fd49c2f=""><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638" data-v-7fd49c2f=""></path></svg></div>
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
                                        <td class=" table-cell md:hidden">
                                            <div class="flex flex-col">
                                                <div class="text-black text-sm font-normal">1.2217</div>
                                            </div>
                                            <div class="text-[10px] text-[#989CAA]">0.9790 USD/EUR</div>
                                        </td>
                                        <td class="save-info-tag hidden md:table-cell">
                                            <div class="cu-chart">
                                            <div ref="btc" class="">
                                                <canvas id="stockChart1" width="400" height="400"></canvas>
                                            </div>
                                        </div>
                                        </td>
                                        <td class="text-black text-sm font-normal hidden md:table-cell">1.2217</td>
                                        <td class=" hidden md:table-cell">
                                            <div class="flex items-center text-sm font-normal" data-v-7fd49c2f=""><span class="text-[#23A638] mr-3" data-v-7fd49c2f="">+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-7fd49c2f=""><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638" data-v-7fd49c2f=""></path></svg></div>
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
                                        <td class=" table-cell md:hidden">
                                            <div class="flex flex-col">
                                                <div class="text-black text-sm font-normal">1.2217</div>
                                            </div>
                                            <div class="text-[10px] text-[#989CAA]">0.9790 USD/EUR</div>
                                        </td>
                                        <td class="save-info-tag hidden md:table-cell">
                                            <div class="cu-chart">
                                            <div ref="btc" class="">
                                                <canvas id="stockChart1" width="400" height="400"></canvas>
                                            </div>
                                        </div>
                                        </td>
                                        <td class="text-black text-sm font-normal hidden md:table-cell">1.2217</td>
                                        <td class=" hidden md:table-cell">
                                            <div class="flex items-center text-sm font-normal" data-v-7fd49c2f=""><span class="text-[#23A638] mr-3" data-v-7fd49c2f="">+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-7fd49c2f=""><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638" data-v-7fd49c2f=""></path></svg></div>
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
                                        <td class=" table-cell md:hidden">
                                            <div class="flex flex-col">
                                                <div class="text-black text-sm font-normal">1.2217</div>
                                            </div>
                                            <div class="text-[10px] text-[#989CAA]">0.9790 USD/EUR</div>
                                        </td>
                                        <td class="save-info-tag hidden md:table-cell">
                                            <div class="cu-chart">
                                            <div ref="btc" class="">
                                                <canvas id="stockChart1" width="400" height="400"></canvas>
                                            </div>
                                        </div>
                                        </td>
                                        <td class="text-black text-sm font-normal hidden md:table-cell">1.2217</td>
                                        <td class=" hidden md:table-cell">
                                            <div class="flex items-center text-sm font-normal" data-v-7fd49c2f=""><span class="text-[#23A638] mr-3" data-v-7fd49c2f="">+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-7fd49c2f=""><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638" data-v-7fd49c2f=""></path></svg></div>
                                        </td>
                                        <td class="text-black text-sm font-normal hidden md:table-cell">
                                            0.9790
                                        </td>
                                    </tr>
                            </tbody>
                        </table>
                                        </div>
                    </div> 



                        <div class="bg-white p-6 rounded-[10px] mb-8">
                            <h4 class="text-xl font-bold text-black mb-3">Bitcoin</h4>
                            <p class="text-base font-normal">Bitcoin (BTC) is the first decentralized digital currency, which was already introduced in 2008. The uniqueness of this cryptocurrency is that there is no central body or regulator such as a bank behind it. Bitcoin is in fact money in the Cloud, with which you can carry out transactions anytime, anywhere. These transactions are irreversible, have a high degree of anonymity and very low transaction costs, regardless of the value of the transaction. The Bitcoin price has been very volatile from the start. This makes it possible to make high profits with cryptocurrency trading, but losses are always lurking.At the moment there are about 17 million Bitcoins in circulation and 12.5 Bitcoins are added every ten minutes. This is halved every so often, until there are eventually 21 million Bitcoins in circulation.Do you want to trade cryptocurrency? You can find the current value of BTC and the Bitcoin price on Wisselkoers.nl.</p>
                        </div>
                    </div>
                   
                    
                    
                </div>
                <div class="w-full lg:w-[298px]">
                    <div class="sidebar-wrapper">

                        <div class="bg-white rounded-2xl py-5 mb-6">
                        <h3 class=" text-[20px] font-normal text-black mb-3 px-5 pb-4">Recomended to Exchange</h3>
                      
                        <div
                class="ex-info-inner w-full py-4 px-5 flex border-b border-lblue"
              >
                <div class="ex-detail w-full">
                  <div class="detail-top w-full flex items-center gap-2 justify-between">
                    <div class="w-[160px] flex items-center gap-2.5">
                      <div class="logo w-8 h-8 overflow-hidden">
                        <img
                          src="@/assets/img/exchange/Bitvavo.png"
                          class="object-fit w-full h-full"
                          alt=""
                        />
                      </div>
                      <div
                        class="font-normal text-base text-primary flex items-center"
                      >
                        Bitvavo
                      </div>
                    </div>
                    <div class="flex items-center">
                      <span
                        class="rating-ex px-3 font-semibold text-base text-[#219653]"
                        >5.0</span
                      >
                    </div>
                    <a
                      href=""
                      class="text-cblue text-sm font-normal py-1.5 px-2 rounded-lg group bg-transparent hover:text-white hover:bg-cblue transition flex items-center"                      
                    >
                      <span class="mr-1.5 ">Visit</span>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        data-v-4b67e9dd=""
                      >
                        <path
                          class="group-hover:stroke-[#ffffff] transition duration-300"
                          d="M6.1875 2.0625H2.0625V9.9375H9.9375V5.8125M9.9375 2.0625L5.8125 6.1875M8.0625 1.3125H10.6875V3.9375"
                          stroke="#0051FF"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          data-v-4b67e9dd=""
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
                        <div
                class="ex-info-inner w-full py-4 px-5 flex border-b border-lblue"
              >
                <div class="ex-detail w-full">
                  <div class="detail-top w-full flex items-center gap-2 justify-between">
                    <div class="w-[160px] flex items-center gap-2.5">
                      <div class="logo w-8 h-8 overflow-hidden">
                        <img
                          src="@/assets/img/exchange/Binance.png"
                          class="object-fit w-full h-full"
                          alt=""
                        />
                      </div>
                      <div
                        class="font-normal text-base text-primary flex items-center"
                      >
                        Bitvavo
                      </div>
                    </div>
                    <div class="flex items-center">
                      <span
                        class="rating-ex px-3 font-semibold text-base text-[#219653]"
                        >5.0</span
                      >
                    </div>
                    <a
                      href=""
                      class="text-cblue text-sm font-normal py-1.5 px-2 rounded-lg group bg-transparent hover:text-white hover:bg-cblue transition flex items-center"                      
                    >
                      <span class="mr-1.5 ">Visit</span>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        data-v-4b67e9dd=""
                      >
                        <path
                          class="group-hover:stroke-[#ffffff] transition duration-300"
                          d="M6.1875 2.0625H2.0625V9.9375H9.9375V5.8125M9.9375 2.0625L5.8125 6.1875M8.0625 1.3125H10.6875V3.9375"
                          stroke="#0051FF"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          data-v-4b67e9dd=""
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
                        <div
                class="ex-info-inner w-full py-4 px-5 flex border-b border-lblue"
              >
                <div class="ex-detail w-full">
                  <div class="detail-top w-full flex items-center gap-2 justify-between">
                    <div class="w-[160px] flex items-center gap-2.5">
                      <div class="logo w-8 h-8 overflow-hidden">
                        <img
                          src="@/assets/img/exchange/CoinBene.png"
                          class="object-fit w-full h-full"
                          alt=""
                        />
                      </div>
                      <div
                        class="font-normal text-base text-primary flex items-center"
                      >
                        Bitvavo
                      </div>
                    </div>
                    <div class="flex items-center">
                      <span
                        class="rating-ex px-3 font-semibold text-base text-[#219653]"
                        >5.0</span
                      >
                    </div>
                    <a
                      href=""
                      class="text-cblue text-sm font-normal py-1.5 px-2 rounded-lg group bg-transparent hover:text-white hover:bg-cblue transition flex items-center"                      
                    >
                      <span class="mr-1.5 ">Visit</span>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        data-v-4b67e9dd=""
                      >
                        <path
                          class="group-hover:stroke-[#ffffff] transition duration-300"
                          d="M6.1875 2.0625H2.0625V9.9375H9.9375V5.8125M9.9375 2.0625L5.8125 6.1875M8.0625 1.3125H10.6875V3.9375"
                          stroke="#0051FF"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          data-v-4b67e9dd=""
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              </div>

              
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
                        
                        
                        <img src="@/assets/img/fi-side-img.svg" alt="image" class="max-h-[60px] w-fit mb-1">
                        <h3 class=" text-base font-bold text-black mb-1">Save up to €1,000 on your fixed costs</h3>
                        <p class=" text-sm font-normal text-dgray mb-1">Many Dutch people take out a financial product and then don't look back at it for years. However, you can easily save on your fixed financial costs with the following Finance Network comparisons:</p>
                        <ul class=" text-cblue font-normal text-sm list-disc list-inside space-y-1">
                            <li class=""> <a href="" class="underline ">Car insurance</a></li>
                            <li class=""> <a href="" class="underline ">Borrow money</a></li>
                            <li class=""> <a href="" class="underline ">Contents insurance</a></li>
                            <li class=""> <a href="" class="underline ">Building insurance</a></li>
                            <li class=""> <a href="" class="underline ">Cheap travel insurance</a></li>
                            <li class=""> <a href="" class="underline ">Health insurance</a></li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>