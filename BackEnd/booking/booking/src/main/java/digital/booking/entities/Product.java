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

    // Falta agregar @Column (ver con Hector qué columnas tendrá la tabla de productos)

    private String title;

    private String description;

    @OneToOne
    private Category category;

    // Agregar en la clase Category la lista de productos (relación)

    @OneToMany
    private List<Feature> features;

    @OneToOne
    private City city;

    // Ver si debería haber una clase de tipo Ubicacion (con una ciudad y un país)

    @OneToMany
    private List<Image> images;

}
