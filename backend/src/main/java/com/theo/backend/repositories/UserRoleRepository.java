package com.theo.backend.repositories;

import com.theo.backend.model.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRoleRepository extends JpaRepository<UserRole, Long> {
    Optional<UserRole> findByName(String name);

    boolean existsByName(String name);
}
