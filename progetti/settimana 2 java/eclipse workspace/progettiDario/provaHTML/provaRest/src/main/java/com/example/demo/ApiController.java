package com.example.demo;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApiController {
	
	@CrossOrigin
	@RequestMapping("/")
	public ArrayList<String> getDati(){
		Business db=new Business();
		ArrayList<String> r=db.getClienti();
		return r;
	}
	@CrossOrigin
	@RequestMapping("/viaggi")
	public ArrayList<String> getViaggi(@RequestParam String id){
		Business db=new Business();
		ArrayList<String> r=db.getViaggi(id);
		return r;
	}
}
