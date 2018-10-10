using bookstore.Models;
using Microsoft.EntityFrameworkCore;

namespace bookstore.BookstoreDB
{
    public class BookstoreDbContext : DbContext
    {
        public BookstoreDbContext(DbContextOptions<BookstoreDbContext> options)
            : base(options) { }

        public DbSet<Bookstore> Bookstores { get; set; }
    }
}
