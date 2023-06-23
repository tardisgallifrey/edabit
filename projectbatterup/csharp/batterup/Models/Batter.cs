using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace batterup.Models
{
    public class Game{
        public int hits {get; set;}
        public int atbats {get; set;}
    }
    public class Batter
    {
        
        public double average { get; set; }
        public string ?name { get; set; }
        public int length { get; set; }
        public List<Game> ?series {get; set;}
    }
}