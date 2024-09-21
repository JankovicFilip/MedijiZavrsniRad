using System.ComponentModel.DataAnnotations;

namespace MedijiZavrsniRad.Models
{
    public abstract class Entitet
    {
        [Key]
        public int? Sifra { get; set; }
    }
}
