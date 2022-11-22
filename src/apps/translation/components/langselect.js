import React from "react";
import PropTypes from "prop-types";

const LangSelect = ({
  langlist_obj,
  langSelectedValue,
  handleLanguageChange,
}) => {
  // TODO: 變成吃一個 Object render 元素，defalt 是 {}
  return (
    <>
      <label>
        Choose a language:
        <select
          value={langSelectedValue}
          onChange={handleLanguageChange}
        >
          {langlist_obj.map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>
      </label>
    </>
  );
};

LangSelect.propTypes = {
  langlist_obj: PropTypes.array,
  langSelectedValue: PropTypes.string,
  handleLanguageChange: PropTypes.func,
};

export default LangSelect;
