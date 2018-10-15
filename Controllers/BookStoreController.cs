using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using AutoMapper;
using bookstore.BookstoreDB;
using bookstore.Controllers.Resources;
using bookstore.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using bookstore.Extensions;

namespace bookstore.Controllers
{
    [Route("/api/bookstores")]
    public class BookstoresController : Controller
    {
        private readonly IMapper mapper;
        private readonly BookstoreDbContext context;
        public BookstoresController(IMapper mapper, BookstoreDbContext context)
        {
            this.context = context;
            this.mapper = mapper;
        }

        [HttpGet]
        public async Task<IEnumerable<BookstoreResource>> GetBookStore(BookstoreResource bookstoreResource, FilterResource filterResource)
        {
            var filter = mapper.Map<FilterResource, Filter>(filterResource);
            var query = context.Bookstores.AsQueryable();
            if (filter.Id.HasValue)
                query = query.Where(b => b.Id == filter.Id.Value);

            //start code for sorting
            var columnsMap = new Dictionary<string, Expression<Func<Bookstore, object>>>()
            {
                ["name"] = b => b.Name,
                ["title"] = b => b.Title,
                ["authorName"] = b => b.AuthorName,
                ["publisherName"] = b => b.PublisherName,
            };
            query = query.ApplyOrdering(filter, columnsMap);
            //end code for sorting

            var bookstore = await query.ToListAsync();
            return mapper.Map<IEnumerable<Bookstore>, IEnumerable<BookstoreResource>>(bookstore);
        }

        [HttpPost]
        public async Task<IActionResult> CreateBookstore([FromBody] BookstoreResource bookstoreResource)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var bookstore = mapper.Map<BookstoreResource, Bookstore>(bookstoreResource);
            context.Bookstores.Add(bookstore);
            await context.SaveChangesAsync();
            return Ok(bookstore);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateBookstore(int id, [FromBody] BookstoreResource bookstoreResource)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var bookstore = await context.Bookstores.FindAsync(id);
            if (bookstore == null)
                return NotFound();
            mapper.Map<BookstoreResource, Bookstore>(bookstoreResource, bookstore);
            await context.SaveChangesAsync();
            return Ok(bookstore);
        }


        [HttpGet("{id}")]
        public async Task<IActionResult> GetBookstore(int id)
        {
            var bookstore = await context.Bookstores.FindAsync(id);
            if (bookstore == null)
                return NotFound();
            var bookstoreResource = mapper.Map<Bookstore, BookstoreResource>(bookstore);
            return Ok(bookstoreResource);
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBookstore(int id)
        {
            var bookstore = await context.Bookstores.FindAsync(id);
            if (bookstore == null)
                return NotFound();
            context.Remove(bookstore);
            await context.SaveChangesAsync();
            return Ok(id);
        }
    }
}