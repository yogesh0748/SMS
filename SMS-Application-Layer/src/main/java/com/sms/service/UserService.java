package com.sms.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.sms.model.User;
import com.sms.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepo;
	
	public User registerUser(String username,String password) {
		User user = new User(username,password);
		return userRepo.save(user);
		
	}
}
