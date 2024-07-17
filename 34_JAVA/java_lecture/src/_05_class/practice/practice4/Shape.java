package _05_class.practice.practice4;


// 추상 클래스 Shape 정의
public abstract class Shape {
    String color;
    String type;

    // 생성자
    public Shape(String color, String type) {
        this.color = color;
        this.type = type;
    }

    // 추상 메소드 calculateArea 선언
    abstract double calculateArea();

    // getColor 메소드 구현
    String getColor() {
        return color;
    }
}



