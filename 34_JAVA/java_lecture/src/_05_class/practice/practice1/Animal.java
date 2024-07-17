package _05_class.practice.practice1;


// Shape 클래스를 상속받아 Animal 클래스를 만듦
public abstract class Animal {
    String spec;
    String name;
    int age;

    // 생성자
    public Animal(String spec, String name, int age) {
        this.spec = spec;
        this.name = name;
        this.age = age;
    }

    // makeSound 메소드 구현
    void makeSound() {
        System.out.println("동물은 소리를 낸다");
    }

}


