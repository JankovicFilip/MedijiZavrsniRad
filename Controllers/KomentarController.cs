using AutoMapper;
using MedijiZavrsniRad.Data;
using MedijiZavrsniRad.Models;
using MedijiZavrsniRad.Models.DTO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Text.RegularExpressions;

namespace MedijiZavrsniRad.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class KomentarController : MedijiZavrsniRadController
    {
        public KomentarController(MedijiContext context, IMapper mapper) : base(context, mapper) { }

        [HttpGet]
        public ActionResult<List<KomentarDTORead>> Get()
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { poruka = ModelState });
            }
            try
            {
                var komentari = _context.Komentari
                    .Include(k => k.Medij)
                    .Include(k => k.Korisnik);  // Include Korisnik relationship
                return Ok(_mapper.Map<List<KomentarDTORead>>(komentari));
            }
            catch (Exception ex)
            {
                return BadRequest(new { poruka = ex.Message });
            }
        }

        [HttpGet]
        [Route("{sifra:int}")]
        public ActionResult<KomentarDTOInsertUpdate> GetBySifra(int sifra)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { poruka = ModelState });
            }
            try
            {
                var komentar = _context.Komentari
                    .Include(k => k.Medij)
                    .Include(k => k.Korisnik)  // Include Korisnik relationship
                    .FirstOrDefault(k => k.Sifra == sifra);

                if (komentar == null)
                {
                    return NotFound(new { poruka = "Komentar ne postoji u bazi" });
                }

                return Ok(_mapper.Map<KomentarDTOInsertUpdate>(komentar));
            }
            catch (Exception ex)
            {
                return BadRequest(new { poruka = ex.Message });
            }
        }

        [HttpPost]
        public IActionResult Post(KomentarDTOInsertUpdate dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { poruka = ModelState });
            }

            try
            {
                var medij = _context.Mediji.Find(dto.MedijSifra);
                var korisnik = _context.Korisnici.Find(dto.KorisnikSifra);

                if (medij == null)
                {
                    return NotFound(new { poruka = "Medij ne postoji u bazi" });
                }
                if (korisnik == null)
                {
                    return NotFound(new { poruka = "Korisnik ne postoji u bazi" });
                }

                var komentar = _mapper.Map<Komentar>(dto);
                komentar.Medij = medij;
                komentar.Korisnik = korisnik;

                _context.Komentari.Add(komentar);
                _context.SaveChanges();

                return StatusCode(StatusCodes.Status201Created, _mapper.Map<KomentarDTOInsertUpdate>(komentar));
            }
            catch (Exception ex)
            {
                return BadRequest(new { poruka = ex.Message });
            }
        }

        [HttpPut]
        [Route("{sifra:int}")]
        public IActionResult Put(int sifra, KomentarDTOInsertUpdate dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { poruka = ModelState });
            }
            try
            {
                var komentar = _context.Komentari
                    .Include(k => k.Medij)
                    .Include(k => k.Korisnik)
                    .FirstOrDefault(k => k.Sifra == sifra);

                if (komentar == null)
                {
                    return NotFound(new { poruka = "Komentar ne postoji u bazi" });
                }

                var medij = _context.Mediji.Find(dto.MedijSifra);
                var korisnik = _context.Korisnici.Find(dto.KorisnikSifra);

                if (medij == null)
                {
                    return NotFound(new { poruka = "Medij ne postoji u bazi" });
                }
                if (korisnik == null)
                {
                    return NotFound(new { poruka = "Korisnik ne postoji u bazi" });
                }

                _mapper.Map(dto, komentar);
                komentar.Medij = medij;
                komentar.Korisnik = korisnik;

                _context.Komentari.Update(komentar);
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
        public IActionResult Delete(int sifra)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { poruka = ModelState });
            }
            try
            {
                var komentar = _context.Komentari.Find(sifra);

                if (komentar == null)
                {
                    return NotFound("Komentar ne postoji u bazi");
                }

                _context.Komentari.Remove(komentar);
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