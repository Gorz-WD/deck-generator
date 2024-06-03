export const generateYdk = (codes) => {
  let ydkContent = '#created by x\n#main\n';
    codes.forEach(code => {
        ydkContent += `${code}\n`;
    });
    ydkContent += '\n#extra\n\n';
    ydkContent += '!side\n\n';
    return new Blob([ydkContent], { type: 'text/plain' });
}