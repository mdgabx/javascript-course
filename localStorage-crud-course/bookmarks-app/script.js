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
const closeListBtn = document.getElementById("close-list-button")
const deleteBookmarkBtn = document.getElementById("delete-bookmark-button");

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

// Renders the given bookmarks into #category-list as radio+label pairs,
// or a "No Bookmarks Found" message if the list is empty.
const renderBookmarkList = (matches) => {
    categoryList.innerHTML = "";

    if (matches.length === 0) {
        const noResultsMessage = document.createElement("p");
        noResultsMessage.innerHTML = "No Bookmarks Found";
        categoryList.appendChild(noResultsMessage);
        return;
    }

    matches.forEach((bookmark) => {
        const radioBtn = document.createElement("input");
        radioBtn.id = bookmark.name;
        radioBtn.value = bookmark.name;
        radioBtn.type = "radio";
        radioBtn.name = "bookmark";

        const link = document.createElement("a");
        link.href = bookmark.url;
        link.innerText = bookmark.name;

        const radioLabel = document.createElement("label");
        radioLabel.setAttribute("for", bookmark.name);
        radioLabel.appendChild(radioBtn);
        radioLabel.appendChild(link);

        categoryList.appendChild(radioLabel);
    });
};

// Returns bookmarks in localStorage matching the currently selected category.
const getMatchesForSelectedCategory = () => {
    const bookmarks = getBookmarks();
    const selectedCategory = categoryDropdown.value;
    return bookmarks.filter((bookmark) => bookmark.category === selectedCategory);
};

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
    const matches = getMatchesForSelectedCategory();
    renderBookmarkList(matches);

    bookMarkListSection.classList.toggle("hidden")
    mainSection.classList.toggle("hidden")
})

deleteBookmarkBtn.addEventListener("click", () => {
    const selectedRadio = document.querySelector('input[name="bookmark"]:checked');
    if (!selectedRadio) return;

    const selectedCategory = categoryDropdown.value;
    const bookmarks = getBookmarks();

    const updatedBookmarks = bookmarks.filter((bookmark) => {
        return !(bookmark.name === selectedRadio.value && bookmark.category === selectedCategory);
    });

    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));

    const matches = updatedBookmarks.filter((bookmark) => bookmark.category === selectedCategory);
    renderBookmarkList(matches);
})

closeListBtn.addEventListener("click", () => {
    bookMarkListSection.classList.toggle("hidden")
    mainSection.classList.toggle("hidden")
})