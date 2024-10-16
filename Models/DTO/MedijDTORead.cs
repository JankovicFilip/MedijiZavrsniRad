namespace MedijiZavrsniRad.Models.DTO
{
    public record MedijDTORead(
        int Sifra,
        string Naziv,    
        string? Opis,
        string? Vrsta,
        string? Genre
        );
    
}
