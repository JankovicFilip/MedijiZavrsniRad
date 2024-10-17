using AutoMapper;
using MedijiZavrsniRad.Data;
using Microsoft.AspNetCore.Mvc;

namespace MedijiZavrsniRad.Controllers
{
    public abstract class MedijiZavrsniRadController:ControllerBase
    {

        protected readonly MedijiContext _context;

        protected readonly IMapper _mapper;

        public MedijiZavrsniRadController(MedijiContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
    }
}
