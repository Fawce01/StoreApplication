using API.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<StoreContext>(opt =>
{
   opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")); 
});
builder.Services.AddCors();

var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseCors(opt =>
{
   opt.AllowAnyHeader().AllowAnyMethod().WithOrigins("https://localhost:5173");
});

app.MapControllers();

// Initialize the database
DbInitializer.InitDb(app);

app.Run();
