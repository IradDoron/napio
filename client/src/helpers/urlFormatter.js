function urlFormatter(str) {
  return str.replace(/\s/g, '-').toLowerCase();
}

export default urlFormatter;
