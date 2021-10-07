package com.theo.backend.model;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "recordingdata")
public class RecordingData {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long recordingDataID;

    @ManyToOne
    @JoinColumn(name = "recordingID")
    private Recording recording;

    @Column(nullable = false)
    private LocalDateTime time;
    private Long sensor1;
    private Long sensor2;
    private Long sensor3;
    private Long sensor4;
}
