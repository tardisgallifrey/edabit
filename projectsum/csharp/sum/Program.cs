internal class Program
{
    private static void Main(string[] args)
    {
        Console.WriteLine("A program to return the sum");
        Console.WriteLine("of two numbers in C#.");

        Console.Write("Enter a number: ");

        //C# can only get strings from the console
        //Convert changes the string character to an int
        int a = Convert.ToInt32(Console.ReadLine());
        Console.Write("Enter another number: ");
        int b = Convert.ToInt32(Console.ReadLine());


        Console.WriteLine("Your answer is: {0}", sum(2, 2));

        //Main() is part of a class structure,
        //so our function is a part of that class, too
        int sum(int a, int b)
        {
            return a + b;
        }
    }
}