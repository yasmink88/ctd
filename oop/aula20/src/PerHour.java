import java.time.LocalDate;

public class PerHour extends Contract {
 private int hours;
 private double hourPrice;

    public PerHour(int contractDuration, String startDate, Employee employee, int hours, double hourPrice) {
        super(contractDuration, startDate, employee);
        this.hours = hours;
        this.hourPrice = hourPrice;
    }

    public int getHours() {
        return hours;
    }

    public void setHours(int hours) {
        this.hours = hours;
    }

    public double getHourPrice() {
        return hourPrice;
    }

    public void setHourPrice(double hourPrice) {
        this.hourPrice = hourPrice;
    }

    @Override
    public String toString() {
        return "PerHour{" +
                "hours=" + hours +
                ", hourPrice=" + hourPrice +
                '}';
    }
}
