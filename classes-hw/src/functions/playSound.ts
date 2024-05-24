import { PlaySoundArgs, Sound } from '../types'
import { summerBg } from '../assets/images'
import { winterBg } from '../assets/images'
import { rainyBg } from '../assets/images'

let currentSound: HTMLAudioElement | null
let currentSoundKey: Sound | null
let isPaused = false

export async function playSound({ id, soundKey, sounds, bg }: PlaySoundArgs) {
	if (currentSound && currentSoundKey === soundKey && !isPaused) {
		currentSound.pause()
		isPaused = true
		return
	}

	if (currentSound && currentSoundKey !== soundKey) {
		currentSound.pause()
	}

	currentSound = sounds[soundKey]
	currentSoundKey = soundKey

	if (isPaused && currentSoundKey === soundKey) {
		isPaused = false
	} else {
		currentSound.currentTime = 0
		isPaused = false
	}

	try {
		await currentSound.play()
	} catch (error) {
		console.error('Error playing sound:', error)
	}

	switch (id) {
		case 'playSummer':
			return (bg.style.backgroundImage = `url(${summerBg})`)
		case 'playRain':
			return (bg.style.backgroundImage = `url(${rainyBg})`)
		case 'playWinter':
			return (bg.style.backgroundImage = `url(${winterBg})`)
		default:
			return (bg.style.backgroundImage = `url(${winterBg})`)
	}
}
