package com.theo.backend.controller;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.theo.backend.json.request.LoginRequest;
import com.theo.backend.json.response.LoginResponse;
import com.theo.backend.model.Recording;
import com.theo.backend.model.RecordingData;
import com.theo.backend.model.User;
import com.theo.backend.repositories.RecordingDataRepository;
import com.theo.backend.repositories.RecordingRepository;
import com.theo.backend.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
public class Controller {
    Gson gson = new GsonBuilder().excludeFieldsWithoutExposeAnnotation().create();

    private final UserRepository userRepository;
    private final RecordingRepository recordingRepository;
    private final RecordingDataRepository recordingDataRepository;

    @GetMapping("/")
    public String index() {
        return "Welcome to Theo!";
    }

    @GetMapping("/exercise/{id}")
    public String exerciseRetrieval(@PathVariable Long id) {
        final Optional<Recording> recording = recordingRepository.findById(id);
        final List<RecordingData> data = recordingDataRepository.findAllByRecording(recording);
        return gson.toJson(data);
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