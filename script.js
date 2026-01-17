// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/
let bookmarkFormEl = document.getElementById('bookmarkForm');
let siteNameInputEl = document.getElementById("siteNameInput");
let siteNameErrMsgEl = document.getElementById("siteNameErrMsg");
let siteUrlInputEl = document.getElementById("siteUrlInput");
let siteUrlErrMsgEl = document.getElementById("siteUrlErrMsg");
let bookmarksListEl = document.getElementById("bookmarksList");
siteNameInputEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteNameErrMsgEl.textContent = "Required*";
    } else {
        siteNameErrMsgEl.textContent = "";
    }
});
siteUrlInputEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteUrlErrMsgEl.textContent = "Required*";
    } else {
        siteUrlErrMsgEl.textContent = "";
    }
});
bookmarkFormEl.addEventListener("submit", function(event) {
    event.preventDefault();

    let siteName = siteNameInputEl.value;
    let siteUrl = siteUrlInputEl.value;

    let listItemEl = document.createElement("li");
    listItemEl.classList.add("bookmark-items");
    bookmarksListEl.appendChild(listItemEl);

    let siteNameEl = document.createElement("p");
    siteNameEl.textContent = siteName;
    listItemEl.appendChild(siteNameEl);

    let siteLinkUrl = document.createElement("a");
    siteLinkUrl.href = siteUrl;
    siteLinkUrl.target = "_blank";
    siteLinkUrl.textContent = siteUrl;
    listItemEl.appendChild(siteLinkUrl);

});