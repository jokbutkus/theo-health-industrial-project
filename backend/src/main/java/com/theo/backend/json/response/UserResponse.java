package com.theo.backend.json.response;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class UserResponse {
    private Long userID;
    private String name;
    private String username;
}
