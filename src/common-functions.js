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
    return rtf.format(-dateAgo, 'day').replace(' ', '');
}

const dateAgoFilter = (dateAgo) => {
    const rtf = new Intl.RelativeTimeFormat('zh-TW', { style: 'narrow' });
    if (dateAgo <= 7) return dayAgoFilter(dateAgo);
    else if (dateAgo <= 30) return rtf.format(-Math.floor(dateAgo/7), 'week').replace('週', '星期').replace(' ', '');
    else return rtf.format(-Math.floor(dateAgo/30), 'month').replace(' ', '');
}

// 將文字進行解析
const replaceText = (post, property, showMoreStr) => {
    let str = JSON.parse(JSON.stringify(post[property]))
    str = str.replaceAll(/\n/gi, "<br>");
    str = str.replaceAll(/([#@](?:[^\x00-\x7F]|\w)+)/gi, (match) => `<span class="hash-tag">${match}</span>`);
    str = str.replaceAll(/!\[show_more\]/gi, showMoreStr);
    post[property] = str.replaceAll(/!\[img src='[^\]]*'[^\]]*\]/gi, (match) => replaceImageTagMapper(match, post));
}

// 將img tag進行解析
const replaceImageTagMapper = (match, post) => {
    const imgSrcMatches = match.match(/src='([^']*)'/i)
    const imagePath = imgSrcMatches ? imgSrcMatches[1] : "";
    const imgWidthMatches = match.match(/width='([^']*)'/i)
    const width = imgWidthMatches ? imgWidthMatches[1] : "";
    let image = "";
    if (imagePath !== "") {
        try {
            image = require(`@/assets/${imagePath}`);
        } catch (error) {
            image = imagePath;
        }
        if (!post.coverimg) {
            post.coverimg = image;
        }
    }
    return `<img src="${image}" width="${width}" class="img-fluid" />`;
}

// 解析整份文章，並僅回傳預覽內容
const parsePreviewContent = (post) => {
    // 若解析過，不再重新解析
    if (post?.preview) return post?.preview;

    // 未解析過
    post.preview = post?.content;
    if (!post.preview) return  '';
    const showMoreStr = `…<b>顯示更多</b>`;
    replaceText(post, 'preview', showMoreStr);
    let preview_end = post.preview.indexOf(showMoreStr);
    if (preview_end > 0) {
        post.preview = post.preview.substring(0, preview_end + showMoreStr.length);
    }
    return post.preview;
};

// 解析整份文章，並回傳整份解析結果
const parseContent = (post) => {
    // 若解析過，不再重新解析
    if (post?.content_parsed) return post?.content;

    // 未解析過
    if (!post?.content) return "";
    replaceText(post, 'content', '');
    post.content_parsed = true;
    return post.content;
};

export { getNavLinkClass, numberFilter, dateAgoFilter, dayAgoFilter, parsePreviewContent, parseContent };
