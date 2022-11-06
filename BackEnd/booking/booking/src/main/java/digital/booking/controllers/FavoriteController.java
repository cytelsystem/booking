package digital.booking.controllers;

import digital.booking.entities.Favorite;
import digital.booking.services.FavoriteService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/favorites")
public class FavoriteController {

    @Autowired
    private FavoriteService favoriteService;

    @Operation(summary = "Consultar Todas los favoritos")
    @GetMapping
    public ResponseEntity<List<Favorite>> findAllFavorites(){
        return ResponseEntity.ok(favoriteService.searchAll());
    }
}
