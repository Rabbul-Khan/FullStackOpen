const ErrorNotification = ({ errorMessage }) => {
  if (errorMessage === '') {
    return null;
  }
  return <div className="error-notification">{errorMessage}</div>;
};

export default ErrorNotification;
