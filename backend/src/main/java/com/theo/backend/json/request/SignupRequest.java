package com.theo.backend.json.request;

import lombok.Getter;

@Getter
public class SignupRequest {
    private String username;
    private String password;
    private String name;
}
