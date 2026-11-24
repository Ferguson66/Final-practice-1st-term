import Text from "../atoms/Text";
import Button from "../atoms/Button";
import "./StatusMessage.css";

// Error message with an optional "Try again" button.
function StatusMessage({ message, onRetry }) {
  return (
    <div className="status-message" role="alert">
      <p className="status-message__title">Something went wrong</p>
      <Text>{message}</Text>
      {onRetry && (
        <div className="status-message__action">
          <Button onClick={onRetry}>Try again</Button>
        </div>
      )}
    </div>
  );
}

export default StatusMessage;