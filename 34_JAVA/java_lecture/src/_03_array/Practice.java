package _03_array;

import java.util.ArrayList;
import java.util.Scanner;
import java.util.Arrays;

public class Practice {
    public static void main(String[] args) {
         //       #########배열 실습#################
//        Scanner scan = new Scanner(System.in);
//
//        System.out.print("5개의 정수를 입력하세요");
//
//        int[] intArray = new int[5];
//        int sum = 0;
//
//        for( int i=0; i<intArray.length; i++){
//            intArray[i] = scan.nextInt();
//            sum = sum + intArray[i];
//        }
//
//        System.out.println((double)sum/ intArray.length);

        // 실습. ArrayList 실습
        ArrayList<String> arrayList = new ArrayList<>();
        Scanner scanner = new Scanner(System.in);

        System.out.println("문자열을 입력하세요. :");
        String input = scanner.nextLine();

        while (!input.equals("exit")) {
            System.out.println("문자열을 입력하세요. :");
            arrayList.add(input);
            input = scanner.nextLine();
        }

        System.out.println("입력된 문자열:");
        for (String str : arrayList) {
            System.out.println(str);
        }
    }
}
