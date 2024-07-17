package _05_class.practice.practice4;

import java.util.ArrayList;

public class ShapeEx {
    public static void main(String[] args) {

        ArrayList<Shape> shapes = new ArrayList<>();

        // Circle 객체 생성 및 리스트에 추가
        Circle circle = new Circle("빨강", 5.0);
        shapes.add(circle);

        // Rectangle 객체 생성 및 리스트에 추가
        Rectangle rectangle = new Rectangle("파랑", 3.0, 8.0);
        shapes.add(rectangle);

        // 도형 정보 출력
        for (Shape shape : shapes) {
            System.out.println("도형 종류: " + shape.type);
            System.out.println("도형 색상: " + shape.getColor());
            System.out.println("도형 넓이: " + shape.calculateArea());
            System.out.println();
        }
    }
}
