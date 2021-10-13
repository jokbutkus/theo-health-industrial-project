package com.theo.backend.controller;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.theo.backend.json.request.AthleteSignupRequest;
import com.theo.backend.json.request.LoginRequest;
import com.theo.backend.json.request.SignupRequest;
import com.theo.backend.json.response.LoginResponse;
import com.theo.backend.json.response.UserResponse;
import com.theo.backend.model.*;
import com.theo.backend.repositories.*;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

import static com.theo.backend.constants.UserRoleConstants.ATHLETE_ROLE;
import static com.theo.backend.constants.UserRoleConstants.TRAINER_ROLE;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequiredArgsConstructor
public class Controller {
    private final Gson gson = new GsonBuilder()
            .excludeFieldsWithoutExposeAnnotation()
            .serializeNulls()
            .create();

    private final UserRepository userRepository;
    private final UserRoleRepository userRoleRepository;
    private final RecordingRepository recordingRepository;
    private final RecordingDataRepository recordingDataRepository;
    private final AthleteStaffRepository athleteStaffRepository;

    @GetMapping("/")
    public String index() {
        return "Welcome to Theo!";
    }

    @GetMapping("/user/{id}")
    public UserResponse userRetrieval(@PathVariable Long id) {
        final Optional<User> user = userRepository.findById(id);
        if (!user.isPresent()) return null;
        else return Optional.ofNullable(user)
                .map(this::buildUserResponse)
                .orElse(null);
    }

    private UserResponse buildUserResponse(final Optional<User> user) {
        return UserResponse.builder()
                .userID(user.get().getId())
                .username(user.get().getUsername())
                .name(user.get().getName())
                .gender(user.get().getGender())
                .dateOfBirth(user.get().getDateOfBirth())
                .height(user.get().getHeight())
                .weight(user.get().getWeight())
                .build();
    }

    @GetMapping("/client-list/{id}")
    public String clientListRetrieval(@PathVariable Long id) {
        final Optional<User> user = userRepository.findById(id);
        final List<AthleteStaff> clientList = athleteStaffRepository.findAllByStaff(user);
        return gson.toJson(clientList);
    }

    @GetMapping("/exercise/{id}")
    public String exerciseRetrieval(@PathVariable Long id) {
        final Optional<Recording> recording = recordingRepository.findById(id);
        final List<RecordingData> data = recordingDataRepository.findAllByRecording(recording);
        return gson.toJson(data);
    }

    @GetMapping("/exercise-list/{id}")
    public String exerciseListRetrieval(@PathVariable Long id) {
        final Optional<User> user = userRepository.findById(id);
        final List<Recording> recordings = recordingRepository.findAllByUser(user);
        return gson.toJson(recordings);
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

    @PostMapping("/signup")
    public LoginResponse signup(@RequestBody final SignupRequest signupRequest) {
        if (!userRoleRepository.existsByName(TRAINER_ROLE)) {
            saveUserRoleWithName(TRAINER_ROLE);
        }
        final UserRole userRole = userRoleRepository.findByName(TRAINER_ROLE)
                .orElse(null);

        final User user = User.builder()
                .username(signupRequest.getUsername())
                .password(signupRequest.getPassword())
                .name(signupRequest.getName())
                .role(userRole)
                .build();

        final User newUser = userRepository.save(user);
        return buildLoginResponse(newUser);
    }

    @PostMapping("/athlete-signup")
    public LoginResponse athleteSignup(@RequestBody final AthleteSignupRequest signupRequest) {
        if (!userRoleRepository.existsByName(ATHLETE_ROLE)) {
            saveUserRoleWithName(ATHLETE_ROLE);
        }
        final UserRole userRole = userRoleRepository.findByName(ATHLETE_ROLE)
                .orElse(null);

        final User user = User.builder()
                .username(signupRequest.getUsername())
                .password(signupRequest.getPassword())
                .name(signupRequest.getName())
                .role(userRole)
                .dateOfBirth(signupRequest.getDateOfBirth())
                .gender(signupRequest.getGender())
                .height(signupRequest.getHeight())
                .weight(signupRequest.getWeight())
                .build();

        final Optional<User> staffUserOptional = userRepository.findById(signupRequest.getStaffId());
        if (staffUserOptional.isPresent()) {
            final User staffUser = staffUserOptional.get();
            final User athleteUser = userRepository.save(user);

            final AthleteStaff athleteStaff = AthleteStaff.builder()
                    .staff(staffUser)
                    .athlete(athleteUser)
                    .build();
            athleteStaffRepository.save(athleteStaff);

            return buildLoginResponse(athleteUser);
        }

        return null;
    }

    private void saveUserRoleWithName(final String userRoleName) {
        final UserRole userRole = new UserRole();
        userRole.setName(userRoleName);
        userRoleRepository.save(userRole);
    }
}