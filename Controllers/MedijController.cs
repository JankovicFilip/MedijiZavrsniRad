using MedijiZavrsniRad.Data;
using MedijiZavrsniRad.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MedijiZavrsniRad.Controllers
{

    [ApiController]
    [Route("api/v1/[controller]")]
    public class MedijController : ControllerBase
    {
        private readonly MedijiContext _context;

        public MedijController(MedijiContext context)
        {
            _context = context;
        }
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_context.Mediji);
        }
        [HttpGet]
        [Route("{sifra:int}")]

        public IActionResult GetBySifra(int sifra)
        {
            return Ok(_context.Mediji.Find(sifra));
        }

        [HttpPost]
        public IActionResult Post(Medij medij)
        {
            _context.Mediji.Add(medij);
            _context.SaveChanges();
            return StatusCode(StatusCodes.Status201Created, medij);

        }

        [HttpPut]
        [Route("{sifra:int}")]
        [Produces("application/json")]
        public IActionResult Put(int sifra, Medij medij)
        {

            var smjerBaza = _context.Mediji.Find(sifra);

            // za sada rucno, kasnije mapper
            smjerBaza.Naziv = medij.Naziv;
            smjerBaza.Opis = medij.Opis;
            smjerBaza.Vrsta = medij.Vrsta;
            smjerBaza.Genre = medij.Genre;

            _context.Mediji.Update(smjerBaza);
            _context.SaveChanges();

            return Ok(new { poruka = "Uspjesno promijenjeno" });


        }
        [HttpDelete]
        [Route("{sifra:int}")]
        [Produces("application/json")]
        public IActionResult Delete(int sifra)
        {

            var smjerBaza = _context.Mediji.Find(sifra);


            _context.Mediji.Remove(smjerBaza);
            _context.SaveChanges();

            return Ok(new { poruka = "Uspjesno obrisano" });


        }
    }

    
}
