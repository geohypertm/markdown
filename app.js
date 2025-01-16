const $ = document;

let divElem = $.getElementById("markdown");


async function api(pathFile) {
    try{
        const response = await fetch(pathFile);
        const data = await response.text();
        divElem.innerHTML = marked.parse(data);
    } catch(err) {
        console.error(err);
        divElem.innerHTML = "Error: Something went wrong. Check the browser console! | CTRL + SHIFT + I"
    }
}

api("./myblog.md")