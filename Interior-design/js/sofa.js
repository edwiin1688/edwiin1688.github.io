var sofaItems = [
    {
        id: 13,
        img: '../img/ia_3600000013.png',
        name: 'soft 13',
        price: '100',
    },
    {
        id: 27,
        img: '../img/ia_3600000027.png',
        name: 'soft 27',
        price: '200',
    },
    {
        id: 40,
        img: '../img/ia_3600000040.png',
        name: 'soft 40',
        price: '300',
    },
    {
        id: 79,
        img: '../img/ia_3600000079.png',
        name: 'soft 79',
        price: '400',
    },
    {
        id: 92,
        img: '../img/ia_3600000092.png',
        name: 'soft 92',
        price: '500',
    }
];

var elem = document.querySelector('.sofa-main');

sofaItems.forEach(e => {
    elem.innerHTML += `
            <div class="card">
                <img id="img-${e.id}" src="${e.img}" width="100 px" alt="">
            </div>
            `;
});

var sofa = document.querySelector('#sofa');

sofaItems.forEach(e => {
    let cardImg = document.querySelector(`#img-${e.id}`);
    console.log(`${cardImg.id} add OnClick`);
    cardImg.addEventListener("click", addSofaClick, false);
});

function addSofaClick(e) {
    console.log(`${e.target.id} OnClick`);

    const found = sofaItems.find(x => e.target.id == `img-${x.id}`);
    if (found != undefined) {
        sofa.setAttribute('src', found.img);
    }
}