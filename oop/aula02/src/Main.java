import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        /*
        Integer valor1 = 9;
        Integer valor2 = 2;

        System.out.println( (float) valor1 / valor2);
        */
        /*
        String string1 = "Yasmin";
        String string2 = "Khalaf";
        String initials = string1.charAt(0) + "" + string2.charAt(0);

        System.out.println(initials + ": " + string1 + " " + string2);
        */
        /*
        Scanner scanner; //definir objeto Scanner com nome scanner
        scanner = new Scanner(System.in); //criar scanner a partir do System.in

        int num1;
        int num2;
        float num3;
        String nomeUser;
        char inicial;

        System.out.println("Insert number 1");
        num1 = scanner.nextInt();
        System.out.println("Insert number 2");
        num2 = scanner.nextInt();
        System.out.println("Insert number 3 as float");
        num3 = scanner.nextFloat();
        System.out.println("Insert name");
        nomeUser = scanner.next();
        inicial = nomeUser.charAt(0);
        System.out.println(inicial);
        */
        /*
        Scanner divisible = new Scanner(System.in);
        System.out.println("Insert numbers:");
        int num1 = divisible.nextInt();
        int num2 = divisible.nextInt();

        if (isDivisible(num1, num2)) {
            System.out.println("Divisible.");
        } else {
            System.out.println(("Not divisible."));
        }
        */

        //nome e sobrenome separadamente, e a sua data de nascimento
        /*
        Scanner user = new Scanner(System.in);
        System.out.println("Insert your first name:");
        String firstName = user.nextLine();
        System.out.println("Insert your last name:");
        String lastName = user.nextLine();
        String initials = String.valueOf(firstName.charAt(0)) + lastName.charAt(0);
        System.out.println("Insert birth day:");
        int dayOfBirth = user.nextInt();
        System.out.println("Insert birth month:");
        int monthOfBirth = user.nextInt();
        System.out.println("Insert birth year:");
        int yearOfBirth = user.nextInt();
        System.out.println("Your name is: " + firstName + " " + initials + " " + lastName);
        System.out.println("Your birthday is:" + String.format("%02d", dayOfBirth) + "/" + String.format("%02d", monthOfBirth) + "/" + yearOfBirth);
        */

        //prime number verification
        Scanner prime = new Scanner(System.in);
        int value1 = prime.nextInt();

        if(isPrime(value1)) {
            System.out.println(value1 + " is a prime number");
        } else {
            System.out.println(value1 + " is not a prime number");
        }
    }
/*
    public static boolean isDivisible(int num1, int num2) {
        if (num1 % num2 == 0) {
            return true;
        } else {
            return false;
        }
    }
*/
    public static boolean isPrime(int value1) {
        if(value1 < 2) {
            return false;
        }

        for (int i=2; i<value1; i++) {
            if (value1 % i == 0) {
                return false;
            }
        }
        return true;
    }
}