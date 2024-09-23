using System.ComponentModel.DataAnnotations.Schema;

namespace MedijiZavrsniRad.Models
{
    public class Komentar : Entitet
    {
        public string? Opis { get; set; }

        [ForeignKey("Medij")]
        [Column("medij")]
        public Medij? Medij{ get; set; }
        [ForeignKey("Korisnik")]
        [Column("korisnik")]
        public Korisnik? Korisnik { get; set; }
    }
}
