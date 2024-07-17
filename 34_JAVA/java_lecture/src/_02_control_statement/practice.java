package _02_control_statement;

import java.util.Scanner;



public class practice {
    public static double add(double num1, double num2) {
        return num1 + num2;
    }

    // 두 수를 빼는 메소드
    public static double subtract(double num1, double num2) {
        return num1 - num2;
    }

    // 두 수를 곱하는 메소드
    public static double multiply(double num1, double num2) {
        return num1 * num2;
    }

    // 두 수를 나누는 메소드 (0으로 나누는 경우는 고려하지 않음)
    public static double divide(double num1, double num2) {
        return num1 / num2;
    }

    public static double calculateArea(double radius) {
        return Math.PI * radius * radius;
    }

    // 직사각형의 넓이를 계산하는 메소드
    public static double calculateArea(double width, double height) {
        return width * height;
    }

    // 삼각형의 넓이를 계산하는 메소드
    public static double calculateArea(double base, double height, double check) {
        return check * base * height;
    }


    public static void main(String[] args) {
        // 첫번째 실습
//        System.out.println("이름을 입력하세요");
        Scanner scan = new Scanner(System.in);
//        String name = scan.next();
//        System.out.println("나이 입력하세요");
//        int age = scan.nextInt();
//        scan.close();
//
//        System.out.println("안녕하세요! " + name + "(" + age + "세)");
//        Scanner scan = new Scanner(System.in);
        
        // 두번째 실습
//        System.out.print("나이 입력하세요");
//
//        int age = scan.nextInt();
//
//        if (0 < age && age < 8) {
//            System.out.println("유아");
//        } else if (7 < age && age < 14) {
//            System.out.println("초등학생");
//        } else if (13 < age && age < 17) {
//            System.out.println("중학생");
//        } else if (16 < age && age < 20) {
//            System.out.println("고등학생");
//        } else if (age >= 20) {
//            System.out.println("성인");
//        } else {
//            System.out.println("오류");
//        }

        
        //세번째 실습
//        System.out.print("이름 입력하세요");
//        String name = scan.next();
//        String str1 = new String("성춘향");
//        String str2 = new String("홍길동"); // 문자열 객체
//
//        if (name.equals(str1)) {
//            System.out.println("여자");
//        } else if(name.equals(str2)) {
//            System.out.println("남자");
//        } else {
//            System.out.println("모르겠음");
//        }
        
        // 2024/05/13 첫번째 실습
//        System.out.println("숫자를 입력하세요");
//        int num = scan.nextInt();
//        for (int i = 1; i <= num; i++) {
//            System.out.print(i);
//            System.out.print(" ");
//        }
        
        // 2024/05/13 두번째 실습
//        System.out.print("숫자 두 개를 입력하세요");
//        int num1 = scan.nextInt();
//        int num2 = scan.nextInt();
//
//        // 더하기
//        System.out.println("더하기 결과: " + add(num1, num2));
//
//        // 빼기
//        System.out.println("빼기 결과: " + subtract(num1, num2));
//
//        // 나누기
//        System.out.println("나누기 결과: " + divide(num1, num2));
//
//        // 곱하기
//        System.out.println("곱하기 결과: " + multiply(num1, num2));

        // 2024/05/13 세번째 실습

//        double circleRadius = 5.0;
//        double rectangleWidth = 4.0;
//        double rectangleHeight = 7.0;
//        double triangleBase = 6.0;
//        double triangleHeight = 3.0;
//        double trianlgecheck = 0.5;
//
//        System.out.println("반지름이 5인 원의 넓이: " + calculateArea(circleRadius));
//
//        System.out.println("가로 4, 세로 7인 직사각형의 넓이 " + calculateArea(rectangleWidth , rectangleHeight));
//
//        System.out.println("밑변 6, 높이 3인 삼각형의 넓이" + calculateArea(triangleBase , triangleHeight , trianlgecheck));

    }
}
