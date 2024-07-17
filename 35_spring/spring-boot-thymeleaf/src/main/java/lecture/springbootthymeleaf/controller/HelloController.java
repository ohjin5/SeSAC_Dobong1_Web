package lecture.springbootthymeleaf.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;

@Controller
public class HelloController {

    @GetMapping("/hi")
    public String getHi(Model model) {
        Hello hello = new Hello();
        String[] fruits = {"apple", "banana", "grape"};
        model.addAttribute("msg", "Hi~");
        model.addAttribute("msg2", "<strong>안녕</strong>");
        model.addAttribute("age", 17);
        model.addAttribute("userType", "Admin");
        model.addAttribute("fruits", fruits);
        model.addAttribute("Hello", hello);
        return "hi";
    }

    @GetMapping("/prac/1")
    public String prac01(Model model){
        model.addAttribute("age", 17);
        return "prac1";
    }

    @GetMapping("/prac/2")
    public String prac02(Model model){
        ArrayList<Person> people = new ArrayList<>();
        people.add(new Person("kim", 10));
        people.add(new Person("lee", 20));
        people.add(new Person("hong", 30));
        people.add(new Person("park", 40));
        people.add(new Person("shin", 50));
        model.addAttribute("people", people);
        return "prac2";
    }
    // @AllArgsConstructor 는 나중에 배울 예정
    // @Getter 따로 Get 선언 해주지 않아도 쓸 수 있음
    public static class Person {
        private String name;
        private int age;

        public Person(String name, int age) {
            this.name = name;
            this.age = age;
        }

        // Getter and Setter methods
        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public int getAge() {
            return age;
        }

        public void setAge(int age) {
            this.age = age;
        }
    }

    // Hello 클래스는 HelloController 클래스 내부에 정의되어 있으므로 중첩 클래스로 유지
    class Hello {
        private String msg = "hi";

        public String getMsg() {
            return msg;
        }
    }


}
