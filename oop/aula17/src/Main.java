public class Main {
    public static void main(String[] args) throws ExceptionEmployee {
        Employee yasminkhalaf = new Employee("Yasmin", "Khalaf", 33, "476890263");
        PerHour contract1 = new PerHour(12,"2022-05-27", yasminkhalaf, true, 40, 23.5);
        PerMonth contract2 = new PerMonth(20, "2022-08-21", yasminkhalaf, true, 4500, 40, "Employee" );

        try {
            contract1.EmployeeRegistered();
        } catch (ExceptionEmployee e) {
            throw new RuntimeException(e);
        }

        System.out.println(contract1);

        try {
            contract2.EmployeeRegistered();
        } catch (ExceptionEmployee e) {
            throw new RuntimeException(e);
        }
        System.out.println(contract2);
        contract2.isBoss();
    }
}