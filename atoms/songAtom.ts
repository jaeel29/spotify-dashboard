import { atom } from 'recoil';

export const currentTrackIdState = atom({
  key: 'currentTrackIdState',
  default: '3JgNguwjmk9LLEfXZK0b0q',
});

export const isPlayingState = atom({
  key: 'isPlayingState',
  default: false,
});
