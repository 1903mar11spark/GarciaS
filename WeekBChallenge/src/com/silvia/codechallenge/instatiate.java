package com.silvia.codechallenge;
import java.util.Scanner;

public class instatiate extends FizzBuzz{
	
	public static void main(String[] args) {
		Scanner us = new Scanner(System.in);
		FizzBuzz f = new FizzBuzz();
		f.fizzBuzz1();
		
		FizzBuzz f2 = new FizzBuzz();
		System.out.println("Enter a number: ");
		int m = us.nextInt();
		System.out.println("Enter a second number: ");
		int n = us.nextInt();
		f2.fizzBuzz2(m,n);
		
		FizzBuzz f3 = new FizzBuzz();
		System.out.println("Enter the first number of the series: ");
		int m2 = us.nextInt();
		System.out.println("Enter the second number of the series: ");
		int n2 = us.nextInt();
		System.out.println("Enter the first number to be replaced: ");
		int fizz = us.nextInt();
		System.out.println("Enter the second number to be replaced: ");
		int buzz = us.nextInt();
		f3.fizzBuzz3(m2,n2, fizz,buzz);
		
		FizzBuzz f4 = new FizzBuzz();
		System.out.println("Enter the first number of the series: ");
		int m3 = us.nextInt();
		System.out.println("Enter the second number of the series: ");
		int n3 = us.nextInt();
		System.out.println("Enter 3 numbers to be replaced: ");
		int[] fizz2 = new int[3];
		for(int i = 0; i < fizz2.length; i++) {
			fizz2[i]=us.nextInt();
		}
		
		String[] buzz2 = new String[3];
		buzz2[0] = "fizzy";
		buzz2[1] = "buzzy";
		buzz2[2] = "fizzyBuzzy";
		f4.fizzBuzz4(m3,n3, fizz2,buzz2);
		us.close();
	}

}
