using System.ComponentModel.DataAnnotations;

namespace MedijiZavrsniRad.Models.DTO
{
    public record MedijDTOInsertUpdate(
        [Required(ErrorMessage = "Naziv obavezno")]
        string Naziv,
        string Opis,
        string Vrsta,
        string Genre


        );
    
    
}
