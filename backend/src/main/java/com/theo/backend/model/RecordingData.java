package com.theo.backend.model;

import com.google.gson.annotations.Expose;
import lombok.Getter;
import javax.persistence.*;

@Getter
@Entity
@Table(name = "recordingdata")
public class RecordingData {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Expose
    private Long recordingDataID;

    @ManyToOne
    @JoinColumn(name = "recordingID")
    private Recording recording;

    @Expose
    @Column(nullable = false)
    private String time;
    @Expose
    private Long sensor1;
    @Expose
    private Long sensor2;
    @Expose
    private Long sensor3;
    @Expose
    private Long sensor4;
}
