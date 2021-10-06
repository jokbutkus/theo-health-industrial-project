package com.theo.backend.model;

import javax.persistence.*;

@Entity
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @ManyToOne
    @JoinColumn
    private UserRole role;

    @OneToOne(mappedBy = "staff")
    private AthleteStaff staffLink;

    @OneToOne(mappedBy = "athlete")
    private AthleteStaff athleteLink;

    @Column(unique = true, nullable = false)
    private String username;
    @Column(nullable = false)
    private String password;
    private String name;
}
