package com.example.UsersService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UsersService {

    @Autowired
    UsersRepository usersRepository;

    public void addUsers(Users u) {

        usersRepository.save(u);

    }


    public List<Users> getUser(){
        List<Users> users = new ArrayList<Users>();
        usersRepository.findAll().forEach(users::add);
        return users;
    }

    public Users getUsers(Long id) {

        return usersRepository.findById(id).orElse(null);
    }

    public Users getUsersUserName(String userName) {

        return usersRepository.searchUserName(userName);
    }

    public void blockUserName(String userName) {

        usersRepository.blockUserName(userName);
    }
    public void unblockUserName(String userName) {

        usersRepository.unblockUserName(userName);
    }




    public void updateUsers(Users u , Long id) {

        usersRepository.save(u);

    }

    public void deleteUsers(Long id) {

        usersRepository.deleteById(id);
    }
}
