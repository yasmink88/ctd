public class Employee {
    private String firstName;
    private String lastName;
    private int age;
    private String rg;
    private boolean registeredMT;

    public Employee(String firstName, String lastName, int age, String rg, boolean registeredMT) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.rg = rg;
        this.registeredMT = registeredMT;
    }

    public boolean isRegisteredMT() {
        return registeredMT;
    }

    public void setRegisteredMT(boolean registeredMT) {
        this.registeredMT = registeredMT;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getRg() {
        return rg;
    }

    public void setRg(String rg) {
        this.rg = rg;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", age=" + age +
                ", rg='" + rg + '\'' +
                ", registeredMT=" + registeredMT +
                '}';
    }
}
