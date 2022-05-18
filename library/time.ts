function padTo2Digits(num: any) {
  return num.toString().padStart(2, '0');
}

export function convertMsToHM(milliseconds: any) {
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);

  seconds = seconds % 60;
  // 👇️ if seconds are greater than 30, round minutes up (optional)
  minutes = seconds >= 30 ? minutes + 1 : minutes;

  minutes = minutes % 60;

  return `${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`;
}
