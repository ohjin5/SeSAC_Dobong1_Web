package _05_class.practice.practice6;


public class Airplane extends Vehicle implements Flyable {
    public Airplane(String name, int maxSpeed) {
        super(name, maxSpeed);
    }

    // move 메서드 오버라이드
    @Override
    void move() {
        System.out.println(name + "가 하늘을 날아가는 중");
    }

    // fly 메서드 구현
    @Override
    public void fly() {
        System.out.println(name + "가 고도 10,000 피트에서 비행 중");
    }
}
