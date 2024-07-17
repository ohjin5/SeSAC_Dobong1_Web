package _05_class.practice.practice1;

public class Dog extends Animal {
    // 생성자
    public Dog(String Spec, String name, int age) {
        super("강아지", name, age);
    }

    // makeSound 메소드 오버라이딩
    @Override
    void makeSound() {
        System.out.println("멍멍");
    }

    // 고유한 메소드나 필드 추가 가능
    void wagTail() {
        System.out.println("개가 꼬리를 흔듭니다.");
    }
}