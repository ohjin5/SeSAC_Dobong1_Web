package _05_class.practice.practice3;

// 추상 클래스 Student 정의
public abstract class Student {
    String name;
    String school;
    int age;
    String studentID;

    // 생성자
    public Student(String name, String school, int age, String studentID) {
        this.name = name;
        this.school = school;
        this.age = age;
        this.studentID = studentID;
    }

    String getName(){
        return this.name;
    }

    String getSchool(){
        return  this.school;
    }

    int getAge(){
        return  this.age;
    }

    String getStudentID(){
        return this.studentID;
    }

    // 추상 메소드 todo 선언
    abstract void todo();
}





