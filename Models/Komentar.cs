using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace MedijiZavrsniRad.Models
{
    public class Komentar : Entitet
    {
        public string? Opis { get; set; }
        [ForeignKey("medij")]
        public required Medij Medij { get; set; }

        

        [ForeignKey("korisnik")]
        public required Korisnik Korisnik { get; set; }
    }
}
