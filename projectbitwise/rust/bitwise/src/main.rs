use std::io;

fn main() {

    let a: u32;
    let b: u32;
    println!("A bitwise challenge for Rust");

    println!("Enter a number: ");
    a = get_input();

    println!("Enter another number: ");
    b = get_input();

    println!("{0} is the result of bitwise AND.", bitwise_AND(a, b));
    println!("{0} is the result of bitwise OR.", bitwise_OR(a, b));
    println!("{0} is the result of bitwiseXOR.", bitwise_XOR(a, b));

    
}

#[allow(non_snake_case)]
fn bitwise_AND(a: u32, b: u32) -> u32 {
    return a & b;
}

#[allow(non_snake_case)]
fn bitwise_OR(a: u32 , b: u32) -> u32{
    return a | b;
}

#[allow(non_snake_case)]
fn bitwise_XOR(a: u32, b: u32) -> u32{
    return a ^ b;
}

fn get_input() -> u32{
    let mut n = String::new();
    io::stdin()
        .read_line(&mut n)
        .expect("failed to read input.");

    let n: u32 = n.trim().parse().expect("invalid input");

    return n;
}