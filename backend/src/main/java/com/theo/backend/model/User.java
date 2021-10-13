package com.theo.backend.model;

import lombok.*;
import com.google.gson.annotations.Expose;

import javax.persistence.*;
import java.util.Set;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Expose
    private Long id;

    @ManyToOne
    @JoinColumn
    private UserRole role;

    @OneToMany(mappedBy = "user")
    private Set<Recording> recordings;

    @OneToMany(mappedBy = "staff")
    private Set<AthleteStaff> staffLink;

    @OneToOne(mappedBy = "athlete")
    private AthleteStaff athleteLink;

    @Expose
    @Column(unique = true, nullable = false)
    private String username;
    @Column(nullable = false)
    private String password;
    @Expose
    private String name;
    @Expose
    private String dateOfBirth;
    @Expose
    private String gender;
    @Expose
    private Long height;
    @Expose
    private Long weight;
}