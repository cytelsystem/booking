package digital.booking.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "categories")
public class Category {

    @Id
    @SequenceGenerator(name="category_seg",initialValue = 1,allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "category_seq")
    private Long id;

    @Column
    private String title;

    @Column
    private String description;

    @Column
    private String imageURL;


}
