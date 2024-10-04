using MedijiZavrsniRad.Data;
using Microsoft.AspNetCore.Mvc;

namespace MedijiZavrsniRad.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class KomentarController : ControllerBase
    {
        private readonly MedijiContext _context;
        public KomentarController(MedijiContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_context.Komentari);
        }

        [HttpGet]
        [Route("{sifra:int}")]
        public IActionResult GetBySifra(int sifra)
        {
            return Ok(_context.Komentari.Find(sifra));
        }

    }
}
