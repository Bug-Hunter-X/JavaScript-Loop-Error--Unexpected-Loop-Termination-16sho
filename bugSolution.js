function myFunc() {
  let i = 0;
  while (i < 10) {
    console.log(i);
    i++;
    if (i === 5) {
      continue; // Skip iteration when i is 5
    }
  }
}