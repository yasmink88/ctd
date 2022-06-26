import java.time.LocalDate;

public class PerMonth extends Contract {
    private double monthlySalary;
    private int totalHours;
    private String position;

    public PerMonth(int contractDuration, String startDate, Employee employee, boolean registeredMT, double monthlySalary, int totalHours, String position) {
        super(contractDuration, startDate, employee, registeredMT);
        this.monthlySalary = monthlySalary;
        this.totalHours = totalHours;
        this.position = position;
    }

    public double getMonthlySalary() {
        return monthlySalary;
    }

    public void setMonthlySalary(double monthlySalary) {
        this.monthlySalary = monthlySalary;
    }

    public int getTotalHours() {
        return totalHours;
    }

    public void setTotalHours(int totalHours) {
        this.totalHours = totalHours;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    @Override
    public String toString() {
        return "PerMonth{" +
                "monthlySalary=" + monthlySalary +
                ", totalHours=" + totalHours +
                ", position='" + position + '\'' +
                '}';
    }

    public void isBoss() {
        if (this.position.equals("Boss")) {
            System.out.println("This person is a boss");
        }
    }
}
