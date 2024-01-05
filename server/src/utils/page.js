class Pagination {
    constructor(page, take, total) {
      const totalPage = Math.ceil(+total / +take);
  
      this.page = page;
      this.take = take;
      this.hasPreviousPage = page > 1;
      this.hastNextPage = page < totalPage;
      this.totalPage = totalPage;
      this.total = total;
    }
  }
  
  module.exports = { Pagination };