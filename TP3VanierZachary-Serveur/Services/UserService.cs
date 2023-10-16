// UserService.cs
public class UserService : IUserService
{
    public async Task<ServiceResponse> RegisterAsync(UserDto userDto)
    {
        // Votre logique d'enregistrement ici
        return new ServiceResponse
        {
            Success = true,
            Message = "Utilisateur enregistré avec succès."
        };
    }
}
