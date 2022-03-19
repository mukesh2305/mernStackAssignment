class ApiFeatures {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }


    pagination(resultPerPage) {
        const currentPage = Number(this.queryStr.page) || 1;
        // skip product per page
        const skip = (currentPage - 1) * resultPerPage;

        this.query = this.query.limit(resultPerPage).skip(skip);
        return this;
    }
}

module.exports = ApiFeatures;
