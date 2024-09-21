using MedijiZavrsniRad.Models;
using Microsoft.EntityFrameworkCore;

namespace MedijiZavrsniRad.Data
{
    public class MedijiContext : DbContext
    {
        public MedijiContext(DbContextOptions<MedijiContext> opcije) : base(opcije)
        {



        }

        public DbSet<Medij> Mediji { get; set; }
        public DbSet<Korisnik> Korisnici { get; set; }
    }
}
