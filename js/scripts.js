/* ------------------------------------------------------------------------- */
var basicTimeline = anime.timeline({
  autoplay: false
});

var pathEls = $(".check");
for (var i = 0; i < pathEls.length; i++) {
  var pathEl = pathEls[i];
  var offset = anime.setDashoffset(pathEl);
  pathEl.setAttribute("stroke-dashoffset", offset);
}

basicTimeline
  .add({
    targets: ".text",
    duration: 1,
    opacity: "0",
  })
  .add({
    targets: ".button",
    duration: 800,
    height: 20,
    width: 0,
    backgroundColor: "#000000",
    border: "0",
    borderRadius: 100
  })
  .add({
    targets: ".button",
    duration: 800,
    height: 20,
    width: 100,
    backgroundColor: "#000000",
    border: "0",
    borderRadius: 100
  })
  .add({
    targets: ".button",
    duration: 800,
    height: 20,
    width: 200,
    backgroundColor: "#F2A000",
    border: "0",
    borderRadius: 100
  })
  .add({
    targets: ".button",
    duration: 800,
    height: 20,
    width: 3000,
    backgroundColor: "#906821",
    border: "0",
    borderRadius: 100
  })
  .add({
    targets: ".button",
    width: 0,
    backgroundColor: "#ffe6e6",
    duration: 200
  });

$(".button").click(function() {
  basicTimeline.play();

  var numberOfEls = 280;
  var duration = 2000;
  var midScreenX = window.innerWidth / 2;
  var midScreenY = window.innerHeight / 2;
  var radius = Math.sqrt(midScreenX * midScreenX + midScreenY * midScreenY);
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < numberOfEls; i++) {
    var hue = Math.round(180 / numberOfEls * i);
    var angle = Math.random() * Math.PI * 5;
    var el = document.createElement('div');
    el.classList.add('particule');
    el.style.backgroundColor = '#F2A000';
    el.style.width = '5px';
    el.style.height = '5px';
    anime({
      targets: el,
      width: ['1px', '8px'],
      height: ['1px', '8px'],
      left: [midScreenX + 'px', Math.cos(angle) * radius + midScreenX + 'px'],
      top: [midScreenY + 'px', Math.sin(angle) * radius + midScreenY + 'px'],
      delay: (duration / numberOfEls) * i,
      duration: duration,
      easing: 'easeInExpo',
      loop: true
    });
    fragment.appendChild(el);
  }
  $(".foto").show();
  document.body.appendChild(fragment);
});
var x = document.getElementById("myAudio");

function playAudio() {
    x.play();
}
