package _05_class.practice.practice1;

// Animal 클래스를 상속받는 Cat 클래스 정의
public class Cat extends Animal {
    // 생성자
    public Cat(String spec, String name, int age) {
        super("고양이", name, age);
    }

    // makeSound 메소드 오버라이딩
    @Override
    void makeSound() {
        System.out.println("야옹");
    }

    // 고유한 메소드나 필드 추가 가능
    void sleep() {
        System.out.println("고양이가 잠을 잡니다.");
    }
}
