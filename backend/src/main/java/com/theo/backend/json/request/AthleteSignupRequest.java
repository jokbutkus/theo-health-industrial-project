package com.theo.backend.json.request;

import lombok.Getter;

@Getter
public class AthleteSignupRequest extends SignupRequest {
    private Long staffId;
    private String dateOfBirth;
    private String gender;
    private Long height;
    private Long weight;
}
