exports.config = {
  namespace: 'DocsSite',
  srcDir: 'site/',
  wwwDir: '../../docs/',
  serviceWorker: false,
  copy: [
    { src: '../../../dist/css/ionicons.min.css', dest: './css/ionicons.min.css' },
    { src: '../../../dist/fonts/', dest: './fonts/' },
    { src: '../../../dist/ionicons/', dest: './ionicons/' },
    { src: '../../../dist/ionicons.js', dest: './ionicons.js' },
    { src: '../../../dist/cheatsheet.html', dest: './cheatsheet.html' },
    { src: '../../data.json', dest: './data.json' }
  ]
};
