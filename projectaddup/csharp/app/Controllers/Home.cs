using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using app.Models;

namespace app.Controllers;

public class Home : Controller
{
   
   //Index gets the number and sends it to Output
    public IActionResult Index()
    {
        var myvars = new Vars();

        return View(myvars);
    }

    public IActionResult Output(Vars model)
    {
        int answer=0;
        ViewData["start_point"] = model.number;

        if (ModelState.IsValid)
        {
            if(model.number < 1001){
                for(int i=1; i <= model.number; i++){
                    answer += i;
                }
                ViewData["number"] = answer;
            }else{
                ViewData["number"] = -1;
            }
        }

        
        return View();
    }

    
}
