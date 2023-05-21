internal class Program
{
    private static void Main(string[] args)
    {
        int numHouses = 0;
        Console.WriteLine("Enter the number of matchstick houses: ");
        numHouses = Convert.ToInt16(Console.ReadLine());

        Console.WriteLine("{0} matchstick houses have {1} matchsticks.", numHouses, matchHouses(numHouses));
        static int matchHouses(int step){

            if(step < 1){
                return 0;
            }else if(step == 1){
                return 6;
            }else{
                return 6 + ((step -1) * 5);
            }
        }
    }
}