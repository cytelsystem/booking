package digital.booking.entities;

import lombok.Data;

import javax.persistence.*;

@Data
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
