
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

window.document.addEventListener("DOMContentLoaded", function () { 

    const anchors = [...window.document.querySelectorAll('.anchor-js')].map((anchor) => ({
        offset: anchor.getBoundingClientRect().top + (pageYOffset || document.documentElement.scrollTop),
        id: anchor.id
    }));

    updateMenuByHash(location.hash);
    generateStars();

    window.addEventListener("hashchange", function () {
        updateMenuByHash(location.hash);
    });

    window.addEventListener('scroll', function (event) {
        const THRESHOLD = 30;
        let newHash = '';
        for (let i = 0; i < anchors.length; i++) {
            if ((pageYOffset || document.documentElement.scrollTop) + THRESHOLD >= anchors[i].offset) {
                newHash = anchors[i].id;
            }
        }
        updateMenuByHash(`#${newHash}`);        
    });

    function updateMenuByHash(code) {
        if (!code) {
            code = '#about';
        }
        for (let i = 0; i < anchors.length; i++) {
            let className = (code === `#${anchors[i].id}`) ? 'hash-menu__link hash-menu__link_active' : 'hash-menu__link';
            window.document.querySelector(`a.hash-menu__link[href="#${anchors[i].id}"]`).className = className;
        }
        window.document.querySelector('div.hash-menu').className = (code === '#contacts') ? 'hash-menu hash-menu_invert' : 'hash-menu';
    }

    function generateStars() {
        const container = window.document.querySelector('div.sky-landing__stars-container');
        let html = '';
        for (let i=0; i<600; i++) {
            let left = Math.floor(Math.random()*container.clientWidth);
            let hIndex = Math.random();
            let top = Math.floor(hIndex*container.clientHeight);
            let opacity = Math.floor((1 - hIndex)*6)/10;
            html += `
                <div class="star star_${Math.floor(Math.random()*3)}"
                    style="top: ${top}px; left: ${left}px; opacity: ${opacity};"></div>
            `;
        }
        container.innerHTML = html;
        
    }

});


