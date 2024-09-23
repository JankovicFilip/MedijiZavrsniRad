using System.ComponentModel.DataAnnotations.Schema;

namespace MedijiZavrsniRad.Models
{
    public class Komentar : Entitet
    {
        public string? Opis { get; set; }

        [ForeignKey("medij")]
        public Medij? Medij{ get; set; }
        [ForeignKey("korisnik")]
        public Korisnik? Korisnik { get; set; }
    }
}
