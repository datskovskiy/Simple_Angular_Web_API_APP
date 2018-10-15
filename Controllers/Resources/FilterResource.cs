using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace bookstore.Models
{
    public class FilterResource
    {
        public int? Id {get; set;}
        public string SortBy { get; set; }
        public bool IsSortAscending { get; set; }
    }
}
