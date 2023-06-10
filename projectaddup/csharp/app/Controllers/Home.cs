using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;

namespace app.Controllers;

public class Home : Controller
{
    private readonly ILogger<Home> _logger;

    public Home(ILogger<Home> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }

    
}
