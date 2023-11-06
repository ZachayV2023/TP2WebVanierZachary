using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TP3VanierZachary_NG_.Models;

namespace TP3VanierZachary_NG_.Data
{
    public class TP3VanierZachary_NG_Context : DbContext
    {
        public TP3VanierZachary_NG_Context (DbContextOptions<TP3VanierZachary_NG_Context> options)
            : base(options)
        {
        }

        public DbSet<TP3VanierZachary_NG_.Models.Test> Test { get; set; } = default!;
    }
}
