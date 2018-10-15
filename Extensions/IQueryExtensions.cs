using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using bookstore.Controllers.Resources;
using bookstore.Models;

namespace bookstore.Extensions
{
    public static class IQueryableExtensions
    {
        public static IQueryable<T> ApplyOrdering<T>(this IQueryable<T> query, IQueryObject filterResource, Dictionary<string, Expression<Func<T, object>>> columnsMap)
        {
            if (String.IsNullOrWhiteSpace(filterResource.SortBy) || !columnsMap.ContainsKey(filterResource.SortBy))
                return query;

            if (filterResource.IsSortAscending)
                return query.OrderBy(columnsMap[filterResource.SortBy]);
            else
                return query.OrderByDescending(columnsMap[filterResource.SortBy]);

        }
    }
}