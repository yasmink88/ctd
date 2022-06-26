import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner prime = new Scanner(System.in);
        System.out.println("Insert a number:");
        int value1 = prime.nextInt();
        int primeNum = 2;

        for (int counter = 0; counter < value1; counter++) {
            while(isPrime(primeNum)) {
                System.out.println(primeNum);
                primeNum ++;
            }
        }


    }

    public static boolean isPrime(int value) {
        if(value < 2) {
            return false;
        }

        for (int i=2; i<value; i++) {
            if (value % i == 0) {
                return false;
            }
        }
        return true;
    }
}