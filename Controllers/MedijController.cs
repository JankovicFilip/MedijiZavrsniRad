using AutoMapper;
using MedijiZavrsniRad.Data;
using MedijiZavrsniRad.Models;
using MedijiZavrsniRad.Models.DTO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MedijiZavrsniRad.Controllers
{

    [ApiController]
    [Route("api/v1/[controller]")]
    public class MedijController(MedijiContext context, IMapper mapper) : MedijiZavrsniRadController(context, mapper)
    {

        
        [HttpGet]
        public ActionResult<List<MedijDTORead>> Get()
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { poruka = ModelState });
            }
            try
            {
                return Ok(_mapper.Map<List<MedijDTORead>>(_context.Mediji));
            }
            catch (Exception ex)
            {
                return BadRequest(new { poruka = ex.Message });
            }
            try
            {
                return Ok(_mapper.Map<List<MedijDTORead>>(_context.Mediji));
            }
            catch (Exception ex)
            {
                return BadRequest(new { poruka = ex.Message });
            }
        }
        [HttpGet]
        [Route("{sifra:int}")]

        public ActionResult<MedijDTORead> GetBySifra(int sifra)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { poruka = ModelState });
            }
            Medij? e;
            try
            {
                e = _context.Mediji.Find(sifra);
            }
            catch (Exception ex)
            {
                return BadRequest(new { poruka = ex.Message });
            }
            if (e == null)
            {
                return NotFound(new { poruka = "Smjer ne postoji u bazi" });
            }

            return Ok(_mapper.Map<MedijDTORead>(e));
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
