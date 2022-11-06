package digital.booking.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "favorites")
public class Favorite {

    @Id
    @SequenceGenerator(name="favorite_seg",initialValue = 1,allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "favorite_seq")

    @NotNull
    private Long id;

    @NotNull
    @Column
    private Boolean isFavorite;

    @OneToOne
    @JoinColumn(name = "productId",nullable = false)
    private Product product;

}
