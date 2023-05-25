function helloWorld() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000);
  });
}

helloWorld().then((message) => {
  document.getElementById("output").innerHTML = message;
});