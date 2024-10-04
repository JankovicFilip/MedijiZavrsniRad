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
        public IActionResult Post(KomentarDTO komentarDto)
        {

            var komentar = new Komentar
            {
                Opis = komentarDto.Opis,
                Medij = komentarDto.Medij,
                Korisnik = komentarDto.Korisnik
            };


            _context.Komentari.Add(komentar);
            _context.SaveChanges();
            return StatusCode(StatusCodes.Status201Created, komentarDto);

        }

        [HttpPut]
        [Route("{sifra:int}")]
        [Produces("application/json")]
        public IActionResult Put(int sifra, KomentarDTO komentarDto)
        {

            var komentarBaza = _context.Komentari.Find(sifra);
            if (komentarBaza == null)
            {
                return NotFound(new { poruka = "Komentar nije pronađen" });
            }

            // Manually map the properties from DTO to the entity
            komentarBaza.Korisnik = komentarDto.Korisnik;
            komentarBaza.Medij = komentarDto.Medij;
            komentarBaza.Opis = komentarDto.Opis;
            

            _context.Komentari.Update(komentarBaza);
            _context.SaveChanges();

            return Ok(new { poruka = "Uspješno promijenjeno" });


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
