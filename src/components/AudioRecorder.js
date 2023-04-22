export default class AudioRecorder {
	constructor(context,cfg) {
		this.consumers = [];
		const config = cfg || {};
		this.context = context;
		this.errorCallback = config.errorCallback || function () {
		};
		this.recording = false;
	}

	async init() {
		this.microphone = await navigator.mediaDevices.getUserMedia({ audio: true });
		this.source = this.context.createMediaStreamSource(this.microphone);

		await this.context.audioWorklet.addModule('/js/recorder.worklet.js');
		this.recorder = new AudioWorkletNode(this.context, 'recorder.worklet');

		this.source.connect(this.recorder).connect(this.context.destination);
		console.log("Your microphone audio is being used.");

		let self = this;

		this.audiobuffer = [];

		this.recorder.port.onmessage = (e) => {
			if (e.data) {
				if (e.data.error && (e.data.error == "silent")) {
					self.errorCallback("silent");
				} else {
					self.audiobuffer.push(e.data);
				}
			}
		}

		this.start = function(data) {
			this.context.resume()
			this.recording = true;
			return (this.consumers.length > 0);
		}

		this.stop = function() {

			self.consumers.forEach(function(consumer) {
				consumer.transcript(self.audiobuffer)
			});
			self.audiobuffer = [];
			this.recording = false;
			this.context.suspend();
		}
	}
}
