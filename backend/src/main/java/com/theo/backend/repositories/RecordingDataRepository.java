package com.theo.backend.repositories;

import com.theo.backend.model.Recording;
import com.theo.backend.model.RecordingData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RecordingDataRepository extends JpaRepository<RecordingData, Long>{
    List<RecordingData> findAllByRecording(Optional<Recording> recording);
}
