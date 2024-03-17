import css from "./Options.module.css";

const Options = ({ updateFeedback, total, handleResetFeedback }) => {
  return (
    <div className={css.optionsBtnContainer}>
      <button className={css.optionsBtn} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button
        className={css.optionsBtn}
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button className={css.optionsBtn} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {total !== 0 && (
        <button
          className={css.optionsBtn}
          onClick={() => handleResetFeedback()}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
