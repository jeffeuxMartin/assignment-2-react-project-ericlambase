import React from "react";
import { useEffect, useState } from "react";

import InputBox from "./components/inputbox";
import LangSelect from "./components/langselect";

import { FakeTranslationAPI as TranslationAPI, FakeLanglistAPI as LanglistAPI } from "./API";

// eslint-disable-next-line
const TextArea = ({mytext}) => <h2>{mytext}</h2>;


const Translation = () => {
  // <<< region
  // mounting elements ---
  const [langlist, set_langlist] = useState([]);

  // input elements ---
  const [boxValue, set_boxValue] = useState(""), // monitor
    [submittedboxValue, set_submittedboxValue] = useState(""); // storage

  const [submittedlangSelectedValue, set_submittedlangSelectedValue] =
      useState(""), // monitor  // TODO: grab default lang!
    [langSelectedValue, set_langSelectedValue] = useState(""); // monitor  // TODO: grab default lang!

  // output elements ---
  const [resultValue, set_resultValue] = useState(""); // storage

  // state variables ---
  // >>> endregion

  const handleLanguageChange = (event) => {
    set_langSelectedValue(event.currentTarget.value);
  };

  const handleSubmission = (event) => {
    if (submittedlangSelectedValue !== "") {
      event.preventDefault();
      set_submittedboxValue(boxValue);
      set_boxValue("");
    }
  };

  useEffect(() => {
    LanglistAPI()
      .then((resp) => set_langlist(resp))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    set_submittedlangSelectedValue(langSelectedValue);
  }, [langSelectedValue]);

  useEffect(() => {
    if (submittedboxValue && submittedlangSelectedValue !== "") {
      TranslationAPI(submittedboxValue, submittedlangSelectedValue)
        .then((response) => set_resultValue(response))
        .catch((error) => {
          console.error(error);
        })
    }
  }, [submittedboxValue, submittedlangSelectedValue]);

  return (
    <div>
      <p>
        <LangSelect
          langlist_obj={langlist}
          langSelectedValue={langSelectedValue}
          handleLanguageChange={handleLanguageChange}
        />
      </p>

      <InputBox
        handleSubmission={handleSubmission}
        boxValue={boxValue}
        setBoxValue={set_boxValue}
      />

      <TextArea mytext={resultValue} />
    </div>
  );
};

export default Translation;
