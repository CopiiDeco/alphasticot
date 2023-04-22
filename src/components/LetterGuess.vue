<template>
  <div class="home card">
    <div class="home grid main-container min-h-full p-4">
      <div class="col left">
        <div class="flex flex-wrap justify-content-end card-container gap-0 w-full">
          <div class="flex flex-wrap card-container gap-0 max-w-8rem">
            <div v-for="entry in lettersWithBackground" :key="entry.letter" class="w-2rem h-2rem font-bold flex align-items-center justify-content-center" :class=entry.background>
              {{entry.letter}}
            </div>
          </div>
        </div>
      </div>
      <div class="col middle text-8xl font-bold align-content-center text-center vertical-align-middle">
        <StatsScreen v-if="statsActive"/>
        <div v-if="!statsActive" class="flex flex-wrap justify-content-center card-container gap-0 w-full">
          <div class="flex align-items-center justify-content-center w-12rem h-12rem font-bold border-round m-2 align-content-center surface-500">

            <div v-if="!statsActive" >
              <div v-if="gameStatus === 'NOT_STARTED'" >
                <!-- a button that will call the start method when clicked -->
                <a @click="startGame">
                  <i class="pi pi-play" style="font-size: 6rem"></i>
                </a>
              </div>
              <div v-if="gameStatus === 'WON'">
                <i class="pi pi-thumbs-up-fill" style="font-size: 6rem"></i>
              </div>
              <div v-if="gameStatus === 'STARTED'">
                <!-- for each of the colors in the colors data, create a span with the color as the text content and the backround with this color -->
                <!-- a div of 50% width, centered, display block, with a background color of the color variable -->
                  {{pickedLetter}}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col right justify-content-start">
        <div class="flex flex-wrap justify-content-start card-container gap-0 w-full">
          <div class="flex flex-column card-container green-container">
            <div  v-if="gameStatus === 'STARTED'" class="flex align-items-center justify-content-center h-4rem font-bold border-round m-2">
              <Button @click="foundLetter" icon="pi pi-check" rounded/>
            </div>
            <div  v-if="gameStatus === 'STARTED'" class="flex align-items-center justify-content-center h-4rem font-bold border-round m-2">
              <Button @click="notFoundLetter" icon="pi pi-times" rounded/>
            </div>
            <!-- a small button that will text to speech the pickedLetter -->
            <div v-if="gameStatus === 'STARTED' && letters[pickedLetter].tries" class="flex align-items-center justify-content-center h-4rem font-bold border-round m-2">
              <Button @click="speakLetter" icon="pi pi-volume-up" rounded/>
            </div>
            <div  v-if="gameStatus !== 'STARTED'" class="flex align-items-center justify-content-center h-4rem font-bold  border-round m-2">
              <Button v-if="!statsActive" @click="showStats" rounded icon="pi pi-chart-bar"/>
              <Button v-if="statsActive" @click="hideStats" rounded icon="pi pi-step-backward"/>
            </div>
            <div class="flex align-items-center justify-content-center h-4rem font-bold border-round m-2">
              <Button v-if="statsActive" @click="clearStats" rounded icon="pi pi-trash"/>
            </div>
            <div v-if="gameStatus === 'WON'">
              <Button @click="startGame" rounded icon="pi pi-undo"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'primeicons/primeicons.css';
import "primeflex/primeflex.css";

//core
import "primevue/resources/primevue.min.css";
import StatsScreen from "@/components/StatsScreen";
import Button from 'primevue/button';



export default {
  name: 'LetterGuess',
  components: {
    StatsScreen,
    Button,
  },
  data () {
    return {
      // gameStatus is an enum of NOT_STARTED, STARTED, WON, LOST
      gameStatus: 'NOT_STARTED',
      letters: {},
      synth: window.speechSynthesis,
      pickedLetter: '',
      statsActive: false,
    }
  },
  computed: {
    lettersWithBackground() {
      return Object.keys(this.letters).map(key => {
        return {
          letter: key,
          background: this.letters[key].found ? 'bg-green-500' : this.letters[key].tries ? 'bg-red-500' : 'opacity-0',
        }
      })
    },
  },
  mounted() {
    console.log('mounted starting')
    this.gameStarted = false;
  },
  methods: {
    hideStats: function () {
      this.statsActive = false;
    },
    clearStats: function () {
      // push an empty object in the lastGames local storage entry
      localStorage.setItem('lastGames', JSON.stringify([]));
      this.statsActive = false;
    },
    showStats: function () {
      this.statsActive = true;
    },
    speakLetter: function () {
      var msg = new SpeechSynthesisUtterance(this.pickedLetter.toLowerCase());
      // french voice

      msg.voice = this.synth.getVoices().find(voice => voice.lang === 'fr-FR');
      window.speechSynthesis.speak(msg);
    },
    incrementTries(letter) {
      if (letter.tries) {
        letter.tries++;
      } else {
        letter.tries = 1;
      }
    },
    notFoundLetter: function () {
      this.letters[this.pickedLetter].found = false;
      this.incrementTries(this.letters[this.pickedLetter]);
      this.startRound();
    },
    foundLetter: function () {
      this.letters[this.pickedLetter].found = true;
      this.startRound();
    },
    startGame: function () {
      this.gameStatus = 'STARTED'
      this.letters={};
      // we init the letters object with one attribute per letter
      for (var i = 65; i <= 90; i++) {
        this.letters[String.fromCharCode(i)] = {found: false};
      }
      this.startRound();
    },
    startRound: function () {
      this.pickLetter();
    },
    pickLetter() {
      // pick a random letter from the letters object properties that has not been found yet
      let keys = Object.keys(this.letters).filter(key => !this.letters[key].found && !this.letters[key].tries);
      //if we have no more letters to pick, we pick from the ones that have been tried
      if(keys.length === 0) {
        keys = Object.keys(this.letters).filter(key => !this.letters[key].found);
      }
      if(keys.length === 0) {
        this.endGame();
        return;
      }
      this.pickedLetter = keys[Math.floor(Math.random() * keys.length)];
    },
    endGame() {
      this.gameStatus = 'WON';
      // we init the local storage with lastGames if not already done
      if(!localStorage.getItem('lastGames')) {
        localStorage.setItem('lastGames', JSON.stringify([]));
      }
      // we add the current game stats to the lastGames array
      let gamesStats = {
        date: new Date(),
        letters: this.letters,
        known: Object.keys(this.letters).filter(letter => letter.found && !letter.tries).length,
        unknown: Object.keys(this.letters).filter(letter => letter.found && letter.tries).length,
      }
      let lastGames = JSON.parse(localStorage.getItem('lastGames'));
      lastGames.push(gamesStats);
      this.letters={}
      localStorage.setItem('lastGames', JSON.stringify(lastGames));
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
:root {
  --font-family: 'Helvetica', sans-serif;
}


.home {
  height: 100vh;
}
.middle{
  /*half the height of its container*/
  height: 50%;
}
</style>
