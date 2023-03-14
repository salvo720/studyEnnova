package com.example.demo;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import models.Autista;
import models.Business;
import models.Cliente;
import models.Mezzo;
import models.Viaggio;

@RestController
public class ApiController {
	private Business b1=new Business();
	
	@CrossOrigin
	@RequestMapping("/a")
	public ArrayList<Autista> getDatiAutisti(){

		return b1.getAutisti();
	}
	
	@CrossOrigin
	@RequestMapping("/ar")
	public Autista getViaggi(@RequestParam String id){
		b1.getAutisti();
		return b1.getViaggi(id);
	}
	
	
	@CrossOrigin
	@RequestMapping("/c")
	public ArrayList<Cliente> getDatiClienti(){

		return b1.getClienti();
	}
	
	
	@CrossOrigin
	@RequestMapping("/m")
	public ArrayList<Mezzo> getDatiMezzi(){

		return b1.getMezzi();
	}
	
	@CrossOrigin
	@RequestMapping("/v")
	public ArrayList<Viaggio> getDatiViaggi(){

		return b1.getViaggi();
	}
	
	
}
