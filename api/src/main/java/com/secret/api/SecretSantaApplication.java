package com.secret.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

@SpringBootApplication()
public class SecretSantaApplication {

	public static void main(String[] args) {
		SpringApplication.run(SecretSantaApplication.class, args);
/*
		Map<Integer, Character> map = new HashMap<>();
		String[] str = {"aditya"};
		map = Arrays.stream(str).map( s -> s.contains("a")).collect(Collectors.toCollection(Map<Integer,Character>));*/
	}

}


