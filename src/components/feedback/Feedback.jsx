import css from "./Feedback.module.css";

const Feedback = ({ feedback, total, positive }) => {
  return (
    <ul className={css.feedbackList}>
      <li className={css.feedbackItem}>✔Good: {feedback.good}</li>
      <li className={css.feedbackItem}>✔Neutral: {feedback.neutral}</li>
      <li className={css.feedbackItem}>✔Bad: {feedback.bad}</li>
      <li className={css.feedbackItem}>✔Total: {total}</li>
      <li className={css.feedbackItem}>✔Positive: {positive}%</li>
    </ul>
  );
};

export default Feedback;
