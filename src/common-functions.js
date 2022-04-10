// 取得nav link的class
const getNavLinkClass = (currentMatchesNames, name) => ({
    "nav-link": true,
    active: currentMatchesNames.value.some((s) => s === name)
});

// 數字加千分位
const numberFilter = (num) => Number(num).toLocaleString();

// 將date ago轉為文字
const dayAgoFilter = (dateAgo) => {
    const rtf = new Intl.RelativeTimeFormat('zh-TW', { style: 'narrow' });
    if (dateAgo===0) return '今天';
    return rtf.format(-dateAgo, 'day').replace(' ', '');
}

const dateAgoFilter = (dateAgo) => {
    const rtf = new Intl.RelativeTimeFormat('zh-TW', { style: 'narrow' });
    if (dateAgo <= 7) return dayAgoFilter(dateAgo);
    else if (dateAgo <= 30) return rtf.format(-Math.floor(dateAgo/7), 'week').replace('週', '星期').replace(' ', '');
    else return rtf.format(-Math.floor(dateAgo/30), 'month').replace(' ', '');
}

// 將文字進行解析
const _replaceText = (content, showMoreStr) => {
    let str = content;
    str = str.replaceAll(/\n/gi, '<br>');
    str = str.replaceAll(/([#@](?:[^\x00-\x7F]|\w)+)/gi, (match) => `<span class="hash-tag cursor-pointer">${match}</span>`);
    str = str.replaceAll(/!\[show_more\]/gi, showMoreStr);
    str = str.replaceAll(/!\[strong text='([^']*)'\]/gi, (_, match) => `<span class="text-light-green fw-bold">${match}</span>`);
    return str.replaceAll(/!\[img src='[^\]]*'[^\]]*\]/gi, _replaceImageTagMapper);
}

// 將img tag進行解析
const _replaceImageTagMapper = (match) => {
    const imgSrcMatches = match.match(/src='([^']*)'/i)
    const imagePath = imgSrcMatches ? imgSrcMatches[1] : '';
    const imgWidthMatches = match.match(/width='([^']*)'/i)
    const width = imgWidthMatches ? imgWidthMatches[1] : '';
    let image = '';
    if (imagePath !== '') {
        try {
            image = require(`@/assets/${imagePath}`);
        } catch (error) {
            image = imagePath;
        }
    }
    return `<img src="${image}" width="${width}" class="img-fluid" />`;
}

// 解析第一張圖片
const getFirstImageUrl = (content) => {
    if (!content) return  null;

    const matches = content.match(/!\[img src='[^\]]*'[^\]]*\]/gi);
    if (!matches) return null
    
    const imgSrcMatches = matches[0].match(/src='([^']*)'/i)
    const imagePath = imgSrcMatches ? imgSrcMatches[1] : '';
    if (imagePath === '') return null;

    let image = '';
    try {
        image = require(`@/assets/${imagePath}`);
    } catch (error) {
        image = imagePath;
    }
    return image;
}

// 解析整份文章，並僅回傳預覽內容
const parsePreviewContent = (content) => {
    if (!content) return  '';
    const showMoreStr = '…<b>顯示更多</b>';
    content = _replaceText(content, showMoreStr);
    let preview_end = content.indexOf(showMoreStr);
    if (preview_end > 0)
        content = content.substring(0, preview_end + showMoreStr.length);
    return content;
};

// 解析整份文章，並回傳整份解析結果
const parseContent = (content) => {
    if (!content) return '';
    return _replaceText(content, '');
};

// 解析草稿
const parseDraft = (content) => {
    if (!content) return '';
    content = content.replaceAll(/!\[show_more\]/gi, '');
    content = content.replaceAll(/!\[strong text='([^']*)'\]/gi, '');
    return content;
};

// 調整多個modal的層級
const adjustMultipleModalsLayer = () => {
    // 紀錄原modal的位置
    let nodeScrollTopMap = {};
    document.querySelectorAll(`.modal`).forEach((node, index) => {
        nodeScrollTopMap[node.id] = node.scrollTop;
        node.style["z-index"] = 1055 + (index) * 10;
    });

    setTimeout(() => {
        // 設定每一層modal的backdrop及主體的z-index
        document.querySelectorAll('.modal-backdrop.show').forEach((node, index) => {
            node.style["z-index"] = 1050 + (index) * 10;
        });
        document.querySelectorAll(`.modal.show`).forEach((node, index) => {
            node.style["z-index"] = 1055 + (index) * 10;
        });
        
        // 將打開的modal滾到原來的位置
        console.log(nodeScrollTopMap)
        for(let id in nodeScrollTopMap)
            document.getElementById(id).scrollTop = nodeScrollTopMap[id]
    }, 500)
}

export {
    getNavLinkClass,
    numberFilter,
    dateAgoFilter,
    dayAgoFilter,
    getFirstImageUrl,
    parsePreviewContent,
    parseContent,
    parseDraft,
    adjustMultipleModalsLayer
};
