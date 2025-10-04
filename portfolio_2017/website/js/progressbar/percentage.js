var bar = new ProgressBar.Circle(icon_reponsive, {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#1d57a9', width: 1 },
  to: { color: '#1d57a9', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }
  }
});
var bar02 = new ProgressBar.Circle(icon_coding, {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#1d57a9', width: 1 },
  to: { color: '#1d57a9', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }
  }
});
var bar03 = new ProgressBar.Circle(icon_tool, {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#1d57a9', width: 1 },
  to: { color: '#1d57a9', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }
  }
});

bar.text.style.fontFamily = bar02.text.style.fontFamily =bar03.text.style.fontFamily = '"Syncopate", Helvetica, sans-serif';
bar.text.style.fontWeight=bar02.text.style.fontWeight=bar03.text.style.fontWeight= 'bold';
bar.text.style.color=bar02.text.style.color=bar03.text.style.color= '#1d57a9';
bar.text.style.fontSize =bar02.text.style.fontSize =bar03.text.style.fontSize = '1.125rem';

bar.animate(0.9);  // Number from 0.0 to 1.0
bar02.animate(0.9);
bar03.animate(1.0); 
