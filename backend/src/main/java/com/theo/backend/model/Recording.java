package com.theo.backend.model;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Set;

@Entity
@Table(name = "recording")
public class Recording {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long recordingID;

    @OneToMany(mappedBy = "recording")
    private Set<RecordingData> recordingData;

    @ManyToOne
    @JoinColumn(name = "athleteID")
    private User user;
    
}