using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bookstore.Extensions;

namespace bookstore.Models
{
    public class Filter: IQueryObject
    {
        public int? Id {get; set;}
        public string SortBy { get; set; }
        public bool IsSortAscending { get; set; }
    }
}
