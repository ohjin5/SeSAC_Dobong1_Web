package _05_class.practice.practice1;


public class AnimalEx {
    public static void main(String[] args) {
        Animal animal = new Dog("강아지", "꼬미", 5 );
        animal.makeSound();
        System.out.println("===================");
        animal = new Cat("고양이", "꼬미2", 10);
        animal.makeSound();

    }
}