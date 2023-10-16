using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

[Route("api/[controller]")]
[ApiController]
public class UserController : ControllerBase
{
    private readonly IUserService _userService;

    public UserController(IUserService userService)
    {
        _userService = userService;
    }

    [HttpPost("register")]
    public async Task<ActionResult> Register(UserDto userDto)
    {
        var response = await _userService.RegisterAsync(userDto);
        if (response.Success)
        {
            return Ok(response);
        }
        return BadRequest(response); // ou autre statut en fonction de votre cas
    }
}