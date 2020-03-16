class PaginationHelper {
    constructor(contents, itemsPerPage) {
        this.contents = contents;
        this.itemsPerPage = itemsPerPage;
    }

    itemCount() {
        return this.contents.length;
    }

    pageCount() {
        return Math.ceil(this.contents.length / this.itemsPerPage);
    }

    pageItemCount(p) {
        if (p < this.pageCount() - 1) {
            return this.itemsPerPage;
        } else if (p === this.pageCount() - 1) {
            return this.contents.length % this.itemsPerPage;
        }
        return -1;
    }

    pageIndex(i) {
        if (i < 0 || i >= this.itemCount()) return -1
        return Math.floor(i / this.itemsPerPage);
    }
}
const helper = new PaginationHelper(['a','b','c','d','e','f'], 4);