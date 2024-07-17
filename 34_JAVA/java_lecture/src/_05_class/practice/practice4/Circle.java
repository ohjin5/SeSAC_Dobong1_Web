package _05_class.practice.practice4;

class Circle extends Shape {
    double radius;

    // 생성자
    public Circle(String color, double radius) {
        super(color, "원");
        this.radius = radius;
    }

    // calculateArea 메소드 오버라이딩
    @Override
    double calculateArea() {
        return Math.PI * radius * radius;
    }
}
