using Microsoft.AspNetCore.Mvc;
using batterup.Models;

namespace batterup.Controllers;

public class Home : Controller
{
   
    private readonly ILogger<Home> _logger;

    public Home(ILogger<Home> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        var player = new Batter();

        return View(player);
    }

    public IActionResult AddGame(Batter player)
    {
        if(ModelState.IsValid){

            //check to see if the player name is
            //null or empty (most likely null)
            //then just restart the Index view
            if(String.IsNullOrEmpty(player.name)){
                //If you call a view directly,
                //View name must be in quotes as string
                return View("Index", player);
            }

            //check to see if there are too 
            //few games, and set a default
            if(player.length < 3){
                player.length = 3;
            }

            //check to see if there are too many games
            //and set a default
            if(player.length > 10){
                player.length = 10;
            }
        }

        //call the AddGame view
        return View(player);
    }

}
