package com.theo.backend.model;

import com.google.gson.annotations.Expose;
import lombok.Getter;

import javax.persistence.*;
import java.util.Set;

@Getter
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
}