export const clear = (div) => {
  while (div.firstChild) {
    div.removeChild(div.firstChild);
}
}