/**
 * Log a warning message to the console.
 *
 * @param message
 */
export const coloredWarnLog = (
  message: string,
  badgeText = "Astro Breadcrumbs",
) => {
  console.warn(
    "\x1b[43m",
    badgeText,
    "\x1b[0m",
    "\x1b[33m",
    message,
    "\x1b[0m",
  );
};

/**
 * Returns boolean if the index is the last element in the array.
 *
 * @param   {number}  index
 * @param   {any[]}   array
 *
 * @return  {boolean}
 */
export const isLastElement = (index: number, array: any[]): boolean =>
  index + 1 === array.length;