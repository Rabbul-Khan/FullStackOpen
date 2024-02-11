const SuccessNotification = ({ successMessage }) => {
  if (successMessage === '') {
    return null;
  }
  return <div className="success-notification">{successMessage}</div>;
};

export default SuccessNotification;
