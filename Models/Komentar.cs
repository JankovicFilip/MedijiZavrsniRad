using System.ComponentModel.DataAnnotations.Schema;

namespace MedijiZavrsniRad.Models
{
    public class Komentar : Entitet
    {
        public string? Opis { get; set; }

        [ForeignKey("medij")]
        public Medij? Mediji{ get; set; }
        [ForeignKey("korisnik")]
        public Korisnik? Korisnici { get; set; }
    }
}
