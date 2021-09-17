/**
 * Truncate a text addind ellipsis based on the desired length for the string
 *
 * @param text string
 * @param length number
 */

 function truncateText(
    text: string | undefined | null,
    length: number,
  ): string {
    if (!text) return 'N/A';
  
    return text.length > length ? `${text.substr(0, length - 1)}...` : text;
  }
  
  export default truncateText;
