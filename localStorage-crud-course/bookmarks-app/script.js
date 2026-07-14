const mainSection = document.getElementById("main-section");
const formSection = document.getElementById("form-section");
const addBookmarkBtn = document.getElementById("add-bookmark-button");
const categoryName = document.querySelector(".category-name");
const categoryDropdown = document.querySelector("#category-dropdown")
const closeFormBtn = document.getElementById("close-form-button");
const addBookmarkBtnForm = document.getElementById("add-bookmark-button-form");

const isValidBookmark = (item) => {
    return (
        item !== null &&
        typeof item === "object" &&
        typeof item.name === "string" &&
        typeof item.category === "string" &&
        typeof item.url === "string"
    );
};

const getBookmarks = () => {
    try {
        const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
        if (!Array.isArray(bookmarks)) return [];
        return bookmarks.every(isValidBookmark) ? bookmarks : [];
    } catch (e) {
        return [];
    }
};

const displayOrCloseForm = () => {
    mainSection.classList.toggle("hidden")
    formSection.classList.toggle("hidden")
}

addBookmarkBtn.addEventListener("click", () => {
    categoryName.innerText = categoryDropdown.value;
    displayOrCloseForm()
})

closeFormBtn.addEventListener("click", () => {
    displayOrCloseForm()
})