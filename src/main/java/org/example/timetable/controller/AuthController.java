
package org.example.timetable.controller;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AuthController {


    @GetMapping("/")
    public String showLoginForm() {
        System.out.println("login ");
        return "signin";
    }
    @GetMapping("/index")
    public String Form() {
        System.out.println("login ");
        return "index";
    }
    @GetMapping("/signup")
    public String signupForm() {
        System.out.println("login ");
        return "signup";
    }



}
