package com.theo.backend.repositories;

import com.theo.backend.model.Recording;
import com.theo.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface RecordingRepository extends JpaRepository<Recording, Long> {
    List<Recording> findAllByUser(Optional<User> user);
}
