package _05_class.practice.practice4;

// Shape 클래스를 상속받는 Rectangle 클래스 정의
class Rectangle extends Shape {
    double width;
    double height;

    // 생성자
    public Rectangle(String color, double width, double height) {
        super(color, "사각형");
        this.width = width;
        this.height = height;
    }

    // calculateArea 메소드 오버라이딩
    @Override
    double calculateArea() {
        return width * height;
    }
}
