package com.theo.backend.controller;

import com.theo.backend.json.request.LoginRequest;
import com.theo.backend.json.response.LoginResponse;
import com.theo.backend.model.User;
import com.theo.backend.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequiredArgsConstructor
public class Controller {

    private final UserRepository userRepository;

    @GetMapping("/")
    public String index() {
        return "Welcome to Theo!";
    }

    @PostMapping("/import-data")
    public String importData() {
        return "Thanks for importing data!";
    }

    @PostMapping("/login")
    public LoginResponse login(@RequestBody final LoginRequest loginRequest) {
        final User user = findLoggedInUser(loginRequest);
        return Optional.ofNullable(user)
                .map(this::buildLoginResponse)
                .orElse(null);
    }

    private User findLoggedInUser(final LoginRequest loginRequest) {
        if (loginRequest == null) {
            return null;
        }

        final String username = loginRequest.getUsername();
        final String password = loginRequest.getPassword();
        if (username == null || password == null) {
            return null;
        }

        final Optional<User> userOptional = userRepository.findByUsername(username);
        if (userOptional.isPresent() && userOptional.get().getPassword().equals(password)) {
            return userOptional.get();
        }
        return null;
    }

    private LoginResponse buildLoginResponse(final User user) {
        return LoginResponse.builder()
                .userID(user.getId())
                .name(user.getName())
                .role(user.getRole().getName())
                .build();
    }
}