export const formatTime = (inputDate) => {
  const date = new Date(inputDate);
  let hour = date.getHours();
  const minutes = date.getMinutes();

  const ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12;

  return `${hour}:${String(minutes).padStart(2, "0")} ${ampm}`;
};
