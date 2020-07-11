// 動態加入行程
var tl = document.querySelector('#timeline');
timeline_data.forEach(f => {
    if(f.direction == 'right')
    {
        tl.innerHTML += `
            <div class="timeline-item">
                <div class="timeline-icon ${f.iconType}">
                    <i class="fa ${f.icon}" aria-hidden="true"></i>
                </div>
                <div class="timeline-content ${f.direction}">
                    <h2>${f.time}</h2>
                    <h3>
                        ${f.title}
                    </h3>
                    <span class="time-stamp">${f.content}</span>
                </div>

                <div class="timeline-content">
                    <img src="${f.image}" alt="" data-src="./img/loader.gif">
                </div>
            </div>
            `;
    }
    else{
        tl.innerHTML += `
            <div class="timeline-item">
                <div class="timeline-icon ${f.iconType}">
                    <i class="fa ${f.icon}" aria-hidden="true"></i>
                </div>

                <div class="timeline-content right lazyload">
                    <img src="${f.image}" alt="" data-src="./img/loader.gif">
                </div>

                <div class="timeline-content ${f.direction}">
                    <h2>${f.time}</h2>
                    <h3>
                        ${f.title}
                    </h3>
                    <span class="time-stamp">${f.content}</span>
                </div>
            </div>
            `;
    }
});