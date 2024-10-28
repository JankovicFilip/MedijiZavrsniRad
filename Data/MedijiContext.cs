using MedijiZavrsniRad.Models;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

namespace MedijiZavrsniRad.Data
{
    public class MedijiContext(DbContextOptions<MedijiContext> opcije) : DbContext(opcije)
    {
       

        public DbSet<Medij> Mediji { get; set; }
        public DbSet<Korisnik> Korisnici { get; set; }
        public DbSet<Komentar> Komentari { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Implementacija veze 1:n
            modelBuilder.Entity<Komentar>().HasOne(g => g.Medij);
            modelBuilder.Entity<Komentar>().HasOne(g => g.Korisnik);
        }
    }
}
