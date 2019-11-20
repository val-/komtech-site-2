
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

