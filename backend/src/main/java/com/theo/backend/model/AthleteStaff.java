package com.theo.backend.model;

import javax.persistence.*;

@Entity
@Table(name = "athlete_staff")
public class AthleteStaff {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @OneToOne
    private User staff;

    @OneToOne
    private User athlete;
}
