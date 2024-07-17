package lecture.springbootthymeleaf.controller;


import lecture.springbootthymeleaf.dto.UserDTO;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/restapi")
public class RestApiController {

    @GetMapping("/user")
    public String get(@RequestParam String word){
//        "%word%"
        String name = "lily";
        int age = 88;
        return name + "," + age;
    }

    @PostMapping("/user")
    public String post(@RequestBody UserDTO user){
        return user.getName() + "," + user.getAge();
    }


    @PatchMapping("/user/{id}")
    public String patch(@PathVariable int id, @RequestBody UserDTO user){
        return id + "님의 정보 수정: " + user.getName() + "," + user.getAge();
    }


    @DeleteMapping("/user/{id}")
    public String delete(@PathVariable int id){
        return id + "님의 정보 삭제";
    }
}
