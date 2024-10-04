using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace MedijiZavrsniRad.Models
{
    public class Komentar : Entitet
    {
        public string? Opis { get; set; }
        //[ForeignKey("Medij")]
        public int? Medij { get; set; }

        [ForeignKey("Medij")]
        //[JsonIgnore]
        public Medij? Mediji { get; set; }

        //[ForeignKey("Korisnik")]
        public int? Korisnik { get; set; }
        [ForeignKey("Korisnik")]
        //[JsonIgnore]
        public Korisnik? Korisnici { get; set; }
    }
}
