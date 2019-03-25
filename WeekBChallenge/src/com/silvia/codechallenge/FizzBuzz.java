package com.silvia.codechallenge;

public class FizzBuzz {

	public void fizzBuzz1() {
		int temp = 1;
	
		for(int i = 1; i <101; i++) {
			temp = i;
			if(temp %3 == 0 & temp %5 == 0) {
				System.out.println("fizzbuzz");
			}else if (temp %3 == 0) {
				System.out.println("fizz");
			}else if (temp %5 == 0) {
				System.out.println("buzz");
			}else {
				System.out.println(temp);
			}
		}
	}
	
	public void fizzBuzz2(int m, int n) {
		int temp;
		if(m <= n) {
			for(int i = m; i <n;i++) {
				temp = i;
				if(temp %3 == 0 & temp %5 == 0) {
					System.out.println("fizzbuzz");
				}else if (temp %3 == 0) {
					System.out.println("fizz");
				}else if (temp %5 == 0) {
					System.out.println("buzz");
				}else {
					System.out.println(temp);
				}
			}
		}else {
			System.out.println("First number must be smaller than second");
		}
		
	}
	
	public void fizzBuzz3(int m, int n, int fizzNum, int buzzNum) {
		int temp;
		if(m <= n) {
			for(int i = m; i <n;i++) {
				temp = i;
				if(temp % fizzNum == 0 & temp %5 == 0) {
					System.out.println("fizzbuzz");
				}else if (temp %fizzNum == 0) {
					System.out.println("fizz");
				}else if (temp %buzzNum == 0) {
					System.out.println("buzz");
				}else {
					System.out.println(temp);
				}
			}
		}else {
			System.out.println("First number must be smaller than second");
		}
		
	}
	
	public void fizzBuzz4(int m, int n, int[] numbers, String[] terms) {
		int temp;
		boolean check;
		if(m <= n) {
			if(numbers.length == terms.length) {
				for(int i = m; i <n;i++) {
					temp = i;
						if(temp % numbers[0] == 0) {
							System.out.println(terms[0]);
						}else if (temp % numbers[1] == 0) {
							System.out.println(terms[1]);
						}else if (temp % numbers[2] == 0) {
							System.out.println(terms[2]);
						}else {
							System.out.println(temp);
						}
				}
			}else {
				System.out.println("arrays must have same length");
			}
		}else {
			System.out.println("First number must be smaller than second");
		}	
	}
}
