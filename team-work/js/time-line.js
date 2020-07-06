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
                    <h2>${f.title}</h2>
                    <p>
                        ${f.content}
                    </p>
                    <span class="time-stamp">${f.time}</span>
                </div>

                <div class="timeline-content">
                    <img src="${f.image}" alt="">
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

                <div class="timeline-content right">
                    <img src="${f.image}" alt="">
                </div>

                <div class="timeline-content ${f.direction}">
                    <h2>${f.title}</h2>
                    <p>
                        ${f.content}
                    </p>
                    <span class="time-stamp">${f.time}</span>
                </div>
            </div>
            `;
    }
});