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

        const tabs = document.querySelectorAll('.tab-link');
        const tabContents = document.querySelectorAll('.tab-pane');

        tabs.forEach((tab, index) => {
            tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active-table'));
            tab.classList.add('active-table');

            tabContents.forEach(content => content.classList.add('hidden'));
            tabContents[index].classList.remove('hidden');
        });

  // Set the first tab as active by default
  if (index === 0) {
    tab.classList.add('active-table');
    tabContents[index].classList.remove('hidden');
  }
});
        
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
    <h2 class="text-black text-2xl md:text-[32px] font-semibold mb-4">Exchange Rate Foreign Currency</h2>
        <div class="detail-content flex flex-col lg:flex-row items-start justify-between gap-6">
            
                <div class="w-full lg:w-[818px] mb-8">
                    <div class="tab-wrapper mb-8 rounded-[10px] overflow-hidden">
                        <ul class="flex items-center justify-between bg-white">
        <li class="">
            <button type="button" class="tab-link  px-4 py-2 group w-[125px] flex flex-col  items-center">
                <div class="tab-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.76127 14.3831C4.92342 14.3831 5.05482 14.2517 5.05482 14.0895C5.05482 13.9274 4.92342 13.796 4.76127 13.796C4.09826 13.796 3.62049 13.9239 3.2576 14.1985C2.96842 14.4173 2.76756 14.7262 2.65592 15.1206H2.34775C2.18561 15.1206 2.0542 15.2521 2.0542 15.4142C2.0542 15.5764 2.18561 15.7078 2.34775 15.7078H2.55986C2.55475 15.7872 2.55154 15.8684 2.55154 15.9526C2.55154 16.0367 2.55475 16.118 2.55986 16.1974H2.34775C2.18561 16.1974 2.0542 16.3288 2.0542 16.491C2.0542 16.6531 2.18561 16.7845 2.34775 16.7845H2.65592C2.76756 17.1789 2.96846 17.4878 3.2576 17.7066C3.62049 17.9813 4.09826 18.1092 4.76127 18.1092C4.92342 18.1092 5.05482 17.9778 5.05482 17.8156C5.05482 17.6535 4.92342 17.5221 4.76127 17.5221C3.95537 17.5221 3.4835 17.2994 3.27232 16.7845H4.30885C4.471 16.7845 4.6024 16.6531 4.6024 16.4909C4.6024 16.3288 4.471 16.1974 4.30885 16.1974H3.1474C3.14174 16.1194 3.13861 16.0381 3.13861 15.9525C3.13861 15.8669 3.14174 15.7856 3.1474 15.7077H4.30889C4.47104 15.7077 4.60244 15.5763 4.60244 15.4142C4.60244 15.252 4.47104 15.1206 4.30889 15.1206H3.27236C3.4835 14.6058 3.95541 14.3831 4.76127 14.3831Z" fill="#0051FF"/>
    <path d="M14.6984 4.20893H15.2481L15.2523 4.24447C15.2951 4.62799 15.2727 4.771 14.9662 5.1826L14.6582 5.56983C14.5046 5.75057 14.6482 6.05174 14.8853 6.04611L17.2933 6.0674H17.296C17.4569 6.0674 17.588 5.93768 17.5895 5.77647C17.5909 5.61436 17.4606 5.48178 17.2985 5.48033L15.4875 5.46432C15.8135 5.01057 15.8918 4.72229 15.8387 4.20897H16.3896C16.5517 4.20897 16.6831 4.07756 16.6831 3.91541C16.6831 3.75326 16.5517 3.62186 16.3896 3.62186H15.6963C15.5789 3.44647 15.3743 3.07776 15.3756 2.77408C15.3756 2.77369 15.3756 2.7733 15.3756 2.77291C15.3756 2.77252 15.3756 2.77213 15.3756 2.77174C15.3749 2.57475 15.4608 2.43029 15.6381 2.33018C15.9065 2.17873 16.3237 2.17635 16.568 2.32486C16.759 2.441 16.9035 2.6042 16.9451 2.75084C16.9894 2.90678 17.1517 2.9974 17.3076 2.95307C17.4636 2.90881 17.5541 2.74651 17.5099 2.59053C17.4271 2.29858 17.1949 2.01889 16.873 1.82322C16.4458 1.56342 15.8051 1.56174 15.3495 1.81893C14.9877 2.02326 14.7887 2.36061 14.7887 2.76924C14.7887 2.77002 14.7886 2.77076 14.7886 2.77154C14.7886 2.7719 14.7886 2.77225 14.7886 2.7726C14.7886 2.77303 14.7886 2.77342 14.7886 2.77389C14.7886 2.7751 14.7887 2.77623 14.7888 2.77744C14.7889 3.08486 14.9015 3.38897 15.0181 3.62182H14.6985C14.5363 3.62182 14.4049 3.75322 14.4049 3.91537C14.4049 4.07752 14.5363 4.20893 14.6984 4.20893Z" fill="#0051FF"/>
    <path d="M18.0442 12.5922C18.3729 11.6758 18.5398 10.7144 18.5398 9.73016C18.5398 8.90887 18.4221 8.09816 18.1904 7.31668C19.2791 6.60535 20 5.37609 20 3.98145C20 1.78605 18.2139 0 16.0186 0C14.6759 0 13.4865 0.668125 12.765 1.68922C11.8945 1.39602 10.9847 1.24715 10.0568 1.24715C9.09633 1.24715 8.15578 1.40672 7.25715 1.72109C6.53797 0.68207 5.33793 0 3.98145 0C1.78605 0 0 1.78605 0 3.98145C0 5.4166 0.763359 6.67676 1.90531 7.37746C1.68551 8.14012 1.57383 8.93035 1.57383 9.73016C1.57383 10.6939 1.73445 11.637 2.05059 12.5377C0.828594 13.2183 0 14.5234 0 16.0186C0 18.2139 1.78605 20 3.98145 20C5.52551 20 6.86707 19.1165 7.52723 17.8285C8.34402 18.0835 9.19363 18.2131 10.0568 18.2131C10.8851 18.2131 11.7018 18.0936 12.4886 17.8585C13.1541 19.1301 14.4866 20 16.0186 20C18.2139 20 20 18.2139 20 16.0186C20 14.5624 19.214 13.2865 18.0442 12.5922ZM16.0186 0.58707C17.8902 0.58707 19.4129 2.10977 19.4129 3.98141C19.4129 5.85309 17.8902 7.37578 16.0186 7.37578C14.1469 7.37578 12.6242 5.85309 12.6242 3.98141C12.6242 2.1098 14.1469 0.58707 16.0186 0.58707ZM16.6521 7.9123C17.0068 7.85535 17.3461 7.75148 17.6632 7.60707C17.8552 8.29613 17.9527 9.00871 17.9527 9.73016C17.9527 10.6232 17.8051 11.4959 17.5145 12.3291C17.191 12.1974 16.8464 12.1071 16.4873 12.0648C16.7591 11.3182 16.897 10.5348 16.897 9.73016C16.897 9.1123 16.8145 8.50246 16.6521 7.9123ZM10.0568 1.83426C10.8776 1.83426 11.683 1.95898 12.4559 2.20539C12.2996 2.51766 12.1832 2.85316 12.1133 3.20527C11.4499 2.99613 10.7598 2.88988 10.0568 2.88988C9.31457 2.88988 8.58859 3.00762 7.89328 3.23953C7.8266 2.88711 7.7134 2.55098 7.5602 2.23781C8.36332 1.97004 9.20152 1.83426 10.0568 1.83426ZM0.58707 3.98145C0.58707 2.1098 2.10977 0.587109 3.98141 0.587109C5.85309 0.587109 7.37578 2.1098 7.37578 3.98145C7.37578 5.85313 5.85309 7.37582 3.98141 7.37582C2.1098 7.37582 0.58707 5.85309 0.58707 3.98145ZM3.62215 12.0535C3.26078 12.0859 2.91316 12.1668 2.5859 12.2897C2.30406 11.4677 2.1609 10.6082 2.1609 9.73012C2.1609 9.0243 2.25418 8.32668 2.43805 7.65148C2.75859 7.7868 3.10047 7.88117 3.45703 7.92828C3.2975 8.51355 3.21652 9.11797 3.21652 9.73012C3.21652 10.5307 3.35316 11.3102 3.62215 12.0535ZM3.98145 19.4129C2.1098 19.4129 0.587109 17.8902 0.587109 16.0186C0.587109 14.1469 2.1098 12.6242 3.98145 12.6242C5.85313 12.6242 7.37582 14.1469 7.37582 16.0186C7.37582 17.8902 5.85309 19.4129 3.98145 19.4129ZM10.0568 17.6261C9.27223 17.6261 8.49988 17.5113 7.75633 17.285C7.86758 16.9543 7.93641 16.6042 7.95652 16.2414C8.63273 16.4596 9.33723 16.5704 10.0568 16.5704C10.7359 16.5704 11.403 16.4713 12.0456 16.2761C12.0688 16.6378 12.1404 16.9865 12.2543 17.3158C11.5425 17.5218 10.8048 17.6261 10.0568 17.6261ZM12.0537 15.6571C11.4118 15.8734 10.7411 15.9833 10.0568 15.9833C9.32961 15.9833 8.61941 15.8598 7.9427 15.6166C7.74926 13.6963 6.18559 12.1745 4.24711 12.0462C3.95289 11.3097 3.80359 10.5315 3.80359 9.73016C3.80359 9.12805 3.88914 8.53434 4.05762 7.96195C6.21793 7.92113 7.96285 6.15133 7.96285 3.98145C7.96285 3.93324 7.96168 3.88535 7.95996 3.83758C8.63129 3.59848 9.33555 3.47699 10.0567 3.47699C10.7366 3.47699 11.4031 3.58555 12.0414 3.79922C12.0386 3.85965 12.037 3.92035 12.037 3.98145C12.037 6.17684 13.8231 7.96293 16.0185 7.96293C16.0311 7.96293 16.0435 7.96258 16.0561 7.96246C16.2244 8.53461 16.3099 9.12816 16.3099 9.7302C16.3099 10.5294 16.1614 11.3055 15.8687 12.0402C13.8633 12.1148 12.2325 13.6796 12.0537 15.6571ZM16.0186 19.4129C14.1469 19.4129 12.6242 17.8902 12.6242 16.0186C12.6242 14.1469 14.1469 12.6242 16.0186 12.6242C17.8902 12.6242 19.4129 14.1469 19.4129 16.0186C19.4129 17.8902 17.8902 19.4129 16.0186 19.4129Z" fill="#0051FF"/>
    <path d="M17.3894 13.8875C17.2542 13.7979 17.0721 13.8351 16.9826 13.9702L16.0247 15.4176L15.0574 13.9603C14.9678 13.8252 14.7855 13.7884 14.6505 13.878C14.5155 13.9677 14.4787 14.1499 14.5683 14.2849L15.5912 15.8259H14.8153C14.6532 15.8259 14.5218 15.9573 14.5218 16.1194C14.5218 16.2816 14.6532 16.413 14.8153 16.413H15.7303L15.7293 16.8251H14.8153C14.6531 16.8251 14.5217 16.9565 14.5217 17.1187C14.5217 17.2808 14.6531 17.4122 14.8153 17.4122H15.728L15.7268 17.9172C15.7264 18.0793 15.8576 18.211 16.0197 18.2114H16.0204C16.1822 18.2114 16.3135 18.0804 16.3139 17.9185L16.3151 17.4122H17.2249C17.3871 17.4122 17.5185 17.2808 17.5185 17.1187C17.5185 16.9565 17.3871 16.8251 17.2249 16.8251H16.3164L16.3174 16.413H17.2249C17.3871 16.413 17.5185 16.2816 17.5185 16.1194C17.5185 15.9573 17.3871 15.8259 17.2249 15.8259H16.4585L17.4722 14.2943C17.5617 14.1591 17.5246 13.9769 17.3894 13.8875Z" fill="#0051FF"/>
    <path d="M4.25348 6.14798V5.91364C4.76797 5.78868 5.09797 5.35169 5.17043 4.92083C5.26422 4.36286 4.97274 3.87786 4.42785 3.68529C4.37047 3.66501 4.31199 3.64392 4.25348 3.62212V2.60462C4.37754 2.64708 4.45008 2.70833 4.45574 2.71329C4.5086 2.7645 4.58055 2.79615 4.66 2.79615C4.82223 2.79615 4.95379 2.66462 4.95379 2.50236C4.95379 2.41298 4.91383 2.33298 4.85086 2.27911C4.83723 2.2665 4.61621 2.06751 4.25352 1.99935V1.81486C4.25352 1.65271 4.12211 1.5213 3.95996 1.5213C3.79782 1.5213 3.66641 1.65271 3.66641 1.81486V2.01993C3.64364 2.02568 3.62063 2.032 3.59735 2.039C3.23621 2.14779 2.96645 2.45622 2.8934 2.844C2.82645 3.19935 2.94149 3.5429 3.1936 3.74064C3.31574 3.83642 3.4652 3.92423 3.66641 4.01583V5.35103C3.51543 5.33232 3.40504 5.28466 3.22989 5.17009C3.0943 5.08138 2.91231 5.11935 2.82356 5.25505C2.73481 5.39072 2.77285 5.57263 2.90852 5.66138C3.20477 5.85517 3.41242 5.92087 3.66641 5.94099V6.1479C3.66641 6.31005 3.79782 6.44146 3.95996 6.44146C4.12207 6.4415 4.25348 6.31009 4.25348 6.14798ZM4.25348 4.24689C4.63176 4.39298 4.60817 4.72396 4.59145 4.82345C4.56125 5.00306 4.44657 5.19247 4.25348 5.29173V4.24689ZM3.66641 3.35443C3.62617 3.32974 3.58883 3.30458 3.5559 3.27872C3.47813 3.21767 3.44449 3.08974 3.47032 2.95279C3.49043 2.84615 3.55207 2.72181 3.66641 2.64779V3.35443Z" fill="#0051FF"/>
    <path d="M10.0001 6.2113C7.91104 6.2113 6.21143 7.91091 6.21143 9.99998C6.21143 12.089 7.91104 13.7886 10.0001 13.7886C12.0892 13.7886 13.7888 12.089 13.7888 9.99998C13.7888 7.91091 12.0892 6.2113 10.0001 6.2113ZM12.8487 8.54142H11.7523C11.6689 8.12459 11.5496 7.73982 11.3972 7.4065C11.335 7.27056 11.2683 7.1456 11.1977 7.03166C11.912 7.32087 12.4986 7.86052 12.8487 8.54142ZM11.3047 9.99998C11.3047 10.3068 11.2863 10.5981 11.2532 10.8715H8.74697C8.71389 10.5981 8.69541 10.3068 8.69541 9.99998C8.69541 9.69318 8.71385 9.40185 8.74697 9.12849H11.2532C11.2863 9.40185 11.3047 9.69318 11.3047 9.99998ZM10.0001 6.79837C10.441 6.79837 10.9178 7.4699 11.1541 8.54138H8.84611C9.08244 7.4699 9.5592 6.79837 10.0001 6.79837ZM8.80256 7.03162C8.73193 7.1456 8.66521 7.27052 8.60307 7.40646C8.45064 7.73978 8.33135 8.12451 8.24791 8.54138H7.15154C7.50158 7.86052 8.08818 7.32087 8.80256 7.03162ZM6.7985 9.99998C6.7985 9.69787 6.84147 9.40576 6.92006 9.12849H8.15662C8.1249 9.41084 8.10834 9.70283 8.10834 9.99998C8.10834 10.2971 8.12486 10.5891 8.15662 10.8715H6.92006C6.84147 10.5942 6.7985 10.3021 6.7985 9.99998ZM7.1515 11.4586H8.24787C8.33131 11.8754 8.45061 12.2602 8.60303 12.5935C8.66518 12.7294 8.73189 12.8544 8.80252 12.9683C8.08818 12.6791 7.50158 12.1394 7.1515 11.4586ZM10.0001 13.2016C9.5592 13.2016 9.08244 12.5301 8.84607 11.4586H11.1541C10.9178 12.5301 10.441 13.2016 10.0001 13.2016ZM11.1974 12.9684C11.2681 12.8544 11.3349 12.7295 11.3971 12.5935C11.5496 12.2601 11.6688 11.8754 11.7523 11.4585H12.8487C12.4986 12.1395 11.9119 12.6792 11.1974 12.9684ZM11.8436 10.8715C11.8753 10.5891 11.8918 10.2971 11.8918 9.99998C11.8918 9.70283 11.8753 9.41084 11.8436 9.12849H13.0801C13.1587 9.4058 13.2017 9.69787 13.2017 9.99998C13.2017 10.3021 13.1587 10.5942 13.0801 10.8715H11.8436Z" fill="#0051FF"/>
    </svg>

                </div>
                <div class="tab-text uppercase text-sm font-bold text-[#7A8DB4] transition group-hover:text-cblue">All</div>
            </button>
        </li>
        <li class="">
            <button type="button"  class="tab-link  px-4 py-2 group w-[125px] flex flex-col  items-center">
                <div class="tab-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 0C4.48625 0 0 4.48625 0 10C0 15.5138 4.48625 20 10 20C15.5138 20 20 15.5138 20 10C20 4.48625 15.5138 0 10 0ZM10 18.75C5.175 18.75 1.25 14.825 1.25 10C1.25 5.175 5.175 1.25 10 1.25C14.825 1.25 18.75 5.175 18.75 10C18.75 14.825 14.825 18.75 10 18.75Z" fill="#7A8DB4"/>
    <path d="M12.1475 13.2712C11.6825 13.5887 11.17 13.75 10.625 13.75C9.47375 13.75 8.47625 12.99 7.935 11.875H10C10.345 11.875 10.625 11.595 10.625 11.25C10.625 10.905 10.345 10.625 10 10.625H7.5525C7.52375 10.4212 7.5 10.2137 7.5 10C7.5 9.78625 7.52375 9.57875 7.5525 9.375H10.625C10.97 9.375 11.25 9.095 11.25 8.75C11.25 8.405 10.97 8.125 10.625 8.125H7.935C8.47625 7.01 9.47375 6.25 10.625 6.25C11.17 6.25 11.6825 6.41125 12.1475 6.72875C12.4325 6.9225 12.8225 6.85125 13.0163 6.565C13.2113 6.28 13.1375 5.89125 12.8525 5.69625C12.185 5.24125 11.415 5 10.625 5C8.79375 5 7.22625 6.29625 6.575 8.125H5.625C5.28 8.125 5 8.405 5 8.75C5 9.095 5.28 9.375 5.625 9.375H6.305C6.2825 9.5825 6.25 9.78625 6.25 10C6.25 10.2137 6.2825 10.4175 6.305 10.625H5.625C5.28 10.625 5 10.905 5 11.25C5 11.595 5.28 11.875 5.625 11.875H6.575C7.22625 13.7037 8.79375 15 10.625 15C11.415 15 12.185 14.7587 12.8525 14.3038C13.1375 14.1087 13.2113 13.72 13.0163 13.435C12.8225 13.15 12.4325 13.0775 12.1475 13.2712Z" fill="#7A8DB4"/>
    </svg>


                </div>
                <div class="tab-text uppercase text-sm font-bold text-[#7A8DB4] transition group-hover:text-cblue">Europe</div>
            </button>
        </li>
        <li class="">
            <button type="button"  class="tab-link  px-4 py-2 group w-[125px] flex flex-col  items-center">
                <div class="tab-icon">
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.625 0C5.11005 0 0.625 4.48505 0.625 10C0.625 15.515 5.11005 20 10.625 20C16.14 20 20.625 15.515 20.625 10C20.625 4.48505 16.14 0 10.625 0ZM10.625 1.33333C15.4194 1.33333 19.2969 5.20564 19.2969 10C19.2969 14.7944 15.4194 18.6719 10.625 18.6719C5.83064 18.6719 1.95833 14.7944 1.95833 10C1.95833 5.20564 5.83064 1.33333 10.625 1.33333ZM10.6159 4.67057C10.4398 4.67367 10.272 4.74635 10.1493 4.87273C10.0266 4.9991 9.95886 5.16891 9.96094 5.34505V5.90625C8.8845 6.10818 7.96354 6.80134 7.96354 8.0026C7.96354 8.83594 8.33922 9.50993 8.84375 9.90234C9.34828 10.2948 9.91797 10.4687 10.418 10.6354C10.918 10.8021 11.3496 10.9614 11.5951 11.1523C11.8405 11.3433 11.9583 11.5039 11.9583 12.0039C11.9583 13.115 9.29688 13.115 9.29688 12.0039C9.29884 11.9151 9.28306 11.8268 9.25044 11.7442C9.21782 11.6616 9.16903 11.5863 9.10693 11.5229C9.04483 11.4594 8.97067 11.4089 8.88881 11.3745C8.80694 11.34 8.71902 11.3223 8.63021 11.3223C8.54139 11.3223 8.45347 11.34 8.37161 11.3745C8.28975 11.4089 8.21559 11.4594 8.15349 11.5229C8.09139 11.5863 8.0426 11.6616 8.00998 11.7442C7.97736 11.8268 7.96157 11.9151 7.96354 12.0039C7.96354 13.2042 8.88532 13.8987 9.96094 14.1016V14.6602C9.95897 14.7489 9.97476 14.8372 10.0074 14.9198C10.04 15.0025 10.0888 15.0777 10.1509 15.1412C10.213 15.2047 10.2871 15.2551 10.369 15.2896C10.4509 15.324 10.5388 15.3418 10.6276 15.3418C10.7164 15.3418 10.8043 15.324 10.8862 15.2896C10.9681 15.2551 11.0422 15.2047 11.1043 15.1412C11.1664 15.0777 11.2152 15.0025 11.2478 14.9198C11.2805 14.8372 11.2962 14.7489 11.2943 14.6602V14.1016C12.3701 13.8988 13.293 13.2044 13.293 12.0039C13.293 11.1706 12.916 10.4966 12.4115 10.1042C11.9069 9.71175 11.3372 9.53646 10.8372 9.36979C10.3372 9.20312 9.90562 9.04508 9.66016 8.85417C9.41469 8.66325 9.29688 8.5026 9.29688 8.0026C9.29688 6.89149 11.9583 6.89149 11.9583 8.0026C11.9583 8.17959 12.0286 8.34932 12.1538 8.47447C12.2789 8.59962 12.4487 8.66992 12.6257 8.66992C12.8026 8.66992 12.9724 8.59962 13.0975 8.47447C13.2227 8.34932 13.293 8.17959 13.293 8.0026C13.293 6.80315 12.3698 6.11068 11.2943 5.90755V5.34505C11.2953 5.25586 11.2785 5.16736 11.2447 5.08479C11.2109 5.00223 11.1609 4.92729 11.0977 4.86439C11.0344 4.8015 10.9592 4.75194 10.8764 4.71865C10.7937 4.68536 10.7051 4.66901 10.6159 4.67057Z" fill="#7A8DB4"/>
    </svg>

                </div>
                <div class="tab-text uppercase text-sm font-bold text-[#7A8DB4] transition group-hover:text-cblue">America</div>
            </button>
        </li>
        <li class="">
            <button type="button"  class="tab-link  px-4 py-2 group w-[125px] flex flex-col  items-center">
                <div class="tab-icon">                
                    <svg  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">



        <path fill="#7A8DB4" d="M10,0.1c-5.5,0-9.9,4.3-9.9,9.9c0,5.5,4.3,9.9,9.9,9.9s9.9-4.3,9.9-9.9C19.9,4.5,15.5,0.1,10,0.1z M10,18.6
            c-4.8,0-8.6-3.8-8.6-8.6c0-4.8,3.8-8.6,8.6-8.6s8.6,3.8,8.6,8.6C18.6,14.8,14.8,18.6,10,18.6z"/>
        <path fill="#7A8DB4" d="M13,8.3C13,7,11.9,6,10.6,6H7v8h1.2v-3.4H10c1,0,1.8,0.8,1.8,1.7V14H13v-1.7c0-0.9-0.4-1.6-1-2.1
            C12.6,9.7,13,9.1,13,8.3z M8.2,9.4V7.1h2.4c0.7,0,1.2,0.5,1.2,1.1c0,0.6-0.5,1.1-1.2,1.1H8.2z"/>

    </svg>



                </div>
                <div class="tab-text uppercase text-sm font-bold text-[#7A8DB4] transition group-hover:text-cblue">Africa</div>
            </button>
        </li>
        <li class="">
            <button type="button"  class="tab-link  px-4 py-2 group w-[125px] flex flex-col  items-center">
                <div class="tab-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.61539 1.53846C5.15462 1.53846 1.53846 5.15462 1.53846 9.61539V10.3846C1.53846 14.8454 5.15462 18.4615 9.61539 18.4615H10.3846C14.8454 18.4615 18.4615 14.8454 18.4615 10.3846V9.61539C18.4615 5.15462 14.8454 1.53846 10.3846 1.53846H9.61539ZM9.61539 0H10.3846C15.695 0 20 4.30495 20 9.61539V10.3846C20 15.695 15.695 20 10.3846 20H9.61539C4.30495 20 0 15.695 0 10.3846V9.61539C0 4.30495 4.30495 0 9.61539 0Z" fill="#7A8DB4"/>
    <path d="M13.3657 4.78395C13.6974 4.51856 14.1815 4.57234 14.4469 4.90408C14.7123 5.23582 14.6585 5.71989 14.3267 5.98528L10.4806 9.06221C10.1997 9.28696 9.80046 9.28696 9.51952 9.06221L5.67337 5.98528C5.34163 5.71989 5.28784 5.23582 5.55323 4.90408C5.81863 4.57234 6.3027 4.51856 6.63444 4.78395L10.0001 7.47644L13.3657 4.78395Z" fill="#7A8DB4"/>
    <path d="M10.7692 15.3846C10.7692 15.8095 10.4248 16.1539 9.99994 16.1539C9.57511 16.1539 9.23071 15.8095 9.23071 15.3846V8.46155C9.23071 8.03672 9.57511 7.69232 9.99994 7.69232C10.4248 7.69232 10.7692 8.03672 10.7692 8.46155V15.3846Z" fill="#7A8DB4"/>
    <path d="M7.69233 10.7692C7.26749 10.7692 6.9231 10.4248 6.9231 10C6.9231 9.57517 7.26749 9.23077 7.69233 9.23077H12.3077C12.7325 9.23077 13.0769 9.57517 13.0769 10C13.0769 10.4248 12.7325 10.7692 12.3077 10.7692H7.69233Z" fill="#7A8DB4"/>
    <path d="M7.69233 13.0769C7.26749 13.0769 6.9231 12.7325 6.9231 12.3077C6.9231 11.8828 7.26749 11.5385 7.69233 11.5385H12.3077C12.7325 11.5385 13.0769 11.8828 13.0769 12.3077C13.0769 12.7325 12.7325 13.0769 12.3077 13.0769H7.69233Z" fill="#7A8DB4"/>
    </svg>


                </div>
                <div class="tab-text uppercase text-sm font-bold text-[#7A8DB4] transition group-hover:text-cblue">Asia</div>
            </button>
        </li>

                        </ul>
                        <div class="tab-content">
                        <div class="tab-pane"> 
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
                                        </div></div>
                        <div class="tab-pane hidden">Content 2</div>
                        <div class="tab-pane hidden">Content 3</div>
                        <div class="tab-pane hidden">Content 4</div>
                        <div class="tab-pane hidden">Content 5</div>
                        </div>
                    </div>
                       


                    <div class="content-text">
                        <div class="bg-white p-6 rounded-[10px] mb-8">
                            <h2 class="text-xl font-bold text-black mb-3">Foreign currency rates</h2>
                            <p class="text-base font-normal">The exchange rates indicate the relationship between the currencies of different countries. Above you will find the current exchange rates of all currencies against the euro. These are the exchange rates as used for international trade. When you go on holiday, you will notice when calculating the exchange rates that the converted prices deviate slightly from these exchange rates. This also applies if you want to exchange currency yourself at a border exchange office or the bank. These sometimes use a different rate and charge a commission for their services. With the calculator on Wisselkoers.nl you can easily convert foreign currencies yourself. This way you have an indication of the value of the foreign currency compared to the euro and you can estimate what something costs abroad.</p>
                        </div>
                        <div class="bg-white p-6 rounded-[10px] mb-8">
                            <h2 class="text-xl font-bold text-black mb-3">Did you know</h2>
                            <p class="text-base font-normal">The exchange rate of a currency is determined by supply and demand in the international currency market. When demand exceeds supply, the price rises. If the Netherlands invests in the US, there will be more demand for US dollars, for example. As a result, the exchange rate of the dollar rises. If there is more supply than demand for a currency, the price will fall.Imports, exports and international investments therefore have a major influence on exchange rates. At least this is true for most foreign currencies, as they have a flexible or floating rate. However, there are also countries that have a fixed currency rate. These are often countries with a weak economy that still want to conduct international trade. By offering a fixed exchange rate against the US dollar, they give their trading partners certainty about the value of their currency.</p>
                        </div>
                    </div>
                   

                    
 
                </div>
                <div class="w-full lg:w-[298px]">
                    <div class="sidebar-wrapper">
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
</template>