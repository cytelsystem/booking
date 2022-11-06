package digital.booking.repositories;

import digital.booking.entities.Favorite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FavoriteRepository extends JpaRepository<Favorite, Long> {
    @Query(value = "select f from Favorite f INNER JOIN users u ON u.id = ?1")
    List<Favorite>findFavoritesByUserId(Long id);
}
