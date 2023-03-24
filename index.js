// code your solution here
const superbowlWin = (record) => {
  const findW = (element) => {
    return element.result === "W";
  };
  const result = record.find(findW);
  if (result !== undefined) {
    return result.year;
  }
};
