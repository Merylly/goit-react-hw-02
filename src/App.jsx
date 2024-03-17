import { useEffect, useState } from "react";
import Description from "./components/description/Description";
import Options from "./components/options/Options";
import Feedback from "./components/feedback/Feedback";
import Notification from "./components/notification/Notification";

const initialFeedback = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
  const [feedbacks, setFeedback] = useState(() => {
    const stringifiedFeedbacks = localStorage.getItem("feedbackValues");
    const parsedFeedbacks = JSON.parse(stringifiedFeedbacks) ?? initialFeedback;
    return parsedFeedbacks;
  });

  const updateFeedback = (feedbackType) => {
    setFeedback({ ...feedbacks, [feedbackType]: feedbacks[feedbackType] + 1 });
  };

  const handleResetFeedback = () => {
    setFeedback(initialFeedback);
  };

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  const positiveFeedbacks = Math.round(
    ((feedbacks.good + feedbacks.neutral) / totalFeedback) * 100
  );

  useEffect(() => {
    localStorage.setItem("feedbackValues", JSON.stringify(feedbacks));
  }, [feedbacks]);

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        total={totalFeedback}
        handleResetFeedback={handleResetFeedback}
      />
      {totalFeedback === 0 && <Notification />}
      {totalFeedback > 0 && (
        <Feedback
          feedback={feedbacks}
          total={totalFeedback}
          positive={positiveFeedbacks}
        />
      )}
    </>
  );
}

export default App;
