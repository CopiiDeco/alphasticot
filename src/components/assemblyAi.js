//import axios from "axios";
import axios from "axios";

export default class assemblyAi {
refreshInterval = 5000
assembly = axios.create({
    baseURL: "https://api.assemblyai.com/v2",
    headers: {
        authorization: "2306d87f5b444fabb4d165e250b45f0c",
        "content-type": "application/json",
        "transfer-encoding": "chunked",
    },
});
async transcript(data){
    let url = await this.uploadFile(data)
    return this.getTranscript(url)
}
// post the buffer for upload and return the upload_url in the body of the response
async uploadFile(data) {
    return await this.assembly
        .post("/upload", data)
        .then((res) => res.data.upload_url)
        .catch((err) => console.error(err));
}


async getTranscript (url) {
    // Sends the audio file to AssemblyAI for transcription
    const response = await this.assembly
        .post("/transcript", {
            audio_url: url
        })
        .then((res) => res)
        .catch((err) => console.error(err));


    // Interval for checking transcript completion
    const checkCompletionInterval = setInterval(async () => {
        const transcript = await this.assembly.get(`/transcript/${response.data.id}`)
        const transcriptStatus = transcript.data.status

        if (transcriptStatus !== "completed") {
            console.log(`Transcript Status: ${transcriptStatus}`)
            return
        } else if (transcriptStatus === "completed") {
            console.log("\nTranscription completed!\n")
            let transcriptText = transcript.data.text
            console.log(`Your transcribed text:\n\n${transcriptText}`)
            clearInterval(checkCompletionInterval)
            return transcriptText
        }
    }, this.refreshInterval)
}
}