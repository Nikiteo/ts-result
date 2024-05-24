import { Sounds } from '../types'

async function uploadSound(soundFile: string) {
	const module = await import(`../assets/sounds/${soundFile}.mp3`)
	return new Audio(module.default)
}

export async function uploadSounds(sounds: Sounds) {
	sounds.summer = await uploadSound('summer')
	sounds.winter = await uploadSound('winter')
	sounds.rain = await uploadSound('rain')
}
