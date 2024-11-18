const capitalizeFirstLetter = (string) => {
  if (typeof string !== "string" || string.length === 0) {
    return ""; // Return an empty string or handle it appropriately
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default capitalizeFirstLetter;
