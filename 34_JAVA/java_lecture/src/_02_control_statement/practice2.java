package _02_control_statement;

import java.util.Scanner;

public class practice2 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("요일을 입력하세요 (월요일 ~ 일요일): ");
        String day = scanner.nextLine();

        switch (day) {
            case "월요일":
                System.out.println("월요일 일정: 운동하기");
                break;
            case "화요일":
                System.out.println("화요일 일정: 영어 공부하기");
                break;
            case "수요일":
                System.out.println("수요일 일정: 친구와 약속");
                break;
            case "목요일":
                System.out.println("목요일 일정: 쇼핑하기");
                break;
            case "금요일":
                System.out.println("금요일 일정: 영화 보기");
                break;
            case "토요일":
                System.out.println("토요일 일정: 가족과 나들이");
                break;
            case "일요일":
                System.out.println("일요일 일정: 휴식");
                break;
            default:
                System.out.println("잘못된 입력입니다. 올바른 요일을 입력하세요.");
        }
    }
}
