// Every 36 seconds call a color set variable

$(function() {
  setInterval( function() { setColor(); }, 100 );
  function generateRandomNumber(min_value , max_value)
  {
      return Math.floor(Math.random() * (max_value-min_value) + min_value);
  }
  function setColor() {
    let num = generateRandomNumber(1,4);
    let block_index = generateRandomNumber(1,1001);
    if (num === 1) {
      color = '#FF00FF';
    }
    if (num === 2) {
      color = '#FFFF00';
    }
    if (num === 3) {
      color = '#00FFFF';
    }
    $('.grid-item').eq(block_index).css('background-color', color)
    block_index = block_index + 1;
  }
});
//magenta #FF00FF
//yellow #FFFF00
//cyan #00FFFF
