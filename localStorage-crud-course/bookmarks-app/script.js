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
  
}