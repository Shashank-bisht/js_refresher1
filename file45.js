const myPromise = new Promise((resolve, reject) => {
    // Simulate an asynchronous operation (e.g., fetching data from a server)
    setTimeout(() => {
      const success = true; // Change to false to simulate failure
      if (success) {
        resolve('Operation completed successfully');
      } else {
        reject('Operation failed');
      }
    }, 2000); // Simulating a 2-second delay
  });
  
  myPromise
    .then((result) => {
      console.log('Success:', result);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  