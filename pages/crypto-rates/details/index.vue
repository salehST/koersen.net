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
                                    
                                <div class="mb-6 flex items-start lg:items-end justify-between">
                                    <div class="text-black text-2xl font-semibold flex flex-col lg:flex-row gap-2">
                                        <div class=" flex gap-2 items-start lg:items-center"><img src="@/assets/img/logos/btc.png" alt="" class="h-8 w-8"> Bitcoin 
                                        </div>
                                        <div class="flex flex-col items-start lg:flex-row lg:items-center gap-2">
                                            <span class="">30.202</span><span class=" font-normal">(BTC/USD)</span> <span class="flex gap-2 items-center font-normal">1.08% </span> 
                                        </div>
                                    </div>
                                    <div class="flex items-center gap-2">

                                    
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
                                    <div class="text-center hidden lg:flex items-start md:items-center justify-center">
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
                                    <button type="button" class="bg-cblue hidden lg:flex text-white text-base font-bold py-2 px-2 rounded-md" >Buy Now</button>  
                                </div>
                                </div>
                                <div class="calculator-wrapper flex  justify-center mb-4">
                            <div class="inner-ca w-full bg-white block mx-auto justify-center">
                                <div class="mb-3 exchange-mb">                                
                                    <div class="flex flex-col  md:flex-row">
                                        <div class="w-full md:w-1/2">
                                            <label for="weight"
                                        class="block mb-1 text-sm font-bold text-black">Bitcoin</label>
                                            <div class="flex">
                                                <input type="text" id="weight"
                                                    class="rounded-none rounded-l-md bg-white border border-r-0 border-[#D5DBE8] text-black font-normal text-xs focus:ring-[#3b82f6] focus:outline-none focus:border-[#3b82f6] block flex-1 min-w-0 w-full p-2.5"
                                                    placeholder="€ 100">
                                                <span
                                                    class="inline-flex items-center bg-white text-black font-normal text-xs focus:ring-[#3b82f6] border-[#D5DBE8] border rounded-r-md"> 
                                                    <div class="">
                                                <div class="no-label w-[85px]">
                                                    <div class="select">
                                                        <div class="selectBtn" data-type="firstOption" style="background-image: url(/_nuxt/assets/img/logos/btc.png);" >EUR </div>
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


                        
                    <h2 class="text-black text-2xl md:text-[32px] font-semibold mb-4">Price Bitcoin</h2>
                    <div class="content-text">
                        <div class="bg-white p-6 rounded-[10px] mb-6">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                                <div class="border-b border-lgray flex items-center justify-center md:justify-end pb-4">
                                    <button type="button" class="bg-cblue text-white w-full md:w-auto text-base font-bold py-2 px-8 rounded-md" >Buy Now</button>                                   
                                    
                                </div>
                            </div>
                        </div>

    
                        <h3 class="text-black text-2xl md:text-[32px] font-semibold mb-4">Exchange Rate Foreign Currency</h3>
                        <div class="product-table-wrapper no-overlay mb-6">
        <table class="w-full">
            <thead class="table-head">
                <tr class="text-sm text-left text-black font-semibold p-4">
                    <th class="p-4">#</th>
                    <th>CRYPTO</th>
                    <th>PRICE</th>
                    <th>24h %</th>
                    <th class="hidden md:table-cell">7d %</th>
                    <th class="hidden md:table-cell">PRICE CHART</th>
                    <th class="hidden md:table-cell">MARKET CAP</th>
                    <th></th>
                </tr>
            </thead>
            <tbody class="table-body">
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4">1</td>
                    <td class="text-black text-sm font-medium"><span class="flex item items-center gap-1"> <img src="@/assets/img/logos/btc.png" class="w-6 h-6 mr-2" alt=""> Bitcoin <strong>BTC</strong> </span></td>
                    <td class="text-black text-sm font-normal">€ 22.546,00</td>
                    <td class="text-black text-sm font-normal table-cell md:hidden">
                        <div class="flex items-center text-sm font-normal" >
                            <span class="text-[#E71212] mr-3">-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212"></path></svg>
                        </div>
                        <div class="cu-chart">
                        <div ref="btc" class="">
                            <canvas id="stockChart2" width="400" height="400"></canvas>
                        </div>
                    </div>
                    </td>
                    <td class=" hidden md:table-cell">
                        <div class="flex items-center text-sm font-normal" >
                            <span class="text-[#E71212] mr-3">-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212"></path></svg>
                        </div>
                    </td>
                    <td class=" hidden md:table-cell">
                        <div class="flex items-center text-sm font-normal"><span class="text-[#23A638] mr-3">+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638"></path></svg></div>
                    </td>
                    <td class="save-info-tag hidden md:table-cell">
                        <div class="cu-chart">
                        <div ref="btc" class="">
                            <canvas id="stockChart2" width="400" height="400"></canvas>
                        </div>
                    </div>
                    </td>
                    <td class="text-black text-sm font-normal hidden md:table-cell">
                        $430.578.766.628
                    </td>
                    <td class="product-info-modal text-center">
                        <button type="button" class="bg-cblue text-white font-semibold  text-sm py-2 px-6 rounded transition opacity-100 hover:opacity-90 hidden md:table-cell">Buy</button>
                        <button type="button" class="bg-cblue text-white font-semibold  text-sm py-2 px-3 rounded transition opacity-100 hover:opacity-90 md:hidden table-cell">Buy</button>
                    </td>
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4">2</td>
                    <td class="text-black text-sm font-medium"><span class="flex item items-center gap-1"> <img src="@/assets/img/logos/eth.png" class="h-6 w-6 mr-2" alt=""> Etherium <strong>ETH</strong> </span></td>
                    <td class="text-black text-sm font-normal">€ 1.507,31</td>
                    <td class="text-black text-sm font-normal table-cell md:hidden">
                        <div class="flex items-center text-sm font-normal"><span class="text-[#23A638] mr-3" >+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638"></path></svg></div>
                        <div class="cu-chart">
                        <div ref="btc" class="">
                            <canvas id="stockChart2" width="400" height="400"></canvas>
                        </div>
                    </div>
                    </td>
                    <td class=" hidden md:table-cell">
                        <div class="flex items-center text-sm font-normal"><span class="text-[#23A638] mr-3" >+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638"></path></svg></div>
                    </td>
                    <td class=" hidden md:table-cell">
                        <div class="flex items-center text-sm font-normal"><span class="text-[#E71212] mr-3">-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212"></path></svg></div>
                    </td>
                    <td class="save-info-tag hidden md:table-cell">
                        <div class="cu-chart">
                        <div ref="btc" class="">
                            <canvas id="stockChart2" width="400" height="400"></canvas>
                        </div>
                    </div>
                    </td>
                    <td class="text-black text-sm font-normal hidden md:table-cell">
                        $430.578.766.628
                    </td>
                    <td class="product-info-modal text-center">
                        <button type="button" class="bg-cblue text-white font-semibold  text-sm py-2 px-6 rounded transition opacity-100 hover:opacity-90 hidden md:table-cell">Buy</button>
                        <button type="button" class="bg-cblue text-white font-semibold  text-sm py-2 px-3 rounded transition opacity-100 hover:opacity-90 md:hidden table-cell">Buy</button>
                    </td>
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4">3</td> 
                    <td class="text-black text-sm font-medium"><span class="flex item items-center ga-1"> <img src="@/assets/img/logos/usdt.png" class="h-6 w-6 mr-2" alt=""> Tether <strong>USDT</strong></span></td>
                    <td class="text-black text-sm font-normal">€ 22.546,00</td>
                    <td class="text-black text-sm font-normal table-cell md:hidden">
                        <div class="flex items-center text-sm font-normal"><span class="text-[#E71212] mr-3" >-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212"></path></svg></div>
                        <div class="cu-chart">
                        <div ref="btc" class="">
                            <canvas id="stockChart2" width="400" height="400"></canvas>
                        </div>
                    </div>
                    </td>
                    <td class=" hidden md:table-cell">
                        <div class="flex items-center text-sm font-normal"><span class="text-[#E71212] mr-3" >-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212"></path></svg></div>
                    </td>
                    <td class=" hidden md:table-cell">
                        <div class="flex items-center text-sm font-normal"><span class="text-[#23A638] mr-3">+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638"></path></svg></div>
                    </td>
                    <td class="save-info-tag hidden md:table-cell">
                        <div class="cu-chart">
                        <div ref="btc" class="">
                            <canvas id="stockChart2" width="400" height="400"></canvas>
                        </div>
                    </div>
                    </td>
                    <td class="text-black text-sm font-normal hidden md:table-cell">
                        $430.578.766.628
                    </td>
                    <td class="product-info-modal text-center">
                        <button type="button" class="bg-cblue text-white font-semibold  text-sm py-2 px-6 rounded transition opacity-100 hover:opacity-90 hidden md:table-cell">Buy</button>
                        <button type="button" class="bg-cblue text-white font-semibold  text-sm py-2 px-3 rounded transition opacity-100 hover:opacity-90 md:hidden table-cell">Buy</button>
                    </td>
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4">4</td>
                    <td class="text-black text-sm font-medium"><span class="flex item items-center gap-1"> <img src="@/assets/img/logos/usdc.png" class="h-6 w-6 mr-2" alt=""> USD Coin <strong>USDC</strong></span></td>
                    <td class="text-black text-sm font-normal">€ 22.546,00</td>
                    <td class="text-black text-sm font-normal table-cell md:hidden">
                        <div class="flex items-center text-sm font-normal"><span class="text-[#E71212] mr-3" >-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212"></path></svg></div>
                        <div class="cu-chart">
                        <div ref="btc" class="">
                            <canvas id="stockChart2" width="400" height="400"></canvas>
                        </div>
                    </div>
                    </td>
                    <td class=" hidden md:table-cell">
                        <div class="flex items-center text-sm font-normal"><span class="text-[#E71212] mr-3" >-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212"></path></svg></div>
                    </td>
                    <td class=" hidden md:table-cell">
                        <div class="flex items-center text-sm font-normal"><span class="text-[#23A638] mr-3">+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638"></path></svg></div>
                    </td>
                    <td class="save-info-tag hidden md:table-cell">
                        <div class="cu-chart">
                        <div ref="btc" class="">
                            <canvas id="stockChart2" width="400" height="400"></canvas>
                        </div>
                    </div>
                    </td>
                    <td class="text-black text-sm font-normal hidden md:table-cell">
                        $430.578.766.628
                    </td>
                    <td class="product-info-modal text-center">
                        <button type="button" class="bg-cblue text-white font-semibold  text-sm py-2 px-6 rounded transition opacity-100 hover:opacity-90 hidden md:table-cell">Buy</button>
                        <button type="button" class="bg-cblue text-white font-semibold  text-sm py-2 px-3 rounded transition opacity-100 hover:opacity-90 md:hidden table-cell">Buy</button>
                    </td>
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4">5</td>
                    <td class="text-black text-sm font-medium"><span class="flex item items-center gap-1"> <img src="@/assets/img/logos/bnb.png" class="h-6 w-6 mr-2" alt=""> BNB <strong>BNB</strong></span></td>
                    <td class="text-black text-sm font-normal">€ 22.546,00</td>
                    <td class="text-black text-sm font-normal table-cell md:hidden">
                        <div class="flex items-center text-sm font-normal"><span class="text-[#E71212] mr-3" >-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212"></path></svg></div>
                        <div class="cu-chart">
                        <div ref="btc" class="">
                            <canvas id="stockChart2" width="400" height="400"></canvas>
                        </div>
                    </div>
                    </td>
                    <td class=" hidden md:table-cell">
                        <div class="flex items-center text-sm font-normal"><span class="text-[#E71212] mr-3">-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212"></path></svg></div>
                    </td>
                    <td class=" hidden md:table-cell">
                        <div class="flex items-center text-sm font-normal"><span class="text-[#23A638] mr-3">+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638"></path></svg></div>
                    </td>
                    <td class="save-info-tag hidden md:table-cell">
                        <div class="cu-chart">
                        <div ref="btc" class="">
                            <canvas id="stockChart2" width="400" height="400"></canvas>
                        </div>
                    </div>
                    </td>
                    <td class="text-black text-sm font-normal hidden md:table-cell">
                        $430.578.766.628
                    </td>
                    <td class="product-info-modal text-center">
                        <button type="button" class="bg-cblue text-white font-semibold  text-sm py-2 px-6 rounded transition opacity-100 hover:opacity-90 hidden md:table-cell">Buy</button>
                        <button type="button" class="bg-cblue text-white font-semibold  text-sm py-2 px-3 rounded transition opacity-100 hover:opacity-90 md:hidden table-cell">Buy</button>
                    </td>
                </tr>
                
        </tbody>
    </table>
        </div>
        <div class="sidebar-wrapper block lg:hidden">

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

