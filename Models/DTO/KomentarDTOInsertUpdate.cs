using System.ComponentModel.DataAnnotations;

namespace MedijiZavrsniRad.Models.DTO
{
    public record KomentarDTOInsertUpdate(
        string? Opis,
        [Range(1, int.MaxValue, ErrorMessage = "{0} mora biti između {1} i {2}")]
        [Required(ErrorMessage = "Medij obavezno")]
        int? MedijSifra,
        [Range(1, int.MaxValue, ErrorMessage = "{0} mora biti između {1} i {2}")]
        [Required(ErrorMessage = "Korisnik obavezno")]
        int? KorisnikSifra
        );
    
}
