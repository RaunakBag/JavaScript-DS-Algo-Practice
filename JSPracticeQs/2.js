// Write a JS program to get the extension of a filename

const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));

console.log(getFileExtension('index.html'));
console.log(getFileExtension('style.css'));
console.log(getFileExtension('main.js'));
console.log(getFileExtension('webpack.config.js'));
console.log(getFileExtension('file.pdf'));
