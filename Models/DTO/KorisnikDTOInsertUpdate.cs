using System.ComponentModel.DataAnnotations;

namespace MedijiZavrsniRad.Models.DTO
{
    public record KorisnikDTOInsertUpdate(
        [Required(ErrorMessage = "Ime obavezno")]
        string? Ime,
        [Required(ErrorMessage = "Prezime obavezno")]
        string? Prezime,
        [Required(ErrorMessage = "Email obavezno")]
        [EmailAddress(ErrorMessage ="Email nije dobrog formata")]
        string? Email,
        [Required(ErrorMessage = "Password obavezno")]
        string? Password


        );
    
    
}
