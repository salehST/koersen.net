<script>


import Chart from 'chart.js/auto/auto.mjs';
export default {
    data() {
        return {
            stockConfig2: {
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
            priceChart1: null,
            stockChart2: null,
        }
    },
    mounted() {

        this.ChartRender();



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
        ChartRender() {
            if (this.stockChart2 != null) {
                this.stockChart2.destroy();
            }
            this.stockChart2 = new Chart(
                document.getElementById('stockChart2'),
                this.stockConfig2
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
canvas#priceChart1{
    max-height: 60px;
    margin-bottom: 20px;
}
</style>
<template>
    
        <div class="detail-content flex flex-col lg:flex-row items-start justify-between gap-6">
            
                <div class="w-full lg:w-[818px] mb-8">
                    
                    <div class="box-wrapper  bg-white border border-[#F3F4F6] rounded-[20px] px-6 pt-6 mb-8">
                    <h2 class=" text-xl text-primary md:text-4xl font-bold leading-9 md:leading-[57px] mb-6 flex items-center justify-start md:justify-center">
                    Currency Calculator</h2>
                    <CommonTopCalculator />
                </div>
                        <h2 class="text-black text-2xl md:text-[32px] font-semibold mb-4">Cryptocurrency prices</h2>
                    <div class="tab-wrapper mb-8 rounded-t-[10px]">
                        <div class="product-table-wrapper no-overlay">
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
    <div class="pagination">
            <div class="flex items-center justify-center mt-4">
  <nav class="flex gap-2">
    <a href="#" class="items-center flex justify-center rounded bg-white text-black hover:bg-cblue hover:text-white">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="32" height="32" rx="4" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.7071 11.2929C19.0976 11.6834 19.0976 12.3166 18.7071 12.7071L15.4142 16L18.7071 19.2929C19.0976 19.6834 19.0976 20.3166 18.7071 20.7071C18.3166 21.0976 17.6834 21.0976 17.2929 20.7071L13.2929 16.7071C12.9024 16.3166 12.9024 15.6834 13.2929 15.2929L17.2929 11.2929C17.6834 10.9024 18.3166 10.9024 18.7071 11.2929Z" fill="#B4BAC6"/>
</svg>

    </a>
    <a href="#" class="h-8 w-8 items-center flex justify-center bg-cblue text-white rounded">
      1
    </a>
    <a href="#" class="h-8 w-8 items-center flex justify-center  rounded bg-white text-black hover:bg-cblue hover:text-white">
      2
    </a>
    <a href="#" class="h-8 w-8 items-center flex justify-center  rounded bg-white text-black hover:bg-cblue hover:text-white">
      3
    </a>
    <a href="#" class="h-8 w-8 items-center flex justify-center  rounded bg-white text-black hover:bg-cblue hover:text-white">
      4
    </a>
    <a href="#" class="h-8 w-8 items-center flex justify-center  rounded bg-white text-black hover:bg-cblue hover:text-white">
      &hellip;
    </a>
    <a href="#" class="group items-center flex justify-center  rounded bg-white text-black hover:bg-cblue hover:text-white">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect class=" group-hover:fill-[#0051FF]" width="32" height="32" rx="4" fill="white"/>
<path class=" group-hover:fill-[#fff]" fill-rule="evenodd" clip-rule="evenodd" d="M13.2929 20.7071C12.9024 20.3166 12.9024 19.6834 13.2929 19.2929L16.5858 16L13.2929 12.7071C12.9024 12.3166 12.9024 11.6834 13.2929 11.2929C13.6834 10.9024 14.3166 10.9024 14.7071 11.2929L18.7071 15.2929C19.0976 15.6834 19.0976 16.3166 18.7071 16.7071L14.7071 20.7071C14.3166 21.0976 13.6834 21.0976 13.2929 20.7071Z" fill="black"/>
</svg>

    </a>
  </nav>
</div>

        </div>

                    </div>
                      
                    <div class="sidebar-wrapper block lg:hidden">

<div class="bg-white rounded-2xl mb-6">
    <div class="chart-content mb-8">
    <div class=" bg-white rounded-2xl p-6">
        <div class="mb-6 flex items-end justify-between w-full">
            <div class=" w-full">
                <div class="text-black text-sm font-normal flex gap-1 items-start justify-between">
                    <div class="flex gap-2 items-start">
                    <img src="@/assets/img/logos/btc.png" alt="" class="h-6 w-6">
                    <div class="flex flex-col justify-start">
                    <div class="text-left">Bitcoin <span class="font-bold"> BTC</span></div>
                   <div class=" text-dgray text-sm font-normal flex gap-2 items-center"> € 22.546,00 <span class="text-[#E71212] text-xs">-2.62 %</span>  <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6L0 0L8 8.65261e-07L4 6Z" fill="#E71212"/>
</svg>
</div>
                </div> 
                </div> 
                <div class="text-dgray text-sm font-normal">24 H</div>
                </div>
            </div>
        </div>
        <div class="chart border-b border-lgray mb-5">
            <canvas id="priceChart1" width="400" height="400"></canvas>
        </div>

        <div class="flex items-center justify-between gap-2 mb-3.5">
            <div class="">
                <div class="text-dgray text-sm font-normal">Buy the best price</div>
                <div class=" text-base font-bold text-black">€ 76.70 M</div>
            </div>
            <a href=""
class="text-cblue text-sm font-semibold py-1.5 px-5 border rounded-full border-[#0051FF] group bg-transparent hover:text-white hover:bg-cblue transition flex items-center"><span
    class="mr-1.5">Bitvavo</span> <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path class="group-hover:stroke-[#ffffff] transition duration-300"
        d="M6.1875 2.0625H2.0625V9.9375H9.9375V5.8125M9.9375 2.0625L5.8125 6.1875M8.0625 1.3125H10.6875V3.9375"
        stroke="#0051FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>
</a>
        </div>
        <div class="flex items-center justify-between gap-2  border-b border-lgray pb-5 mb-4">
            <div class="">
                <div class="text-dgray text-sm font-normal">Best price for sale</div>
                <div class=" text-base font-bold text-black">€ 75.70 M</div>
            </div>
            <a href=""
class="text-cblue text-sm font-semibold py-1.5 px-5 border rounded-full border-[#0051FF] group bg-transparent hover:text-white hover:bg-cblue transition flex items-center"><span
    class="mr-1.5">Bitvavo</span> <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path class="group-hover:stroke-[#ffffff] transition duration-300"
        d="M6.1875 2.0625H2.0625V9.9375H9.9375V5.8125M9.9375 2.0625L5.8125 6.1875M8.0625 1.3125H10.6875V3.9375"
        stroke="#0051FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>
</a>
        </div>
        <div class="table-area">
            <table class="table-auto text-left">
<thead>
<tr>
<th>Provider</th>
<th class=" px-4">Buy</th>
<th>Sell</th>
</tr>
</thead>
<tbody>
<tr>
<td class="py-2">
<a href=""
class="text-cblue text-sm font-semibold bg-transparent  transition flex items-center"><span
    class="mr-1.5">Bitvavo</span> <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path class=""
        d="M6.1875 2.0625H2.0625V9.9375H9.9375V5.8125M9.9375 2.0625L5.8125 6.1875M8.0625 1.3125H10.6875V3.9375"
        stroke="#0051FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>
</a>
</td>
<td class="text-sm font-normal text-black px-4">€ 76.70 M</td>
<td class="text-sm font-normal text-black">€ 75.70 M</td>
</tr>

</tbody>
</table>
        </div>
    </div>
</div>
</div>
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
<div class="bg-[#FFF8EA] w-full h-[180px] lg:h-[568px] p-5 mb-6 rounded-2xl flex justify-center items-center">
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
<div class="bg-[#FFF8EA] w-full h-[180px] lg:h-[568px] p-5 mb-6 rounded-2xl flex justify-center items-center">
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
<div class="bg-[#FFF8EA] w-full h-[180px] lg:h-[568px] p-5 mb-6 rounded-2xl flex justify-center items-center">
    <div class="text-4xl text-black font-bold">
        ADS
    </div>
</div>
</div>
                    <div class="content-text">
                                              
                        <div class="bg-white p-6 rounded-[10px] mb-8">
                            <h4 class="text-xl font-bold text-black mb-3">Exchange rates</h4>
                            <p class="text-base font-normal">On Koersen.net you will find the most up-to-date exchange rate of the euro and other currencies. In addition, you can look up historical exchange rates and convert the exchange rate from one currency to another. Exchange rates are not only important for tourists, but also for international trade.</p>
                        </div>
                                              
                        <div class="bg-white p-6 rounded-[10px] mb-8">
                            <h4 class="text-xl font-bold text-black mb-3">Did you know</h4>
                            <p class="text-base font-normal">An exchange rate is the value of one currency expressed in terms of another currency. With the abandonment of the gold standard in 1971 by the US president, the value of the dollar was expressed in a different currency. Since then, exchange rates have become increasingly important. For you personally, converting exchange rates is probably especially important when you go on vacation to a country with a foreign currency. However, exchange rates are also important for international trade. More than $3 trillion is traded daily in the foreign exchange market.</p>
                        </div>
                        <div class="bg-[#FFF8EA] w-full h-[180px] lg:h-[300px] p-5 mb-6 rounded-2xl hidden lg:flex justify-center items-center">
                        <div class="text-4xl text-black font-bold">
                            ADS
                        </div>
                    </div>                
                        <div class="bg-white p-6 rounded-[10px] mb-8">
                            <h4 class="text-xl font-bold text-black mb-3">Koersen.net part of Finance Network</h4>
                            <p class="text-base font-normal mb-2">Koersen.net is part of Finance Network, an online media company with an extensive portfolio of financial websites. Since 2006, Finance Network has been developing, managing and operating various portals in the field of personal finance.</p>
                                <p class="text-base font-normal">
One of these portals is the financial comparison site Geld.nl. At Geld.nl you, as a consumer, can compare your car insurance and compare your health insurance, among other things . But you can also borrow money at Geld.nl. Because you can compare the most complete range of banks and insurers on Geld.nl, you will always find the best deal here and save hundreds of euros per year!</p>
                        </div>
                    </div>
                   
                    <div class="calculator-wrapper flex  justify-center mb-12">
                            <div class="inner-ca w-full bg-white border border-lblue rounded-[20px] px-6 py-6  block mx-auto justify-center">
                                <div class="mb-3 exchange-mb">                                
                                    <div class="flex flex-col  md:flex-row">
                                        <div class="w-full md:w-1/2">
                                            <label for="weight"
                                        class="block mb-1 text-sm font-bold text-black">From</label>
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
                                        <div class="w-full md:w-1/2">
                                            <label for="weight"
                                        class="block mb-1 text-sm font-bold text-black">To</label>
                                        
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
                                <div class="read-more-btn text-center mx-auto">
                                                <a href="" class="group text-white opacity-100 bg-cblue flex items-center justify-center py-2 transition hover:opacity-90 text-base font-bold rounded-[10px] ">Buy Now <svg class="ml-2" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" class="group-hover:fill-white" clip-rule="evenodd" d="M10.7929 3.29289C11.1834 2.90237 11.8166 2.90237 12.2071 3.29289L18.2071 9.29289C18.5976 9.68342 18.5976 10.3166 18.2071 10.7071L12.2071 16.7071C11.8166 17.0976 11.1834 17.0976 10.7929 16.7071C10.4024 16.3166 10.4024 15.6834 10.7929 15.2929L15.0858 11L3.5 11C2.94772 11 2.5 10.5523 2.5 10C2.5 9.44772 2.94772 9 3.5 9H15.0858L10.7929 4.70711C10.4024 4.31658 10.4024 3.68342 10.7929 3.29289Z" fill="#FFFFFF"/>
                </svg>
                </a>
                                            </div>
                            </div>
                    </div>
        <div class="bg-[#FFF8EA] w-full h-[180px] lg:h-[596px] p-5 mb-6 rounded-2xl flex lg:hidden justify-center items-center">
                        <div class="text-4xl text-black font-bold">
                            ADS
                        </div>
                    </div>      
 
                </div>
                <div class="w-full lg:w-[298px]">
                    <div class="sidebar-wrapper hidden lg:block">

                        <div class="bg-white rounded-2xl mb-6">
                            <div class="chart-content mb-8">
                            <div class=" bg-white rounded-2xl p-6">
                                <div class="mb-6 flex items-end justify-between w-full">
                                    <div class=" w-full">
                                        <div class="text-black text-sm font-normal flex gap-1 items-start justify-between">
                                            <div class="flex gap-2 items-start">
                                            <img src="@/assets/img/logos/btc.png" alt="" class="h-6 w-6">
                                            <div class="flex flex-col justify-start">
                                            <div class="text-left">Bitcoin <span class="font-bold"> BTC</span></div>
                                           <div class=" text-dgray text-sm font-normal flex gap-2 items-center"> € 22.546,00 <span class="text-[#E71212] text-xs">-2.62 %</span>  <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6L0 0L8 8.65261e-07L4 6Z" fill="#E71212"/>
</svg>
</div>
                                        </div> 
                                        </div> 
                                        <div class="text-dgray text-sm font-normal">24 H</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="chart border-b border-lgray mb-5">
                                    <canvas id="priceChart1" width="400" height="400"></canvas>
                                </div>

                                <div class="flex items-center justify-between gap-2 mb-3.5">
                                    <div class="">
                                        <div class="text-dgray text-sm font-normal">Buy the best price</div>
                                        <div class=" text-base font-bold text-black">€ 76.70 M</div>
                                    </div>
                                    <a href=""
                        class="text-cblue text-sm font-semibold py-1.5 px-5 border rounded-full border-[#0051FF] group bg-transparent hover:text-white hover:bg-cblue transition flex items-center"><span
                            class="mr-1.5">Bitvavo</span> <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path class="group-hover:stroke-[#ffffff] transition duration-300"
                                d="M6.1875 2.0625H2.0625V9.9375H9.9375V5.8125M9.9375 2.0625L5.8125 6.1875M8.0625 1.3125H10.6875V3.9375"
                                stroke="#0051FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                                </div>
                                <div class="flex items-center justify-between gap-2  border-b border-lgray pb-5 mb-4">
                                    <div class="">
                                        <div class="text-dgray text-sm font-normal">Best price for sale</div>
                                        <div class=" text-base font-bold text-black">€ 75.70 M</div>
                                    </div>
                                    <a href=""
                        class="text-cblue text-sm font-semibold py-1.5 px-5 border rounded-full border-[#0051FF] group bg-transparent hover:text-white hover:bg-cblue transition flex items-center"><span
                            class="mr-1.5">Bitvavo</span> <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path class="group-hover:stroke-[#ffffff] transition duration-300"
                                d="M6.1875 2.0625H2.0625V9.9375H9.9375V5.8125M9.9375 2.0625L5.8125 6.1875M8.0625 1.3125H10.6875V3.9375"
                                stroke="#0051FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                                </div>
                                <div class="table-area">
                                    <table class="table-auto text-left">
  <thead>
    <tr>
      <th>Provider</th>
      <th class=" px-4">Buy</th>
      <th>Sell</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="py-2">
        <a href=""
                        class="text-cblue text-sm font-semibold bg-transparent  transition flex items-center"><span
                            class="mr-1.5">Bitvavo</span> <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path class=""
                                d="M6.1875 2.0625H2.0625V9.9375H9.9375V5.8125M9.9375 2.0625L5.8125 6.1875M8.0625 1.3125H10.6875V3.9375"
                                stroke="#0051FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
        </td>
      <td class="text-sm font-normal text-black px-4">€ 76.70 M</td>
      <td class="text-sm font-normal text-black">€ 75.70 M</td>
    </tr>
   
  </tbody>
</table>
                                </div>
                            </div>
                        </div>
                        </div>
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
                    <div class="bg-[#FFF8EA] w-full h-[180px] lg:h-[568px] p-5 mb-6 rounded-2xl flex justify-center items-center">
                        <div class="text-4xl text-black font-bold">
                            ADS
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>