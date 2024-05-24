export type Sound = 'summer' | 'winter' | 'rain'
export type Sounds = { [key: string]: HTMLAudioElement }

export interface PlaySoundArgs {
	id: string
	soundKey: Sound
	sounds: Sounds
	bg: HTMLDivElement
}
