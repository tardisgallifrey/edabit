use std::io;

fn main() {

    let mut result = String::new();

    println!("Rust version of the addup challenge");
    println!("Enter a number between 1 and 1000 below: ");
    
    //Somehow, I got to get this to memory

    //This gets the input from user,
    //checks to see that a value is read
    io::stdin()
        .read_line(&mut result)
        .expect("failed to read from stdin");

    //passing return of trim() to 
    //trimmed (.trim() removes \n)
    let trimmed = result.trim();

    //Still fuzzy on what match does
    //but .parse::<i32> converts string to number
    match trimmed.parse::<i32>() {
        Ok(i) => { 
            //This method allows me to put
            //this check here instead of in
            //function
            if i > 0 && i < 1001 {
                println!("The sum of numbers from 1 to {0} is {1}", i, addup(i))
            }else{
                println!("There was an error.");
            }
    
        },
        Err(..) => println!("this was not an integer: {}", trimmed),
    };


}

fn addup(mut number: i32)-> i32{
    let mut answer: i32 = 0;

    loop {
        answer += number;

        number -= 1;

        if number < 1 {
            break;
        }

    }
    return answer;
}
