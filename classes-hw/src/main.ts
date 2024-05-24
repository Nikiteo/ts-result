import './style.scss'
import { summerBg } from './assets/images'
import { playSound } from './functions/playSound'
import { Sound, Sounds } from './types'
import { uploadSounds } from './functions/uploadSound'

const volumeControl = document.getElementById('volume') as HTMLInputElement
const soundsControlWrapper = document.querySelector('.soundsControlWrapper')
const sounds: Sounds = {}
const background = document.getElementById('background') as HTMLDivElement
background.style.backgroundImage = `url(${summerBg})`

window.addEventListener('load', () => {
	uploadSounds(sounds).catch(e => console.error('Failed to load sounds:', e))
})

volumeControl.addEventListener('input', e => {
	const volume = (e.target as HTMLInputElement).value
	Object.values(sounds).forEach(audio => {
		audio.volume = parseFloat(volume)
	})
})

if (soundsControlWrapper) {
	soundsControlWrapper.addEventListener('click', e => {
		const target = e.target as HTMLButtonElement

		if (target.nodeName === 'BUTTON') {
			const soundKey = target.dataset.soundKey

			if (soundKey) {
				void playSound({
					id: target.id,
					soundKey: soundKey as Sound,
					sounds: sounds,
					bg: background,
				})
			}
		}
	})
}
