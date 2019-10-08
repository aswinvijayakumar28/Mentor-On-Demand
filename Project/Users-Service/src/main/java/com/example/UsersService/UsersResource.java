package com.example.UsersService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UsersResource {

    @Autowired
    UsersService usersService;

    @RequestMapping(method= RequestMethod.POST,value="/users")
    public void addPerson(@RequestBody Users u) {
        usersService.addUsers(u);
    }

    @RequestMapping("/users")
    public List<Users> getPersons(){
        return usersService.getUser();
    }


    @RequestMapping("/user/{id}")
    public Users getPerson(@PathVariable Long id){
        return usersService.getUsers(id);
    }

    @RequestMapping("/userName/{userName}")
    public Users getPersonUserName(@PathVariable String userName){
        return usersService.getUsersUserName(userName);
    }

    @RequestMapping("/blockUser/{userName}")
    public void blockUser(@PathVariable String userName){
         usersService.blockUserName(userName);
    }

    @RequestMapping("/unblockUser/{userName}")
    public void unblockUser(@PathVariable String userName){
        usersService.unblockUserName(userName);
    }



    @RequestMapping(method=RequestMethod.PUT,value="/users/{id}")
    public void updatePerson(@RequestBody Users u, @PathVariable Long id){
        usersService.updateUsers(u, id);
    }

    @RequestMapping(method= RequestMethod.DELETE,value="/users/{id}")
    public void deletePerson(@PathVariable Long id){
        usersService.deleteUsers(id);
    }





}
