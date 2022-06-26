public class Main {
    public static void main(String[] args) {
        Employee yasminkhalaf = new Employee("Yasmin", "Khalaf", 33, "476890263", true);
        PerHour contract1 = new PerHour(12, "2022-07-26", yasminkhalaf, 40, 23.5);
        PerHour contract2 = new PerHour(8, "2022-08-20", yasminkhalaf, 30, 27.5);
        PerMonth contract3 = new PerMonth(8, "2022-09-15", yasminkhalaf, 3400, 40, "Employee" );
        System.out.println(contract1.compareTo(contract2));
        System.out.println(contract1.apto(yasminkhalaf));
    }
}