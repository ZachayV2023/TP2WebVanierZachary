using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using TP3VanierZachary_NG_.Data;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<TP3VanierZachary_NG_Context>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("TP3VanierZachary_NG_Context") ?? throw new InvalidOperationException("Connection string 'TP3VanierZachary_NG_Context' not found.")));

// Configure CORS policy
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policyBuilder =>
    {
        policyBuilder.AllowAnyOrigin();
        policyBuilder.AllowAnyHeader();
        policyBuilder.AllowAnyMethod();
    });
});

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new OpenApiInfo { Title = "My API", Version = "v1" });

});

builder.Services.AddAuthorizationPolicyEvaluator();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowAll"); // Apply CORS policy

app.UseAuthorization();

app.MapControllers();

app.Run();
