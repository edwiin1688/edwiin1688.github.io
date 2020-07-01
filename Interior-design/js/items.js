var items = [
    {
        itemType: 'soft',
        id: 13,
        img: './img/ia_3600000013.png',
        name: 'soft 13',
        price: '100',
    },
    {
        itemType: 'soft',
        id: 27,
        img: './img/ia_3600000027.png',
        name: 'soft 27',
        price: '200',
    },
    {
        itemType: 'soft',
        id: 40,
        img: './img/ia_3600000040.png',
        name: 'soft 40',
        price: '300',
    },
    {
        itemType: 'soft',
        id: 79,
        img: './img/ia_3600000079.png',
        name: 'soft 79',
        price: '400',
    },
    {
        itemType: 'soft',
        id: 92,
        img: './img/ia_3600000092.png',
        name: 'soft 92',
        price: '500',
    },
    {
        itemType: 'light',
        id: 156,
        img: 'img/ia_1000000156.png',
        name: 'light 156',
        price: '100',
    },
    {
        itemType: 'light',
        id: 157,
        img: 'img/ia_1000000157.png',
        name: 'light 157',
        price: '200',
    },
    {
        itemType: 'light',
        id: 158,
        img: 'img/ia_1000000158.png',
        name: 'light 158',
        price: '300',
    },
    {
        itemType: 'light',
        id: 169,
        img: 'img/ia_1000000169.png',
        name: 'light 169',
        price: '400',
    }
];

var sofaMain = document.querySelector('.swiper-wrapper');

items.forEach(e => {
    sofaMain.innerHTML += `
            <div class="swiper-slide">
                <img id="img-${e.id}" src="${e.img}" itemType="${e.itemType}">
            </div>
            `;
});

items.forEach(e => {
    let cardImg = document.querySelector(`#img-${e.id}`);
    cardImg.addEventListener("click", addClick, false);
});

function addClick(e) {
    let t = e.target;
    const found = items.find(x => t.id == `img-${x.id}`);
    if (found != undefined) {        
        if(t.hasAttribute('itemType'))
        {
            let itemType = t.getAttribute('itemType');
            let item;
            if(itemType == 'soft')
            {
                item = document.querySelector('#sofa');
            }
            else{
                item = document.querySelector('#light');
            }
            item.setAttribute('src', found.img);
        }
    }
}