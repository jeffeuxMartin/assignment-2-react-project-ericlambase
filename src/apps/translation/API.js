// eslint-disable-next-line
import axios from "axios";


const delayed_call = async (callback) => {
  const delayPromise = (ms) => new Promise((res) => setTimeout(res, ms));
  await delayPromise(300);
  return callback();
};

const FakeGeneralAPI = (myfunc) => async (...input) =>
  await delayed_call(() => myfunc(...input));

export const FakeTranslationAPI = FakeGeneralAPI((input_sentence, input_lang) => {
  return `translated_${input_sentence} (in ${input_lang}) :-)`;
});

export const FakeLanglistAPI = FakeGeneralAPI(() => ([
  "Chinese",
  "English",
  "Spanish",
]));
