using MedijiZavrsniRad.Data;
using MedijiZavrsniRad.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MedijiZavrsniRad.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class KorisnikController : ControllerBase
    {
        private readonly MedijiContext _context;
        public KorisnikController(MedijiContext context)
        {
            _context = context;
        }
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_context.Korisnici);
        }
        [HttpGet]
        [Route("{sifra:int}")]
        public IActionResult GetBySifra(int sifra)
        {
            return Ok(_context.Korisnici.Find(sifra));
        }

        [HttpPost]
        public IActionResult Post(Korisnik korisnik)
        {
            _context.Korisnici.Add(korisnik);
            _context.SaveChanges();
            return StatusCode(StatusCodes.Status201Created, korisnik);

        }
        [HttpPut]
        [Route("{sifra:int}")]
        [Produces("application/json")]
        public IActionResult Put(int sifra, Korisnik korisnik)
        {

            var smjerBaza = _context.Korisnici.Find(sifra);

            // za sada rucno, kasnije mapper
            smjerBaza.Ime = korisnik.Ime;
            smjerBaza.Prezime = korisnik.Prezime;
            smjerBaza.Email = korisnik.Email;
            smjerBaza.Password = korisnik.Password;

            _context.Korisnici.Update(smjerBaza);
            _context.SaveChanges();

            return Ok(new { poruka = "Uspjesno promijenjeno" });


        }
        [HttpDelete]
        [Route("{sifra:int}")]
        [Produces("application/json")]
        public IActionResult Delete(int sifra)
        {

            var smjerBaza = _context.Korisnici.Find(sifra);


            _context.Korisnici.Remove(smjerBaza);
            _context.SaveChanges();

            return Ok(new { poruka = "Uspjesno obrisano" });


        }


    }
    
}
