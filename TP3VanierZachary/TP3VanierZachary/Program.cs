using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using TP3VanierZachary.Models;

var builder = WebApplication.CreateBuilder(args);

// Set up the configuration for the application.
var configuration = builder.Configuration;

// Add services to the container.
builder.Services.AddControllersWithViews();

// Add the DbContext using SQL Server with the given connection string.
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(configuration.GetConnectionString("DefaultConnection")));

// Add identity services.
builder.Services.AddDefaultIdentity<IdentityUser>()
    .AddEntityFrameworkStores<ApplicationDbContext>();

var app = builder.Build();

// Configure the HTTP request pipeline.

// Use HSTS if not in development environment.
if (!app.Environment.IsDevelopment())
{
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();
app.UseAuthentication();
app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

// If no other route matches, fall back to the default file.
app.MapFallbackToFile("index.html");

app.Run();
