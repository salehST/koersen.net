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
            
                <div class="w-full lg:w-[818px] mb-8 official-currency">
                    
                    <div class=" page-calculator calculator-wrapper flex  justify-center mb-12">
                        <div class="wrapper-area w-full  bg-white border border-[#F3F4F6] rounded-[20px] px-6 py-6 ">
                            <div class="cal-top flex items-center justify-between gap-3">
                            <h3 class="text-[32px] font-bold text-primary">Currency Calculator</h3>
                                <div class="date-i py-2 px-1.5 border border-[#DADADA] rounded-md bg-white">
                                    <div class="d-inner flex items-center gap-2">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.8001 1.59998C4.35827 1.59998 4.0001 1.95815 4.0001 2.39998V3.19998H3.2001C2.31644 3.19998 1.6001 3.91632 1.6001 4.79998V12.8C1.6001 13.6836 2.31644 14.4 3.2001 14.4H12.8001C13.6838 14.4 14.4001 13.6836 14.4001 12.8V4.79998C14.4001 3.91632 13.6838 3.19998 12.8001 3.19998H12.0001V2.39998C12.0001 1.95815 11.6419 1.59998 11.2001 1.59998C10.7583 1.59998 10.4001 1.95815 10.4001 2.39998V3.19998H5.6001V2.39998C5.6001 1.95815 5.24193 1.59998 4.8001 1.59998ZM4.8001 5.59998C4.35827 5.59998 4.0001 5.95815 4.0001 6.39998C4.0001 6.8418 4.35827 7.19998 4.8001 7.19998H11.2001C11.6419 7.19998 12.0001 6.8418 12.0001 6.39998C12.0001 5.95815 11.6419 5.59998 11.2001 5.59998H4.8001Z" fill="black"/>
</svg>

<span class="date-info font-bold text-black text-sm">15/08/2023</span>
                                    </div>
                                </div>
                            </div>
                        
            <div class="inner-ca w-full md:w-auto inline-flex mx-auto justify-center">
                <div class="mb-3 exchange-mb">                                
                    <div class="flex flex-col  md:flex-row">
                        <div class="">
                            <label for="weight"
                        class="block mb-1 text-xs font-normal text-black">From</label>
                            <div class="flex">
                                <input type="text" id="weight"
                                    class="rounded-none rounded-l-md bg-white border border-r-0 border-[#F3F4F6] text-black font-normal text-xs focus:ring-[#3b82f6] focus:outline-none focus:border-[#3b82f6] block flex-1 min-w-0 w-full p-2.5"
                                    placeholder="€ 100">
                                <span
                                    class="inline-flex items-center bg-white text-black font-normal text-xs focus:ring-[#3b82f6] border-[#F3F4F6] border rounded-r-md"> 
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
                           <div class="flex items-center gap-1 mt-2">
                            <button type="button" class=" font-normal px-2 py-1 text-xs text-black bg-[#F3F6FD] rounded-[5px]" >EUR</button>
                            <button type="button" class=" font-normal px-2 py-1 text-xs text-black bg-[#F3F6FD] rounded-[5px]" >USD</button>
                            <button type="button" class=" font-normal px-2 py-1 text-xs text-black bg-[#F3F6FD] rounded-[5px]" >GBP</button>
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
                                class="rounded-none rounded-l-md bg-white border border-r-0 border-[#F3F4F6] text-black font-normal text-xs focus:ring-[#3b82f6] focus:outline-none focus:border-[#3b82f6] block flex-1 min-w-0 w-full p-2.5"
                                placeholder="$ 100">
                            <span
                                class="inline-flex items-center bg-white text-black font-normal text-xs focus:ring-[#3b82f6] border-[#F3F4F6] border rounded-r-md"> 
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
                        <div class="flex items-center gap-1 mt-2">
                            <button type="button" class=" font-normal px-2 py-1 text-xs text-black bg-[#F3F6FD] rounded-[5px]" >EUR</button>
                            <button type="button" class=" font-normal px-2 py-1 text-xs text-black bg-[#F3F6FD] rounded-[5px]" >USD</button>
                            <button type="button" class=" font-normal px-2 py-1 text-xs text-black bg-[#F3F6FD] rounded-[5px]" >GBP</button>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        </div>


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


                        
                    <div class="bg-white p-6 rounded-[10px] mb-8">
                            <div class="grid grid-cols-2 gap-4">
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
                        <div class="bg-white p-6 rounded-[10px] mb-8">
                            <h4 class="text-xl font-bold text-black mb-3">Currencies</h4>
                            <p class="text-base font-normal">Currency conversion takes place based on the exchange rates. Valuta.nl has developed a handy Currency Converter Calculator for converting currencies, calculating currencies or converting a currency rate. This makes it easy to convert all currency rates.</p>
                        </div>
                    
                    
                </div>
                <div class="w-full lg:w-[298px]">
                    <div class="sidebar-wrapper">


              
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