// 取得nav link的class
const getNavLinkClass = (currentMatchesNames, name) => ({
    "nav-link": true,
    active: currentMatchesNames.value.some((s) => s === name)
});

// 數字加千分位
const numberFilter = (num) => Number(num).toLocaleString();

// 將date ago轉為文字
const dateAgoFilter = (dateAgo) => {
    const rtf = new Intl.RelativeTimeFormat('zh-TW', { style: 'narrow' });
    if (dateAgo <= 7) return rtf.format(-dateAgo, 'day').replace(' ', '');
    else if (dateAgo <= 30) return rtf.format(-Math.floor(dateAgo/7), 'week').replace('週', '星期').replace(' ', '');
    else return rtf.format(-Math.floor(dateAgo/30), 'month').replace(' ', '');
}

// 將img tag進行解析
const replaceImageTag = (match, post) => {
    const imgSrcMatches = match.match(/src='([^']*)'/i)
    const imagePath = imgSrcMatches ? imgSrcMatches[1] : "";
    const imgWidthMatches = match.match(/src='([^']*)'/i)
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
    if (!post.preview) return "";
    const showMoreStr = "…<b>顯示更多</b>";
    post.preview = post.preview.replaceAll(/\n/gi, "<br>");
    post.preview = post.preview.replaceAll(/!\[show_more\]/gi, showMoreStr);
    post.preview = post.preview.replaceAll(/!\[img src='[^\]]*'[^\]]*\]/gi, (match) => replaceImageTag(match, post));
    let preview_end = post.preview.indexOf(showMoreStr);
    if (preview_end > 0) {
        post.preview = post.preview.substring(0, preview_end + showMoreStr.length);
    }
    return post.preview;
};

// 解析整份文章，並回傳整份解析結果
const parseContent = (post) => {
    if (!post?.content) return "";
    post.content = post.content.replaceAll(/\n/gi, "<br>");
    post.content = post.content.replaceAll(/!\[show_more]/gi, "");
    post.content = post.content.replaceAll(/!\[img src='[^\]]*'[^\]]*\]/gi, (match) => replaceImageTag(match, post));
    return post.content;
};

export { getNavLinkClass, numberFilter, dateAgoFilter, parsePreviewContent, parseContent };
