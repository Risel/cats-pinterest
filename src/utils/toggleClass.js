export const toggleClass = (styles) => {
  const toggled = styles.filter((style)=> style !== undefined).join(' ');
  if (toggled) {
    return toggled
  }
}