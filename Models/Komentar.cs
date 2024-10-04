using System.ComponentModel.DataAnnotations.Schema;

namespace MedijiZavrsniRad.Models
{
    public class Komentar : Entitet
    {
        public string? Opis { get; set; }
        public int MedijId { get; set; }

        [ForeignKey("MedijId")]
        public Medij? Mediji { get; set; }
        public int KorisnikId { get; set; }

        [ForeignKey("KorisnikId")]
        public Korisnik? Korisnici { get; set; }
    }
}
