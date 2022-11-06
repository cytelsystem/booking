package digital.booking.repositories;

import digital.booking.entities.Favorite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface FavoriteRepository extends JpaRepository<Favorite, Long> {
    @Query(value = "SELECT f.* FROM favorites f INNER JOIN users u ON f.id = u.id")
    List<Favorite>findFavoritesByUser(Long id);
}
