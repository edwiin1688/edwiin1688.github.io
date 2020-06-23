var lightItems = [
    {
        id: 156,
        img: 'img/ia_100000000156.png',
        name: 'light 156',
        price: '100',
    },
    {
        id: 157,
        img: 'img/ia_100000000157.png',
        name: 'light 157',
        price: '200',
    },
    {
        id: 158,
        img: 'img/ia_100000000158.png',
        name: 'light 158',
        price: '300',
    },
    {
        id: 169,
        img: 'img/ia_100000000169.png',
        name: 'light 169',
        price: '400',
    }
];

var elem = document.querySelector('.light-main');

lightItems.forEach(e => {
    elem.innerHTML += `
            <div class="card">
                <img id="img-${e.id}" src="${e.img}" width="100 px" alt="">
            </div>
            `;
});

var light = document.querySelector('#light');

lightItems.forEach(e => {
    let cardImg = document.querySelector(`#img-${e.id}`);
    console.log(`${cardImg.id} add OnClick`);
    cardImg.addEventListener("click", addLightClick, false);
});

function addLightClick(e) {
    console.log(`${e.target.id} OnClick`);

    const found = lightItems.find(x => e.target.id == `img-${x.id}`);
    if (found != undefined) {
        light.setAttribute('src', found.img);
    }
}