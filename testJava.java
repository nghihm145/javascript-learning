public class testJava {
    public static void main(String[] args) {
        int a = 1;
        if (a % 2 == 0) {
            System.out.println("Even");
        } else {
            System.out.println("Odd");
        }

        int age = 20;
        if (age < 12) {
            System.out.println("Ticket price: 5");
        } else if (age < 20) {
            System.out.println("Ticket price: 10");
        } else if (age < 60) {
            System.out.println("Ticket price: 20");
        } else {
            System.out.println("Ticket price: 15");
        }
        int price = 0;
        switch (age) {
            case (age < 12):
                price = 5;
                break;
            case age < 20:
                price = 10;

            default:
                break;
        }
    }
}