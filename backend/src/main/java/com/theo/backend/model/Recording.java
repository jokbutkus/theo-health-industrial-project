package com.theo.backend.model;

import lombok.Getter;
import javax.persistence.*;
import java.util.Set;

@Getter
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