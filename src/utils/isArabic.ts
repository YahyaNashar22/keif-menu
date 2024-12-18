const isArabic = (text: string) => {
  // Check if the text contains Arabic Unicode characters
  const arabicRegex = /[\u0600-\u06FF]/;
  return arabicRegex.test(text);
};

export default isArabic;
