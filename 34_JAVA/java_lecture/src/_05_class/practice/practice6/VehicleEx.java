package _05_class.practice.practice6;

public class VehicleEx {
    public static void main(String[] args) {
        // Vehicle 배열 생성
        Vehicle[] vehicles = new Vehicle[2];
        vehicles[0] = new Car("자동차", 120);
        vehicles[1] = new Airplane("비행기", 1000);

        // 반복문을 사용하여 move() 메서드 출력
        for (Vehicle vehicle : vehicles) {
            vehicle.move();
            if (vehicle instanceof Flyable) {
                ((Flyable) vehicle).fly();
            }
        }
    }
}

