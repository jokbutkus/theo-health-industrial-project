package com.theo.backend.model;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "user_role")
public class UserRole {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @OneToMany(mappedBy = "role")
    private Set<User> users;

    private String name;
}
