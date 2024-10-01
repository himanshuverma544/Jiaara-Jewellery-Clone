const setStatePromptly = (setter, value) => (

  new Promise(resolve => {
    setter(value);
    resolve();
  })
);

export default setStatePromptly;