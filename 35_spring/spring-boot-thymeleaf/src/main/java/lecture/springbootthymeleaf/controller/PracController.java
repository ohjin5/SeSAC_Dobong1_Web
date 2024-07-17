package lecture.springbootthymeleaf.controller;

import lecture.springbootthymeleaf.vo.UserVO;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
//@RequestMapping("/introduce")
public class PracController {

    @ExceptionHandler
    public String errHandler(Exception e){
        System.out.println("error" + e.getMessage());
        return "error";
    }

    @GetMapping("")
    public String get(){
        return "apiprac2";
    }

    @GetMapping("/introduce/{name}")
    public String getRes2(@PathVariable String name, Model model){
        model.addAttribute("name", name);

        return "apiprac1";
    }


    @GetMapping("/introduce2")
    public String introduce2(@RequestParam (value = "name")String nickname, @RequestParam int age,
                             Model model) {
        model.addAttribute("name", nickname);
        model.addAttribute("age", age);
        return "apiprac1";
    }

//    @PostMapping("/submit")
//    public String submitForm(
//            @RequestParam String name,
//            @RequestParam String gender,
//            @RequestParam String birthdate,
//            @RequestParam String[] interests,
//            Model model
//    ) {
//        model.addAttribute("name",name);
//        model.addAttribute("gender",gender);
//        model.addAttribute("birthdate",birthdate);
//        model.addAttribute("interests",interests);
//
//
//        // 처리가 완료된 후 리다이렉트할 페이지를 반환합니다.
//        return "apiprac2result";
//    }

    @PostMapping("/submit")
    public String submitForm(@RequestBody UserVO userVO) {
        System.out.println("Received user data: " + userVO);


        return "apiprac2result";
    }
}
