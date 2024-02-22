const Notification = ({ message, type }) => {
  const className = type === "error" ? "notification error" : "notification";
  return <div className={className}>{message}</div>;
};

export default Notification;
