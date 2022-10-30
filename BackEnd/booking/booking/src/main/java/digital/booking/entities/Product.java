package digital.booking.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "products")
public class Product {

    @Id
    @SequenceGenerator(name="product_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "product_seq")
    @NotNull
    private Long id;

    @NotNull
    @OneToOne
    private Category category;

// Agregar en Category la lista de productos (relación)
    @NotNull
    @OneToMany
    private List<Feature> features;

    @NotNull
    @OneToOne
    private City city;

    @NotNull
    @OneToMany
    private List<Image> images;

}
