import java.time.LocalDate;

public abstract class Contract implements Comparable<Contract> {
    private int contractDuration;
    private LocalDate startDate;
    private Employee employee;

    public Contract(int contractDuration, String startDate, Employee employee) {
        this.contractDuration = contractDuration;
        this.startDate = LocalDate.parse(startDate);
        this.employee = employee;
    }

    public int getContractDuration() {
        return contractDuration;
    }

    public void setContractDuration(int contractDuration) {
        this.contractDuration = contractDuration;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    @Override
    public int compareTo(Contract o) {
        if(this.getContractDuration() > o.getContractDuration()) return 1;
        if(this.getContractDuration() < o.getContractDuration()) return -1;
        return 0;
    }

    public boolean apto(Employee getEmployee) {
        if(this.getEmployee().isRegisteredMT() == true) {
            return true;
        } else {
            return false;
        }
    }
}
