package _05_class.practice.practice6;


public class Car extends Vehicle {
    public Car(String name, int maxSpeed) {
        super(name, maxSpeed);
    }

    // move 메서드 오버라이드
    @Override
    void move() {
        System.out.println(name + "가 도로를 따라 이동 중");
    }
}