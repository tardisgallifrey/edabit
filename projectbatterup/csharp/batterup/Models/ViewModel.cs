using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace batterup.Models
{
    public class ViewModel
    {
        public int hits {get; set;}
        public int atbats {get; set;}
        public bool complete {get; set;} = false;
        public int serieslength {get; set;}
    }
}