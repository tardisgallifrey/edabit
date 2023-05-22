//Rust matchstick houses
//Yes, extra functions because...Rust

//main function is required
fn main() {

    //Print a message requesting input
    println!("Enter a number of matchstick houses: ");
    
    //not certain wny, but Rust said this 
    //did not need a mut
    //convert_to_u32 function is below
    //readline function is below
    let input = convert_to_u32(readline());

    //print output as in other programs
    //println! macro does allow interpolation
    println!("{0} matchstick houses require {1} matchsticks.", input, match_houses(input));


}   

//This is the edabit function
//rust declaration of paramters uses colon and type
//declaration of return type uses arrow and type
fn match_houses(steps:u32) -> u32 {

    //do not use parens for if's.
    //Rust does not like it
    if steps < 1 {
        return 0;
    }else if steps == 1 {
        return 6;
    }else{
        return 6 + ((steps - 1) * 5);
    }
}

//if you look at what Rust wants
//for getting string from keyboard,
//you'll know why I made this function
//readline returns a String
fn readline() -> String {

    //get the right library
    use std::io;

    //create a variable to hold string
    //mut is required here
    let mut input_txt = String::new();

    //call read_line method and check for errors
    //& is reference, not address of
    //have to tell rust that param requires mutable value
    io::stdin().read_line(&mut input_txt).expect("error: unable to read user input");
    
    //return the string
    return input_txt;
}

//convert to unsigned integer, will have to check
//overloads in Rust
//returns unsigned 32 bit integer
fn convert_to_u32(mystring:String) -> u32 {
    
    //take input string,
    //trim off newlines
    //parse to integer
    //check for error
    //return num:u32
    return mystring
                .trim()
                .parse()
                .expect("Expected a number");
}
