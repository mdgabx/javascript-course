const mainSection = document.getElementById("main-section");
const formSection = document.getElementById("form-section");
const addBookmarkBtn = document.getElementById("add-bookmark-button");
const categoryName = document.querySelector(".category-name");
const categoryDropdown = document.querySelector("#category-dropdown")
const closeFormBtn = document.getElementById("close-form-button");
const addBookmarkBtnForm = document.getElementById("add-bookmark-button-form");
const nameInput = document.getElementById("name");
const url = document.getElementById("url");
const viewCategoryButton = document.getElementById("view-category-button");
const categoryList = document.getElementById("category-list");
const bookMarkListSection = document.getElementById("bookmark-list-section")

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

const displayOrHideCategory = () => {
    mainSection.classList.toggle("hidden")
}


addBookmarkBtn.addEventListener("click", () => {
    categoryName.innerText = categoryDropdown.value;
    displayOrCloseForm()
})

closeFormBtn.addEventListener("click", () => {
    displayOrCloseForm()
})

addBookmarkBtnForm.addEventListener("click", () => {
    const bookmark = {
        name: nameInput.value,
        category: categoryDropdown.value,
        url: url.value
    }

    const bookmarks = getBookmarks()
    bookmarks.push(bookmark)
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    //reset name and url 
    nameInput.value = "";
    url.value = "";
    displayOrCloseForm()
})


viewCategoryButton.addEventListener("click", () => {
    categoryList.innerText = "";

    const bookmarks = getBookmarks();
    const selectedCategory = categoryDropdown.value
    const matches = bookmarks.filter((bookmark) => bookmark.category === selectedCategory)

    if (matches.length === 0) {
        const noResultsMessage = document.createElement("p");
        noResultsMessage.innerHTML = "No Bookmarks Found"
        categoryList.appendChild(noResultsMessage);
    }

    bookMarkListSection.classList.toggle("hidden")
    mainSection.classList.toggle("hidden")


    matches.forEach((bookmark) => {

        const radioBtn = document.createElement("input");
        radioBtn.id = bookmark.name;
        radioBtn.value = bookmark.name;
        radioBtn.type = "radio";
        radioBtn.name = "bookmark";

        const link = document.createElement("a");
        link.href = bookmark.url
        link.innerText = bookmark.name

        const radioLabel = document.createElement("label");
        radioLabel.setAttribute("for", bookmark.name);
        radioLabel.appendChild(radioBtn);
        radioLabel.appendChild(link);

        categoryList.appendChild(radioLabel);

    });
})
