<template>
  <h2>Bite</h2>
  <ul>
    <li>This demo works on recent versions of Chrome and Firefox with the Web Audio API, make sure it works for you and
      actually records audio.
    </li>
    <li>Press "Start" and speak</li>
  </ul>
  <div v-if="isRecognizerReady && !isRecorderReady">
    <button id="startBtn" @click="startRecorder">Start</button>
  </div>
  <div v-if="isRecognizerReady && isRecorderReady">
    <button id="startBtn" @click="startRecording">Start</button>
    <button id="stopBtn" @click="stopRecording">Stop</button>
  </div>
  <span id="recording-indicator"
        style="border-radius: 10px; -moz-border-radius: 10px; -webkit-border-radius: 10px; width: 20px; height: 20px; background: red;"></span>
  <h2>Recognition Output</h2>
  <div id="output" style="height:150px;overflow:auto;">
    {{ hypothesis }}
  </div>
  <div id="status" style="height:150px;overflow:auto;">
  <h2>Status</h2>
  <span v-bind:key="status" v-for="status in statusMsg">
      {{ status }}<br/>
    </span>
  </div>
</template>


<script>

import AudioRecorder from '@/components/AudioRecorder';
import assemblyAi from "@/components/assemblyAi";


export default {
  name: 'HelloWorld',
  components: {},
  data: function () {
    return {
      selectedGrammarId: 0,
      grammarIds: [],
      selectedGrammar: null,
      hypothesis: '',
      recognizer: null,
      recorder: null,
      callbackManager: null,
      audioContext: null,
      isRecorderReady: false,
      isRecognizerReady: false,
      statusMsg: ['Initializing...'],
    }
  },
  methods: {
    startRecorder() {

      this.audioContext = new AudioContext();
      try {
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

        navigator.getUserMedia(
            {audio: true, video: false},
            this.startUserMedia,
            this.onMicrophoneDenied
        );
      } catch (e) {
        console.log('catched error' + e)
        this.updateStatus("No live audio input in this browser");
      }
    },

// This is just a logging window where we display the status
    updateStatus(newStatus) {
      //console.log('status update: ' + newStatus);
      this.statusMsg.push(newStatus);
    },


// Callback function once the user authorises access to the microphone
// in it, we instanciate the recorder
    async startUserMedia() {
      let self = this;
      var audioRecorderConfig = {
        errorCallback: function (x) {
          self.updateStatus("Error from recorder: " + x);
        }
      };
      this.recorder = new AudioRecorder(this.audioContext,audioRecorderConfig);


      console.log('recorder init')
      await this.recorder.init()
      console.log('recorder init done')
      // If a recognizer is ready, we pass it to the recorder
      if (this.recognizer) this.recorder.consumers = [this.recognizer];

      this.isRecorderReady = true;
      this.updateStatus("Audio recorder ready");
    },

// This starts recording. We first need to get the id of the grammar to use
    startRecording() {
      if (this.recorder && this.recorder.start()){
        console.log('recording started')
      }
    },

// Stops recording
    stopRecording() {
      this.recorder && this.recorder.stop();
    },

    onMicrophoneDenied() {
      console.log('denied')
    },
  },
async mounted() {
    this.updateStatus("Initializing web audio and speech recognizer, waiting for approval to access the microphone");
    this.recognizer = new assemblyAi()
  this.isRecognizerReady = true;
  }
}
</script>
