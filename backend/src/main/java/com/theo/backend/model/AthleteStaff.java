package com.theo.backend.model;

import com.google.gson.annotations.Expose;
import javax.persistence.*;

@Entity
@Table(name = "athlete_staff")
public class AthleteStaff {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @ManyToOne
    private User staff;

    @OneToOne
    @Expose
    private User athlete;
}
