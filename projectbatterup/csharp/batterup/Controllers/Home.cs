using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using batterup.Models;

namespace batterup.Controllers;

public class Home : Controller
{
    
    public IActionResult Index()
    {
        HttpContext.Session.SetInt32("hits", 0);
        HttpContext.Session.SetInt32("atbats", 0);
        HttpContext.Session.SetInt32("NumGames", 0);

        return View();
    }

    [HttpPost]
    public IActionResult AddGame(ViewModel model)
    {
        int hits = (int)HttpContext.Session.GetInt32("hits") + model.hits;
        int atbats = (int)HttpContext.Session.GetInt32("atbats") + model.atbats;
        int series = (int)HttpContext.Session.GetInt32("NumGames");
        series++;
        HttpContext.Session.SetInt32("NumGames", series);
        HttpContext.Session.SetInt32("hits", hits);
        HttpContext.Session.SetInt32("atbats", atbats);
        ViewBag.Hits = HttpContext.Session.GetInt32("hits");
        ViewBag.AtBats = HttpContext.Session.GetInt32("atbats");
        ViewBag.Series = HttpContext.Session.GetInt32("NumGames");

        if(model.complete){
            return RedirectToAction("Average");
        }else{
            return View("Index");
        }
    }

    public IActionResult Average()
    {
        int hits = (int)HttpContext.Session.GetInt32("hits");
        int atbats = (int)HttpContext.Session.GetInt32("atbats");
        string avg = ((double)hits/(double)atbats).ToString().Replace("0.",".").Substring(0,4);
        HttpContext.Session.SetString("Average", avg);
        ViewBag.Average = HttpContext.Session.GetString("Average");
        ViewBag.Series = HttpContext.Session.GetInt32("NumGames");

        return View();
    }

  
}
