package com.theo.backend.repositories;

import com.theo.backend.model.AthleteStaff;
import com.theo.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AthleteStaffRepository extends JpaRepository<AthleteStaff, Long> {
    List<AthleteStaff> findAllByStaff(Optional<User> user);
}
