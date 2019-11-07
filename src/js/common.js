
ymaps.ready(init);

function init(){
    var myMap = new ymaps.Map("map", {
        center: [55.789699, 37.546283],
        zoom: 16,
        controls: []
    });
    myMap.behaviors.disable('scrollZoom');
    myMap.behaviors.disable('drag');
    var myPlacemark = new ymaps.Placemark([55.789699, 37.546283], {
      balloonContentHeader: "ЗАО Комтех-Н",
      balloonContentBody: "Ленинградский проспект, дом 37, корпус 12",
      balloonContentFooter: "Вход через угловой подъезд, 4-й этаж",
      hintContent: "Здание НИЦ АСК"
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'assets/img/map-marker.svg',
        iconImageSize: [100, 100],
        iconImageOffset: [-70, -100]
    });
    myMap.geoObjects.add(myPlacemark);
}

function switchSection(moveDown) {
  if (window.switchSectionLock) {
    return;
  } else {
    window.switchSectionLock = true;
    setTimeout(() => {
        window.switchSectionLock = false;
    }, 400);
  }
  const currnetSection = location.hash && location.hash.split('_')[1]*1 || 0;
  const delta = moveDown ? 1 : -1;
  let newSection = currnetSection + delta;
  if (!document.getElementById(`section_${newSection}`)) {
    return;
  }
  location.hash = `section_${newSection}`;
}

window.addEventListener('wheel', function (event) {
    switchSection(event.deltaY > 0);
});


var square = document.querySelector('#siteView');
var manager = new Hammer.Manager(square);
var Pan = new Hammer.Pan();
manager.add(Pan);

manager.on('panup', function() {
    switchSection(true);
});

manager.on('pandown', function() {
    switchSection(false);
});
