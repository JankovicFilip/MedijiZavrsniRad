using System.ComponentModel.DataAnnotations.Schema;

namespace MedijiZavrsniRad.Models
{
    public class Komentar : Entitet
    {
        public string? Opis { get; set; }
        //public int MedijId { get; set; }

        [ForeignKey("Medij")]
        public Medij? Medij { get; set; }
        //public int KorisnikId { get; set; }
            
        [ForeignKey("Korisnici")]
        public Korisnik? Korisnik { get; set; }
    }
}
