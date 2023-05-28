internal class Program
{
    private static void Main(string[] args)
    {
        Int32 a, b;

        Console.WriteLine("A bitwise Challenge");
        Console.Write("Enter a number: ");
        a = Convert.ToInt32(Console.ReadLine());
        Console.WriteLine();
        Console.Write("Enter another number: ");
        b = Convert.ToInt32(Console.ReadLine());

        Console.WriteLine("{0} is the result of bitwiseAND.", bitwiseAND(a, b));
        Console.WriteLine("{0} is the result of bitwiseOR", bitwiseOR(a, b));
        Console.WriteLine("{0} is the result of bitwise XOR", bitwiseXOR(a, b));
        

        static Int32 bitwiseAND(Int32 a, Int32 b){
            return a & b;
        }

        static Int32 bitwiseOR(Int32 a, Int32 b){
            return a|b;
        }

        static Int32 bitwiseXOR(Int32 a, Int32 b){
            return a^b;
        }
    }
}