// IUserService.cs
public interface IUserService
{
    Task<ServiceResponse> RegisterAsync(UserDto userDto);
    // autres méthodes comme Login, Logout etc.
}
