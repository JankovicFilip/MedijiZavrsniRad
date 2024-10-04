using MedijiZavrsniRad.Data;
using MedijiZavrsniRad.Models;
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

        [HttpPost]
        public IActionResult Post(Komentar komentar)
        {
            _context.Komentari.Add(komentar);
            _context.SaveChanges();
            return StatusCode(StatusCodes.Status201Created, komentar);

        }

        [HttpPut]
        [Route("{sifra:int}")]
        [Produces("application/json")]
        public IActionResult Put(int sifra, Komentar komentar)
        {

            var smjerBaza = _context.Komentari.Find(sifra);

            // za sada rucno, kasnije mapper
            smjerBaza.Korisnik = komentar.Korisnik;
            smjerBaza.Medij = komentar.Medij;
            smjerBaza.Opis = komentar.Opis;

            _context.Komentari.Update(smjerBaza);
            _context.SaveChanges();

            return Ok(new { poruka = "Uspjesno promijenjeno" });


        }

        [HttpDelete]
        [Route("{sifra:int}")]
        [Produces("application/json")]
        public IActionResult Delete(int sifra)
        {

            var smjerBaza = _context.Komentari.Find(sifra);


            _context.Komentari.Remove(smjerBaza);
            _context.SaveChanges();

            return Ok(new { poruka = "Uspjesno obrisano" });


        }


    }
}
