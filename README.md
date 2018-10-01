# vocabulator
TTS module for SpeechSynthesis API

## Usage

```javascript
import vocabulator from 'vocabulator';

const synthesizer = vocabulator({
    language: 'en-GB',
    voiceName: 'Google UK English Male',
    pitch: 1
});

synthesizer.say({ text: 'Hello, world!', /* language, voiceName, pitch, ... */  })
```

## Options

If you do not provide any options on initialization, built-in options will be used.
Options provided on initialization will be used by default instead of built-in.
Same options can be provided with each `say` call, and it will override the init config for that specific utterance.

### Available options

#### language

See voices with languages below.

#### voiceName

See voices with languages below.

#### pitch

Float. Pitch of the voice.

#### rate

Float. Rate of the voice.

#### onend

Function as callback on event.

The end event of the Web Speech API SpeechSynthesisUtterance object is fired when the utterance has finished being spoken.

#### onerror

Function as callback on event.

The error event of the Web Speech API SpeechSynthesisUtterance object is fired when an error occurs that prevents the utterance from being succesfully spoken.

#### onmark

Function as callback on event.

The mark event of the Web Speech API SpeechSynthesisUtterance object is fired when the spoken utterance reaches a named SSML "mark" tag.

#### onpause

Function as callback on event.

The pause event of the Web Speech API SpeechSynthesisUtterance object is fired when the utterance is paused part way through.

#### onresume

Function as callback on event.

The resume event of the Web Speech API SpeechSynthesisUtterance object is fired when a paused utterance is resumed.

#### onstart

Function as callback on event.

The start event of the Web Speech API SpeechSynthesisUtterance object is fired when the utterance has begun to be spoken.

### Voices

#### Chrome

```
- voiceURI: "Google Deutsch"
  name: "Google Deutsch"
  lang: "de-DE"
  localService: false
  default: true
- voiceURI: "Google US English"
  name: "Google US English"
  lang: "en-US"
  localService: false
  default: false
- voiceURI: "Google UK English Female"
  name: "Google UK English Female"
  lang: "en-GB"
  localService: false
  default: false
- voiceURI: "Google UK English Male"
  name: "Google UK English Male"
  lang: "en-GB"
  localService: false
  default: false
- voiceURI: "Google español"
  name: "Google español"
  lang: "es-ES"
  localService: false
  default: false
- voiceURI: "Google español de Estados Unidos"
  name: "Google español de Estados Unidos"
  lang: "es-US"
  localService: false
  default: false
- voiceURI: "Google français"
  name: "Google français"
  lang: "fr-FR"
  localService: false
  default: false
- voiceURI: "Google हिन्दी"
  name: "Google हिन्दी"
  lang: "hi-IN"
  localService: false
  default: false
- voiceURI: "Google Bahasa Indonesia"
  name: "Google Bahasa Indonesia"
  lang: "id-ID"
  localService: false
  default: false
- voiceURI: "Google italiano"
  name: "Google italiano"
  lang: "it-IT"
  localService: false
  default: false
- voiceURI: "Google 日本語"
  name: "Google 日本語"
  lang: "ja-JP"
  localService: false
  default: false
- voiceURI: "Google 한국의"
  name: "Google 한국의"
  lang: "ko-KR"
  localService: false
  default: false
- voiceURI: "Google Nederlands"
  name: "Google Nederlands"
  lang: "nl-NL"
  localService: false
  default: false
- voiceURI: "Google polski"
  name: "Google polski"
  lang: "pl-PL"
  localService: false
  default: false
- voiceURI: "Google português do Brasil"
  name: "Google português do Brasil"
  lang: "pt-BR"
  localService: false
  default: false
- voiceURI: "Google русский"
  name: "Google русский"
  lang: "ru-RU"
  localService: false
  default: false
- voiceURI: "Google 普通话（中国大陆）"
  name: "Google 普通话（中国大陆）"
  lang: "zh-CN"
  localService: false
  default: false
- voiceURI: "Google 粤語（香港）"
  name: "Google 粤語（香港）"
  lang: "zh-HK"
  localService: false
  default: false
- voiceURI: "Google 國語（臺灣）"
  name: "Google 國語（臺灣）"
  lang: "zh-TW"
  localService: false
  default: false
```
