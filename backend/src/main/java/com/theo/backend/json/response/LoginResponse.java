package com.theo.backend.json.response;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class LoginResponse {
    private Long userID;
    private String name;
    private String role;
}