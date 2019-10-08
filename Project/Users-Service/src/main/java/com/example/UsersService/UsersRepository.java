package com.example.UsersService;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;
import java.util.List;

public interface UsersRepository extends CrudRepository<Users,Long> {
    @Query(value="select * from users u where u.user_name = ?1 ",nativeQuery = true)
     Users searchUserName(String userName);

    @Transactional
    @Modifying(clearAutomatically = true)
    @Query(value="update users u set active = false where u.user_name = ?1 ",nativeQuery = true)
    void blockUserName(String userName);

    @Transactional
    @Modifying(clearAutomatically = true)
    @Query(value="update users u set active = true where u.user_name = ?1 ",nativeQuery = true)
    void unblockUserName(String userName);

    
   
}
