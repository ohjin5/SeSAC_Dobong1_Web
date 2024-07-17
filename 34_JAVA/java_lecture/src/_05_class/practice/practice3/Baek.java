package _05_class.practice.practice3;

// Student 클래스를 상속받는 Baek 클래스 정의
public class Baek extends Student {
    // 생성자
    public Baek(String name, String school, int age, String studentID) {
        super(name, school, age, studentID);
    }

    // todo 메소드 오버라이딩
    @Override
    void todo() {
        System.out.println("점심은 백종원 피자");
    }
}