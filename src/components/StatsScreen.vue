<template>
  <div className="card">
    <Chart v-if="lastGames.length >0" type="line" :data="chartData" :options="chartOptions" class="h-30rem"/>
    <div v-else className="p-d-flex p-jc-center p-ai-center p-text-center p-text-bold p-text-italic p-mt-5rem">
      <p>Start playing to see your stats</p>
    </div>
  </div>
</template>

<script>
import Chart from "primevue/chart";

export default {
  name: "StatsScreen",
  components: {
    Chart
  },
  data() {
    return {
      lastGames: [],
      chartData: null,
      chartOptions: null
    };
  },
  mounted() {
    // fetch lastGames from local storage
    this.lastGames = JSON.parse(localStorage.getItem('lastGames')) || [];
    this.chartData = this.getRates();
    this.chartOptions = this.setChartOptions();
  },
  methods: {
    setChartOptions() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

      return {
        stacked: false,
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
          legend: {
            labels: {
              color: textColor
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: textColorSecondary
            },
            grid: {
              color: surfaceBorder
            }
          },
          y: {
            type: 'linear',
            display: true,
            position: 'left',
            ticks: {
              beginAtZero: true,   // minimum value will be 0.
              suggestedMax: 26,
              color: textColorSecondary
            },
            grid: {
              color: surfaceBorder
            }
          },
        }
      };
    },
    getRates() {
      let labels = []
      let dataUnknown = [];
      let dataKnown = [];
      // sort lastGames by date
      this.lastGames.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      });
      this.lastGames.forEach(game => {
        // date to format DD-MM-YYYY
        let date = new Date(game.date)
        date = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
        labels.push(date);
        // filter letters for known and unknwon
        let known = Object.keys(game.letters).filter(letter => game.letters[letter].found && !game.letters[letter].tries).length
        let unknown = Object.keys(game.letters).filter(letter => game.letters[letter].found && game.letters[letter].tries).length
        dataKnown.push(known);
        dataUnknown.push(unknown);
      });
      return {
        labels: labels,
        datasets: [
          {
            label: "Known",
            data: dataKnown,
            fill: false,
            tension: 0.2
          },
          {
            label: "Unknown",
            data: dataUnknown,
            fill: false,
            tension: 0.2
          }
        ]
      };
    }
  }
};
</script>