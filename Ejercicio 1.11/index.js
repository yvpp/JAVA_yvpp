const times = [20, 75, 50, 80, 100, 60];

const total = times.reduce((acc, current) => acc + current);
const media = total/times.length;

console.log('media', media);