<div class="bg-[#FFF8EA] w-full h-[180px] lg:h-[450px] p-5 mb-6 rounded-2xl flex justify-center items-center">
<div class="text-4xl text-black font-bold">
    ADS
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
<div class="bg-[#FFF8EA] w-full h-[180px] lg:h-[450px] p-5 mb-6 rounded-2xl flex justify-center items-center">
<div class="text-4xl text-black font-bold">
    ADS
</div>
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
<div class="bg-[#FFF8EA] w-full h-[180px] lg:h-[450px] p-5 mb-6 rounded-2xl flex justify-center items-center">
<div class="text-4xl text-black font-bold">
    ADS
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
        <div class="bg-[#FFF8EA] w-full h-[180px] lg:h-[300px] p-5 mb-6 rounded-2xl flex justify-center items-center">
                        <div class="text-4xl text-black font-bold">
                            ADS
                        </div>
                    </div>

                        <div class="bg-white p-6 rounded-[10px] mb-8">
                            <h4 class="text-xl font-bold text-black mb-3">Bitcoin</h4>
                            <p class="text-base font-normal">Bitcoin (BTC) is the first decentralized digital currency, which was already introduced in 2008. The uniqueness of this cryptocurrency is that there is no central body or regulator such as a bank behind it. Bitcoin is in fact money in the Cloud, with which you can carry out transactions anytime, anywhere. These transactions are irreversible, have a high degree of anonymity and very low transaction costs, regardless of the value of the transaction. The Bitcoin price has been very volatile from the start. This makes it possible to make high profits with cryptocurrency trading, but losses are always lurking.At the moment there are about 17 million Bitcoins in circulation and 12.5 Bitcoins are added every ten minutes. This is halved every so often, until there are eventually 21 million Bitcoins in circulation.Do you want to trade cryptocurrency? You can find the current value of BTC and the Bitcoin price on Wisselkoers.nl.</p>
                        </div>
                    </div>
                   
                    
                    
                </div>
                <div class="w-full lg:w-[298px]">
                    <div class="sidebar-wrapper hidden lg:block">

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
                    <div class="bg-[#FFF8EA] w-full h-[180px] lg:h-[450px] p-5 mb-6 rounded-2xl flex justify-center items-center">
                        <div class="text-4xl text-black font-bold">
                            ADS
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>