interface Message {
  text: string;
}

const message: Message = {
  text: 'Hello world!',
};

const logEach5Sec = () => {
  const interval = setInterval(() => {
    console.log(message);
    logEach5Sec();
    clearInterval(interval);
  }, 5000);
};

logEach5Sec();