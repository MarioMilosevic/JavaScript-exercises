// Q1: Design an utility which takes URL and a value for attempts
// which will attempt to make a fetch request. If on failure it tries again
// with increasing delay for number of times which user has requested.

// Pokušaj fetch("http://foo.com")
// Ako uspije → vrati rezultat (resolve)
// Ako ne uspije:
// sačekaj npr. 1 sekundu
// pokušaj opet
// Ako opet ne uspije:
// sačekaj 2 sekunde
// pokušaj opet
// Ako ni treći put ne uspije:
// baci grešku (reject)

requestManager("http://foo.com", {}, 3).then((response) => {
  console.log(response);
});

function requestManager(url: string, body, attempts: number) {
  return new Promise((resolve, reject) => {
    let tries = 0;

    function makeRequest() {
      fetch(url)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          tries++;

          if (tries === attempts) {
            reject(error);
            return;
          }

          setTimeout(() => {
            makeRequest();
          }, tries * 1000);
        });
    }

    makeRequest();
  });
}
