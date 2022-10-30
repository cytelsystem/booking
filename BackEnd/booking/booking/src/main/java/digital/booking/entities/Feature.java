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
@Table(name = "features")
public class Feature {

    @Id
    @SequenceGenerator(name="feature_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "feature_seq")
    @NotNull
    private Long id;

    @Column
    @NotNull
    private String name;

    @OneToMany
    private List<Product> products;
}
