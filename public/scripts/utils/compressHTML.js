export default function compressHTML(html) {
    let allHTML = html;
    let headHTML = "";
    allHTML = allHTML.replace(new RegExp("</HEAD", "gi"), "</head");
    allHTML = allHTML.replace(new RegExp("</head ", "gi"), "</head");

    let bodySplit = "</head>";
    const i = allHTML.indexOf(bodySplit) != -1;
    if (i == true) {
        let bodySplit = "</head>";
        let tempo = allHTML.split(new RegExp(bodySplit, "i"));
        headHTML = tempo[0];
        allHTML = tempo[1];
    } else {
        bodySplit = "";
    }
    allHTML = allHTML.replace(/(\r\n|\n|\r|\t)/gm, "");
    allHTML = allHTML.replace(/\s+/g, " ");
    allHTML = headHTML + bodySplit + "\n" + allHTML;

    return allHTML;
}
