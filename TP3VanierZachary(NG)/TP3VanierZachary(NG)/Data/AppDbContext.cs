using Microsoft.EntityFrameworkCore;
using TP3VanierZachary_NG_.Models;

namespace TP3VanierZachary_NG_.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }

        // You can override OnModelCreating if you need to customize model creation
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            // Model configuration goes here
        }
    }
}
