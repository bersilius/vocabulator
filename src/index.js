const synthesizer = window.speechSynthesis

let voices = synthesizer.getVoices()

if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = () => {
        voices = synthesizer.getVoices()
    }
}

const init = config => {
    const say = message => {
        const utterance = new SpeechSynthesisUtterance(message.text)

        const language = message.language || config.language
        const voiceName = message.voiceName || config.voiceName

        utterance.voice = voices.find(voice => voice.lang === language && voice.name === voiceName)
        utterance.pitch = message.pitch || config.pitch || 1
        utterance.rate = message.rate || config.rate || 1

        synthesizer.speak(utterance)
    }

    const pause = () => {
        synthesizer.pause()
    }

    const resume = () => {
        synthesizer.resume()
    }

    const cancel = () => {
        synthesizer.cancel()
    }
    
    return {
        say,
        cancel,
        pause,
        resume,
    }
}

export default init
