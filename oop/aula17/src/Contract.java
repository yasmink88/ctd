import java.time.LocalDate;

public abstract class Contract implements Comparable<Contract> {
    private int contractDuration;
    private LocalDate startDate;
    private Employee employee;
    private boolean registeredMT;

    public Contract(int contractDuration, String startDate, Employee employee, boolean registeredMT) {
        this.contractDuration = contractDuration;
        this.startDate = LocalDate.parse(startDate);
        this.employee = employee;
        this.registeredMT = registeredMT;
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

    public boolean isRegisteredMT() {
        return registeredMT;
    }

    public void setRegisteredMT(boolean registeredMT) {
        this.registeredMT = registeredMT;
    }

    @Override
    public int compareTo(Contract o) {
        if(this.getContractDuration() > o.getContractDuration()) return 1;
        if(this.getContractDuration() < o.getContractDuration()) return -1;
        return 0;
    }

    public void EmployeeRegistered() throws ExceptionEmployee {
        if (this.registeredMT == false) {
            throw new ExceptionEmployee();
        } else {
            System.out.println("Employee Registered");
        }
    }

}
