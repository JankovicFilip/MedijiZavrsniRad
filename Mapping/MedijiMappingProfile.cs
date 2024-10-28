using AutoMapper;
using MedijiZavrsniRad.Models;
using MedijiZavrsniRad.Models.DTO;

namespace MedijiZavrsniRad.Mapping
{
    public class MedijiMappingProfile:Profile
    {
        public MedijiMappingProfile()
        {
            CreateMap<Medij, MedijDTORead>();
            CreateMap<MedijDTOInsertUpdate, Medij>();


            CreateMap<Korisnik, KorisnikDTORead>();
            CreateMap<KorisnikDTOInsertUpdate, Korisnik>();


            CreateMap<Komentar, KomentarDTORead>()
                .ForCtorParam(
                    "MedijNaziv",
                    opt => opt.MapFrom(src => src.Medij.Naziv)
                                       

                )
                .ForCtorParam(
                    "KorisnikEmail",
                    opt => opt.MapFrom(src => src.Korisnik.Email)
            );

            CreateMap<Komentar, KomentarDTOInsertUpdate>()
                .ForMember(
                    dest => dest.MedijSifra,
                    opt => opt.MapFrom(src => src.Medij.Sifra)
                    )
                .ForMember(
                    dest => dest.KorisnikSifra,
                    opt => opt.MapFrom(src => src.Korisnik.Sifra)
                    );

            CreateMap<KomentarDTOInsertUpdate, Komentar>()
           .ForMember(
               dest => dest.Medij,
               opt => opt.Ignore()  // Ignore Medij mapping here since we assign it in the controller
           )
           .ForMember(
               dest => dest.Korisnik,
               opt => opt.Ignore()  // Ignore Korisnik mapping here as well
           );


        }
        
    }
}
