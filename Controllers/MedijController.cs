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
                return NotFound(new { poruka = "Medij ne postoji u bazi" });
            }

            return Ok(_mapper.Map<MedijDTORead>(e));
        }

        [HttpPost]
        public IActionResult Post(MedijDTOInsertUpdate dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { poruka = ModelState });
            }
            try
            {
                var e = _mapper.Map<Medij>(dto);
                _context.Mediji.Add(e);
                _context.SaveChanges();
                return StatusCode(StatusCodes.Status201Created, _mapper.Map<MedijDTORead>(e));
            }
            catch (Exception ex)
            {
                return BadRequest(new { poruka = ex.Message });
            }

        }

        [HttpPut]
        [Route("{sifra:int}")]
        [Produces("application/json")]
        public IActionResult Put(int sifra, MedijDTOInsertUpdate dto)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(new { poruka = ModelState });
            }
            try
            {
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
                    return NotFound(new { poruka = "Medij ne postoji u bazi" });
                }

                e = _mapper.Map(dto, e);

                _context.Mediji.Update(e);
                _context.SaveChanges();

                return Ok(new { poruka = "Uspješno promjenjeno" });
            }
            catch (Exception ex)
            {
                return BadRequest(new { poruka = ex.Message });
            }


        }
        [HttpDelete]
        [Route("{sifra:int}")]
        [Produces("application/json")]
        public IActionResult Delete(int sifra)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(new { poruka = ModelState });
            }
            try
            {
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
                    return NotFound("Medij ne postoji u bazi");
                }
                _context.Mediji.Remove(e);
                _context.SaveChanges();
                return Ok(new { poruka = "Uspješno obrisano" });
            }
            catch (Exception ex)
            {
                return BadRequest(new { poruka = ex.Message });
            }


        }
    }

    
}
