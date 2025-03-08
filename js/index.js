import { sitelist } from "./data.js";

function createSiteIcons() {
    const siteiconContainer = document.querySelector('.siteicon'); // 获取容器

    // 遍历 sitelist 数据
    sitelist.forEach(item => {
        // 创建 HTML 模板
        const template = `
            <a href="${item.site}" target="_blank">
                <div class="siteicon-container">
                    <div class="siteicon-frame">
                        <img class="imag" src="${item.img}" alt="${item.title}">
                    </div>
                    <div class="text">
                        <span>${item.title}</span>
                    </div>
                </div>
            </a>
        `;

        siteiconContainer.insertAdjacentHTML('beforeend', template);
    });
}

createSiteIcons();