using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using API.Entities;
using API.Data;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class ProductsController(StoreContext context) : Controller
    {

        [HttpGet] // get resource
        public async Task<ActionResult<List<Product>>> GetProducts()
        {
            return await context.Products.ToListAsync();
        }
        
        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            var product =  await context.Products.FindAsync(id);

            if (product == null)
            {
                // product was not found in the db
                return NotFound();
            }

            return product;
        }
    }
}