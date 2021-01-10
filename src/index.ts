import makeServer from './app';

const init = async () => {
  try {
    await makeServer();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

init();