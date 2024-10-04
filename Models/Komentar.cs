using System.ComponentModel.DataAnnotations.Schema;

namespace MedijiZavrsniRad.Models
{
    public class Komentar : Entitet
    {
        public string? Opis { get; set; }
        //[ForeignKey("Medij")]
        public int? Medij { get; set; }

        [ForeignKey("Medij")]
        public Medij? Mediji { get; set; }

        //[ForeignKey("Korisnik")]
        public int? Korisnik { get; set; }
        [ForeignKey("Korisnik")]
        public Korisnik? Korisnici { get; set; }
    }
}
