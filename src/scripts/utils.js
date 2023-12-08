export const formatDate = (date) => {
  const formatedDate = new Date(date).toLocaleDateString("en-US", {
    year: "2-digit",
    month: "2-digit",
    weekday: "short",
    day: "2-digit",
  });
  console.log(formatedDate);
};
