var MaKeyMaKey = require('../index');

var maKeyMaKeys = [];

for (var i = 0; i < MaKeyMaKey.deviceCount(); i++) {
  console.log('opening MakeyMakey', i);

  maKeyMaKeys.push(new MaKeyMaKey.MaKeyMaKey(i));

  maKeyMaKeys[i]
  .on('click', function (buf) {
    console.log('CLICK');
  })
  .on('space', function (buf) {
    console.log('SPACE');
  })
  .on('up', function (buf) {
    console.log('UP');
  })
  .on('down', function (buf) {
    console.log('DOWN');
  })
  .on('left', function (buf) {
    console.log('LEFT');
  })
  .on('right', function (buf) {
    console.log('RIGHT');
  })
  .on('w', function (buf) {
    console.log('W');
  })
  .on('a', function (buf) {
    console.log('A');
  })
  .on('s', function (buf) {
    console.log('S');
  })
  .on('d', function (buf) {
    console.log('D');
  })
  .on('f', function (buf) {
    console.log('F');
  })
  .on('g', function (buf) {
    console.log('G');
  })
  .on('a0', function (buf) {
    console.log('A0');
  })
  .on('a1', function (buf) {
    console.log('A1');
  })
  .on('a2', function (buf) {
    console.log('A2');
  })
  .on('a3', function (buf) {
    console.log('A3');
  })
  .on('a4', function (buf) {
    console.log('A4');
  })
  .on('a5', function (buf) {
    console.log('A5');
  });

}
