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



        }
        
    }
}
